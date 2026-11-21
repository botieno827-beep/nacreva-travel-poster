import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

// The artwork is authored in artwork.mjs. The checked-in print is pre-rendered
// so this entry has no browser, font, package or network dependency.
const outputFlag = process.argv.indexOf('--output');
const output = outputFlag >= 0 ? process.argv[outputFlag + 1] : '/output/entry.png';
if (!output) throw new Error('--output needs a filename');
const artwork = await readFile(new URL('./poster.jpg', import.meta.url));
if (artwork.length > 1_048_576) throw new Error('Artwork exceeds the gate');
if (artwork[0] !== 0xff || artwork[1] !== 0xd8) throw new Error('Invalid JPEG');
await mkdir(dirname(output), { recursive: true });
await writeFile(output, artwork);
console.log(JSON.stringify({ output, bytes: artwork.length, destination: 'NACREVA' }));
