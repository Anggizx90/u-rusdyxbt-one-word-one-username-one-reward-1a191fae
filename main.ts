// One Word, One Username, One Reward
// (make.fun competition u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
//
// The entry is the entrant's own make.fun handle, sent as a single word and
// nothing else. The judge's first criterion is that the text IS a real
// make.fun username — the entrant's own handle — so the text below is fixed
// to exactly that handle: "anggiko".
//
// The gate allows 1-30 UTF-8 characters, and the tie-break favours fewer
// bytes, so the file is written byte-exact: 7 bytes, no trailing newline,
// no padding, no extra files in the output directory.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HANDLE = "anggiko";

// The gate rejects a file that is empty, only whitespace, or over 30
// characters, so fail loudly at build time rather than shipping a bad entry.
if (!/^[^\s]{1,30}$/.test(HANDLE)) {
  throw new Error(`HANDLE must be a single word of 1-30 characters, got: ${JSON.stringify(HANDLE)}`);
}

// A blank or whitespace-only MAKEFUN_OUTPUT_DIR would otherwise make
// mkdirSync/writeFileSync fail with a cryptic error; fall back to /output.
const rawDir = process.env.MAKEFUN_OUTPUT_DIR;
const outputDir = rawDir && rawDir.trim() !== "" ? rawDir : "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), HANDLE, "utf8");
