import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const base = join(dirname(fileURLToPath(import.meta.url)), "..");

const jobs = [
  // backend's own dev script pipes through Unix `tee`; spawn next directly so it also works on Windows
  { name: "backend", cwd: join(base, "petro"), cmd: "npx", args: ["next", "dev", "-p", "3000"] },
  { name: "front", cwd: join(base, "front"), cmd: "npm", args: ["run", "dev"] },
];

for (const job of jobs) {
  const child = spawn(job.cmd, job.args, {
    cwd: job.cwd,
    shell: true,
    stdio: ["ignore", "pipe", "pipe"],
  });
  const pipe =
    (stream) =>
    (data) => {
      for (const line of data.toString().split(/\r?\n/)) {
        if (line.trim()) console.log(`[${job.name}] ${line}`);
      }
    };
  child.stdout.on("data", pipe(child.stdout));
  child.stderr.on("data", pipe(child.stderr));
  child.on("exit", (code) => console.log(`[${job.name}] exited with code ${code}`));
}
