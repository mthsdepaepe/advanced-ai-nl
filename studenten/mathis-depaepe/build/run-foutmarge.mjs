// Foutmargetest: draait één promptbestand op T01–T10 uit test-set.md, drie runs.
// Zelfde opstelling als run-v4.mjs, maar met het volledige modelnaam en parallel.
// Elke run is een aparte `claude -p`-aanroep, zonder tools, vanuit een eigen lege map buiten de repo.
// Gebruik (vanuit deze map): node run-foutmarge.mjs <promptbestand> <uitvoermap> [model] [effort] [runs]
// Zonder model/effort/runs: claude-haiku-5-5, standaard-effort, 3 runs (de foutmargetest).
import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, existsSync, readdirSync } from "node:fs";
import { spawn } from "node:child_process";
import { join, dirname } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const [promptFile, outDir, MODEL = "claude-haiku-5-5", EFFORT, RUNS = 3] = process.argv.slice(2);
const PARALLEL = 6;

const buildDir = dirname(fileURLToPath(import.meta.url));
if (!promptFile || !outDir) throw new Error("Gebruik: node run-foutmarge.mjs <promptbestand> <uitvoermap>");
if (existsSync(outDir) && readdirSync(outDir).length) throw new Error(`${outDir} is niet leeg`);
mkdirSync(outDir, { recursive: true });

// Prompt: het ```text-blok, afgeknipt na "ADVERTENTIE".
const promptMd = readFileSync(join(buildDir, promptFile), "utf8").replace(/\r\n/g, "\n");
const block = promptMd.match(/```text\n([\s\S]*?)\n```/)[1];
const head = block.slice(0, block.indexOf("ADVERTENTIE\n") + "ADVERTENTIE\n".length);

// Advertenties: het eerste ```-blok onder elke "### Txx" in test-set.md.
const testSet = readFileSync(join(buildDir, "test-set.md"), "utf8").replace(/\r\n/g, "\n");
const jobs = [];
for (let i = 1; i <= 10; i++) {
  const id = "T" + String(i).padStart(2, "0");
  const ad = testSet.match(new RegExp(`### ${id}\\n[\\s\\S]*?\`\`\`\\n([\\s\\S]*?)\\n\`\`\``))[1];
  const input = head + ad + "\n";
  writeFileSync(join(outDir, `${id}-input.txt`), input);
  for (let run = 1; run <= RUNS; run++) jobs.push({ id, run, input });
}

function runOne({ id, run, input }) {
  return new Promise((resolve) => {
    const workDir = mkdtempSync(join(tmpdir(), "build-run-"));
    // shell: true om de npm-shim van claude te vinden; "\"\"" geeft een lege --tools.
    const p = spawn("claude", [
      "-p", "--model", MODEL, "--tools", "\"\"", "--safe-mode", "--strict-mcp-config",
      "--no-session-persistence", "--output-format", "json",
      ...(EFFORT ? ["--effort", EFFORT] : []),
    ], { cwd: workDir, shell: true, timeout: 300000 });
    let out = "", err = "";
    p.stdout.on("data", (d) => (out += d));
    p.stderr.on("data", (d) => (err += d));
    p.on("close", () => {
      writeFileSync(join(outDir, `${id}-run${run}.raw.json`), out + (err ? "\nSTDERR:\n" + err : ""));
      let text = "";
      try { text = JSON.parse(out).result; } catch { text = "PARSE-FOUT"; }
      writeFileSync(join(outDir, `${id}-run${run}.txt`), text);
      console.log(id, "run", run, "klaar");
      resolve();
    });
    p.stdin.end(input);
  });
}

const queue = [...jobs];
await Promise.all(Array.from({ length: PARALLEL }, async () => {
  while (queue.length) await runOne(queue.shift());
}));
