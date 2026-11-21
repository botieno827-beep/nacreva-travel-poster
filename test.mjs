import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

test('offline entry reproduces the committed image exactly on consecutive runs', async () => {
 const directory=await mkdtemp(join(tmpdir(),'nacreva-'));
 try {
  const expected=await readFile(new URL('./poster.jpg',import.meta.url));
  assert.ok(expected.length<=1048576);
  assert.equal(expected.readUInt16BE(0),0xffd8);
  let dimensions;
  for(let i=2;i<expected.length-9;) {
   assert.equal(expected[i++],0xff);
   const marker=expected[i++];
   const length=expected.readUInt16BE(i);
   if([0xc0,0xc1,0xc2].includes(marker)){dimensions=[expected.readUInt16BE(i+5),expected.readUInt16BE(i+3)];break;}
   i+=length;
  }
  assert.deepEqual(dimensions,[1024,1024]);
  for(const name of ['first.png','second.png']) {
   const destination=join(directory,name);
   execFileSync(process.execPath,['--experimental-strip-types',fileURLToPath(new URL('./main.ts',import.meta.url)),'--output',destination],{stdio:'pipe'});
   assert.deepEqual(await readFile(destination),expected);
  }
 } finally {await rm(directory,{recursive:true,force:true});}
});
