import { mkdirSync, writeFileSync } from "node:fs";

// The Meeting That Should Have Been One Line
// The entire meeting, condensed into its own agenda.
const LINE =
  "Agenda: 1) Sarah reads the email you already got, 2) we agree to circle back, 3) nobody does.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Refuse to write anything outside the gate.
const MIN_CHARS = 1;
const MAX_CHARS = 200;
if (LINE.length < MIN_CHARS || LINE.length > MAX_CHARS || !LINE.trim()) {
  throw new Error(
    `entry length ${LINE.length} is outside the ${MIN_CHARS}-${MAX_CHARS} char gate`,
  );
}

// Output contract: /output/entry.txt must contain exactly LINE — no
// trailing newline, no extra whitespace, no other text. The entry is
// judged on this one line alone, so the write below is the whole program.
const OUTPUT_PATH = "/output/entry.txt";

// Guard: the line must not contain a newline or carriage return, which
// would break the single-line entry contract.
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry line must be a single line without line breaks");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
console.log(
  `validated ${LINE.length} chars (gate ${MIN_CHARS}-${MAX_CHARS}); wrote /output/entry.txt`,
);
