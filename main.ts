// One-Sentence Absurd Invention Pitch — entry program.
//
// Writes exactly one sentence pitching a ridiculous invention that fixes
// a tiny everyday annoyance, to /output/entry.txt.
//
// The pitch: tangled earphone cables. The fix: a tiny robot living in your
// pocket that karate-chops the cable into a neat coil whenever it tries to
// knot itself. The laugh comes from the invention itself, not from a joke
// bolted on at the end.
//
// Deterministic: no randomness, no clock, no network, no environment input.
// Every run writes the same bytes. The output path is fixed, so the entry
// never reads anything outside its own repository.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const PITCH =
  "The Pocket Sensei is a tiny robot that lives in your pocket and karate-chops your earphone cable into a neat coil every time it tries to tie itself into knots.";

// One sentence, 1-220 characters, not only whitespace.
if (PITCH.length < 1 || PITCH.length > 220) {
  throw new Error(`pitch must be 1-220 characters, got ${PITCH.length}`);
}
if (!PITCH.trim()) {
  throw new Error("pitch must not be only whitespace");
}
if ((PITCH.match(/\./g) ?? []).length !== 1 || !PITCH.endsWith(".")) {
  throw new Error("pitch must be exactly one sentence");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, PITCH, "utf8");
console.log(`wrote ${PITCH.length} characters to ${outPath}`);
