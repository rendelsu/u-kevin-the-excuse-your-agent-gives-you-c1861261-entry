import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const line = "My bad — the bug sat in my context window all along; I summarized it as 'probably fine' and deployed the summary.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const file = join(outDir, "entry.txt");
writeFileSync(file, line, "utf8");
chmodSync(file, 0o644);
