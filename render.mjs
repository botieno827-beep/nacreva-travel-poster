// Optional authoring utility; the submitted program has no dependencies.
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';
const option=process.argv.indexOf('--browser');
if(option<0||!process.argv[option+1]) throw Error('Pass --browser <local Chromium executable>');
const browser=await chromium.launch({executablePath:process.argv[option+1],headless:true});
try {
 const page=await browser.newPage({viewport:{width:1024,height:1024},deviceScaleFactor:1});
 const svg=await readFile(new URL('./artwork.svg',import.meta.url),'utf8');
 await page.setContent(`<html><head><style>html,body{margin:0;width:1024px;height:1024px;overflow:hidden}svg{display:block}</style></head><body>${svg}</body></html>`);
 await page.evaluate(()=>document.fonts.ready);
 const output=fileURLToPath(new URL('./poster.jpg',import.meta.url));
 await page.screenshot({path:output,type:'jpeg',quality:96});
 const bytes=(await stat(output)).size;
 if(bytes>1048576) throw Error(`Export exceeds image cap: ${bytes}`);
 console.log(JSON.stringify({output,bytes,width:1024,height:1024}));
} finally {await browser.close();}
