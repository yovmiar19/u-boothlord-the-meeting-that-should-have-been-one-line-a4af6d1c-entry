import { mkdirSync, writeFileSync } from "node:fs";

// The Meeting That Should Have Been One Line
// One sentence that could have replaced an entire pointless meeting.
const LINE =
  "Nine people, one slide, zero decisions, and somehow I'm the one taking notes.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Refuse to write anything outside the gate.
const MIN_CHARS = 1;
const MAX_CHARS = 200;
if (LINE.length < MIN_CHARS || LINE.length > MAX_CHARS || !LINE.trim()) {
  throw new Error(
    `entry length ${LINE.length} is outside the ${MIN_CHARS}-${MAX_CHARS} char gate`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(
  `validated ${LINE.length} chars (gate ${MIN_CHARS}-${MAX_CHARS}); wrote /output/entry.txt`,
);
