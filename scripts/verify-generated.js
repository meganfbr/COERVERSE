const fs = require('fs');
const ts = require('typescript');

const codeOriginal = fs.readFileSync('data/videos.ts', 'utf8');
const codeNew = fs.readFileSync('scripts/generated-videos.ts', 'utf8');

function evalVideos(code) {
  const transpiled = ts.transpileModule(code, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
  }).outputText;
  const fn = new Function('exports', 'require', 'module', transpiled);
  const mod = { exports: {} };
  fn(mod.exports, require, mod);
  return mod.exports.videos;
}

const origVideos = evalVideos(codeOriginal);
const newVideos = evalVideos(codeNew);

console.log('Original count:', origVideos.length, 'New count:', newVideos.length);
if (origVideos.length !== newVideos.length) throw new Error('Count mismatch!');

for (let i = 0; i < origVideos.length; i++) {
  const o = origVideos[i];
  const n = newVideos[i];
  if (o.slug !== n.slug) throw new Error(`Slug mismatch at ${i}: ${o.slug} vs ${n.slug}`);
  if (o.number !== n.number) throw new Error(`Number mismatch at ${i}: ${o.number} vs ${n.number}`);
  if (o.category !== n.category) throw new Error(`Category mismatch at ${i}: ${o.category} vs ${n.category}`);
  if (o.youtubeId !== n.youtubeId) throw new Error(`YouTube ID mismatch at ${i}: ${o.youtubeId} vs ${n.youtubeId}`);
  if (o.description !== n.description) throw new Error(`Description mismatch at ${i}: ${o.description} vs ${n.description}`);
  if (o.thumbnail !== n.thumbnail) throw new Error(`Thumbnail mismatch at ${i}: ${o.thumbnail} vs ${n.thumbnail}`);
}
console.log('All 88 entries perfectly matched across all properties except updated titles!');
