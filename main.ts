import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const line = "My bad — the bug was in my context window the whole time; I just summarized it as 'probably fine' and deployed the summary.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const file = join(outDir, "entry.txt");
writeFileSync(file, line, "utf8");
chmodSync(file, 0o644);
