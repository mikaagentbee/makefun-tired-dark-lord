import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Tired Dark Lord: a 100-word villain monologue.
// The villain is a three-hundred-year-old dark lord receiving the hero
// in his hall — and quietly putting the final battle off until Thursday.
// The tiredness lives in the pauses, the lost thread and the deflections
// (boots, postcards, paperwork), never in a flat statement of it.
const MONOLOGUE = `So. You made it. Three hundred years I have waited in this hall, and you arrive... with a borrowed sword and your father's crest. Yes, I remember him. He stood where you stand, said the same words, wore better boots.

What was I saying? The oath. Yes, the oath. The ravens still bring their reports. The villages pay the grain tax. My dragon retired to the east and sends postcards.

Everything holds. Everything works. So forgive me. I have won this war once, and winning it again tonight, with you, can wait until Thursday. Leave the sword by the door.`;

// The grader runs this in a sandbox where /output exists; locally we
// fall back to ./output so the same file can be tested here.
function outputPath(): string {
  try {
    mkdirSync("/output", { recursive: true });
    return "/output/entry.txt";
  } catch {
    const dir = join(process.cwd(), "output");
    mkdirSync(dir, { recursive: true });
    return join(dir, "entry.txt");
  }
}

const path = outputPath();
writeFileSync(path, MONOLOGUE, "utf8");
const words = MONOLOGUE.trim().split(/\s+/).length;
console.log(`Wrote ${MONOLOGUE.length} chars, ${words} words to ${path}`);
