import { spawn } from "node:child_process";
import { accessSync, constants } from "node:fs";
import { homedir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const base = join(dirname(fileURLToPath(import.meta.url)), "..");

function frontNode() {
  const major = Number(process.version.slice(1).split(".")[0]);
  if (major >= 22) return process.execPath;
  const portable = join(
    homedir(),
    "AppData",
    "Local",
    "Temp",
    "opencode",
    "node22",
    "node_modules",
    "node-win-x64",
    "bin",
    "node.exe"
  );
  try {
    accessSync(portable, constants.F_OK);
    return portable;
  } catch {
    return process.execPath;
  }
}

const jobs = [
  { name: "backend", cwd: join(base, "petro"), cmd: "npm", args: ["run", "dev"], env: {} },
  {
    name: "front",
    cwd: join(base, "front"),
    cmd: frontNode(),
    args: [join(base, "front", "node_modules", "vite", "bin", "vite.js"), "--host", "0.0.0.0"],
    env: { PORT: "3000" },
  },
];

for (const job of jobs) {
  const child = spawn(job.cmd, job.args, {
    cwd: job.cwd,
    shell: job.cmd === "npm",
    env: { ...process.env, ...job.env },
    stdio: ["ignore", "pipe", "pipe"],
  });
  const pipe = (data) => {
    for (const line of data.toString().split(/\r?\n/)) {
      if (line.trim()) console.log(`[${job.name}] ${line}`);
    }
  };
  child.stdout.on("data", pipe);
  child.stderr.on("data", pipe);
  child.on("exit", (code) => console.log(`[${job.name}] exited with code ${code}`));
}
