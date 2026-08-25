import { spawn } from "node:child_process";
import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer, request as httpRequest } from "node:http";
import { createGzip } from "node:zlib";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

// Production launcher:
//   - backend (Next.js API/admin/articles) on :3001
//   - reference frontend (front/dist) on :3000, proxying backend routes
// The frontend is built with same-origin API URLs, so /api, /news, /category,
// /admin and media paths are forwarded to the backend transparently.

const base = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(base, "front", "dist");
const backend = new URL(process.env.BACKEND_URL || "http://localhost:3001");
const port = Number(process.env.PORT || 3000);

const PROXY_PREFIXES = [
  "/api/",
  "/news/",
  "/category/",
  "/admin/",
  "/images/",
  "/videos/",
  "/icons/",
  "/placeholders/",
  "/market/",
  "/_next/",
];

const PROXY_EXACT = new Set([
  "/api",
  "/news",
  "/category",
  "/admin",
  "/sitemap.xml",
  "/robots.txt",
  "/feed.xml",
  "/manifest.json",
  "/og-default.png",
  "/icon.png",
  "/apple-icon.png",
  "/ecotimes-logo-red.png",
  "/ecotimes-logo-red2.png",
  "/ecotimes-logo-white.png",
]);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".map": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".pdf": "application/pdf",
};

function shouldProxy(pathname) {
  if (PROXY_EXACT.has(pathname)) return true;
  return PROXY_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

function proxy(req, res) {
  // Preserve original Host for CSRF check (isSameOrigin uses x-forwarded-host/host)
  // and add forwarded headers so Next.js sees the real client IP/proto
  const headers = {
    ...req.headers,
    host: req.headers.host ?? backend.host,
    "x-forwarded-host": req.headers.host ?? backend.host,
    "x-forwarded-proto": req.headers["x-forwarded-proto"] ?? (req.socket.encrypted ? "https" : "http"),
    "x-forwarded-for": req.headers["x-forwarded-for"] ?? req.socket.remoteAddress ?? "",
    "x-real-ip": req.socket.remoteAddress ?? "",
  };
  delete headers["accept-encoding"];
  const upstream = httpRequest(
    {
      hostname: backend.hostname,
      port: backend.port || 80,
      path: req.url,
      method: req.method,
      headers,
    },
    (up) => {
      res.writeHead(up.statusCode ?? 502, up.headers);
      up.pipe(res);
    }
  );
  upstream.on("error", () => {
    if (!res.headersSent) res.writeHead(502, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("backend unavailable");
  });
  req.pipe(upstream);
}

function serveStatic(req, res) {
  const url = new URL(req.url ?? "/", "http://localhost");
  const requested = url.pathname === "/" ? "/index.html" : url.pathname;
  let filePath = normalize(join(distDir, requested));
  if (!filePath.startsWith(distDir)) {
    res.writeHead(403);
    res.end();
    return;
  }
  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    filePath = join(distDir, "index.html");
  }
  const type = MIME[extname(filePath).toLowerCase()] ?? "application/octet-stream";
  const cache =
    filePath.includes(`${normalize("/assets/")}`) || filePath.includes("\\assets\\")
      ? "public, max-age=31536000, immutable"
      : "no-cache";

  // gzip text responses (HTML/CSS/JS/JSON/XML/SVG) to cut transfer size
  const compressible = /text\/|application\/json|application\/xml|application\/javascript|image\/svg/.test(type);
  const acceptGzip = /\bgzip\b/.test(req.headers["accept-encoding"] || "");
  if (compressible && acceptGzip) {
    res.writeHead(200, {
      "Content-Type": type,
      "Cache-Control": cache,
      "Content-Encoding": "gzip",
      "Vary": "Accept-Encoding",
    });
    createReadStream(filePath).pipe(createGzip()).pipe(res);
    return;
  }
  res.writeHead(200, { "Content-Type": type, "Cache-Control": cache });
  createReadStream(filePath).pipe(res);
}

if (!existsSync(join(distDir, "index.html"))) {
  console.error("[start] front/dist not found — run `npm run build` first.");
  process.exit(1);
}

createServer((req, res) => {
  const pathname = (req.url ?? "/").split("?")[0];
  if (shouldProxy(pathname)) return proxy(req, res);
  return serveStatic(req, res);
}).listen(port, "0.0.0.0", () => {
  console.log(`[front] serving front/dist on http://localhost:${port} (proxy -> ${backend.origin})`);
});

// Standalone Next.js server (created by `next build` with output:'standalone')
// In the Docker image this lives at /app/petro-standalone/server.js.
const standaloneServer = existsSync(join(base, "petro-standalone", "server.js"))
  ? join(base, "petro-standalone", "server.js")
  : join(base, "petro", ".next", "standalone", "server.js");

if (!existsSync(standaloneServer)) {
  console.error("[start] standalone server not found — expected petro-standalone/server.js or petro/.next/standalone/server.js");
  process.exit(1);
}

const child = spawn(process.execPath, [standaloneServer], {
  cwd: dirname(standaloneServer),
  stdio: ["ignore", "pipe", "pipe"],
  env: {
    ...process.env,
    PORT: "3001",
    HOSTNAME: "0.0.0.0",
    NODE_ENV: "production",
  },
});
const pipe = (data) => {
  for (const line of data.toString().split(/\r?\n/)) {
    if (line.trim()) console.log(`[backend] ${line}`);
  }
};
child.stdout.on("data", pipe);
child.stderr.on("data", pipe);
child.on("exit", (code) => {
  console.log(`[backend] exited with code ${code} — static frontend keeps serving with fallbacks`);
});
