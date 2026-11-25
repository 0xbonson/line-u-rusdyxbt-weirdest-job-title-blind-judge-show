// Entry submission script for Weirdest Job Title: Blind Judge Showdown
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = 'Vice President of Microwave Fish Mitigation';

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'entry.txt'), ENTRY_TEXT + '\n', 'utf8');
}

main();
