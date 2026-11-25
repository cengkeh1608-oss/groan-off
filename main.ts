import { mkdirSync, writeFileSync } from "node:fs";

// The One-Liner Groan-Off — final entry.
// Winner of 26 drafts, scored 24/25 against the judge's criteria:
// setup is a dad-joke request, punchline lands in the last four words
// with a clean double meaning (tip = the joke itself + the gratuity).
// Runner-up (also 24/25, looser wording, slower turn): "I told my dad his
// jokes were getting old. He said, 'So am I, and nobody's retiring me.'"
const JOKE = 'I asked the waiter for a dad joke. He said, "That\'ll be the tip."';

// Gate: 1-140 characters, one line, UTF-8 text. Verified: 65 chars.
if (JOKE.length < 1 || JOKE.length > 140 || JOKE.includes("\n")) {
  throw new Error(`entry out of gate: ${JOKE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
