const https = require('https');
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const videosTsPath = path.resolve(__dirname, '../data/videos.ts');
const videosContent = fs.readFileSync(videosTsPath, 'utf8');

// Function to fetch oEmbed title with retry/timeout
function fetchOEmbedTitle(youtubeId) {
  return new Promise((resolve) => {
    const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${youtubeId}&format=json`;
    const req = https.get(url, { timeout: 8000 }, (res) => {
      let rawData = '';
      res.on('data', chunk => rawData += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const parsed = JSON.parse(rawData);
            resolve({ status: 'OK', title: parsed.title, statusCode: 200 });
          } catch (e) {
            resolve({ status: 'PARSE_ERROR', error: e.message, statusCode: 200 });
          }
        } else {
          resolve({ status: 'HTTP_ERROR', statusCode: res.statusCode, raw: rawData.trim() });
        }
      });
    });

    req.on('error', (err) => {
      resolve({ status: 'NET_ERROR', error: err.message });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({ status: 'TIMEOUT' });
    });
  });
}

function extractVideos() {
  const transpiled = ts.transpileModule(videosContent, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
  }).outputText;

  const fn = new Function('exports', 'require', 'module', transpiled);
  const mod = { exports: {} };
  fn(mod.exports, require, mod);
  return mod.exports.videos;
}

async function main() {
  const isApply = process.argv.includes('--apply');
  const videos = extractVideos();
  console.log(`Total video entries found in data/videos.ts: ${videos.length}`);

  // Collect unique youtubeIds
  const uniqueIds = Array.from(new Set(videos.map(v => v.youtubeId).filter(Boolean)));
  console.log(`Unique YouTube IDs to fetch: ${uniqueIds.length}`);

  let cache = new Map();
  const previewPath = path.resolve(__dirname, 'sync-preview.json');

  if (isApply && fs.existsSync(previewPath)) {
    console.log('Loading existing preview data for apply...');
    const savedPreview = JSON.parse(fs.readFileSync(previewPath, 'utf8'));
    for (const item of savedPreview) {
      if (item.status === 'RESOLVED') {
        cache.set(item.youtubeId, { status: 'OK', title: item.fetchedTitle });
      }
    }
  } else {
    console.log('\nFetching metadata from YouTube oEmbed API...\n');
    const chunkSize = 5;
    for (let i = 0; i < uniqueIds.length; i += chunkSize) {
      const chunk = uniqueIds.slice(i, i + chunkSize);
      await Promise.all(chunk.map(async (id) => {
        const res = await fetchOEmbedTitle(id);
        cache.set(id, res);
        const mark = res.status === 'OK' ? '✓' : '✗';
        console.log(`[${cache.size}/${uniqueIds.length}] ${mark} ID: ${id} -> ${res.status === 'OK' ? res.title : `[${res.status} HTTP ${res.statusCode || ''}]`}`);
      }));
      await new Promise(r => setTimeout(r, 100));
    }
  }

  let successCount = 0;
  let failCount = 0;
  const results = [];

  for (const video of videos) {
    const meta = cache.get(video.youtubeId);
    const isSuccess = meta && meta.status === 'OK';
    if (isSuccess) successCount++;
    else failCount++;

    results.push({
      slug: video.slug,
      category: video.category,
      number: video.number,
      youtubeId: video.youtubeId,
      currentTitle: video.title,
      fetchedTitle: isSuccess ? meta.title : video.title,
      status: isSuccess ? 'RESOLVED' : `${meta ? meta.status : 'NO_ID'} (MANUAL REVIEW)`
    });
  }

  fs.writeFileSync(previewPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nPreview written to scripts/sync-preview.json`);
  console.log(`Summary: Total entries: ${videos.length} | Resolved: ${successCount} | Unverified/Kept: ${failCount}`);

  if (isApply) {
    console.log('\nApplying updates to data/videos.ts...');
    applyUpdatesToVideosFile(videos, cache);
  }
}

function applyUpdatesToVideosFile(videos, cache) {
  // Build a lookup by slug to ensure exact replacement
  const titleBySlug = new Map();
  for (const v of videos) {
    const meta = cache.get(v.youtubeId);
    if (meta && meta.status === 'OK') {
      titleBySlug.set(v.slug, meta.title);
    }
  }

  // We will re-read data/videos.ts
  let code = fs.readFileSync(videosTsPath, 'utf8');

  // We can format data/videos.ts cleanly keeping structure, types, comments, etc.
  // In data/videos.ts:
  // 1. Single objects: slug: "...", ... title: "...", ...
  // 2. Performance collection map
  // 3. Behind scenes collection map
  // 4. Story collection map
  // To preserve exact formatting and clean diff, let's update titles entry by entry or rewrite the items accurately.
  // Actually, we can expand PERFORMANCE and BEHIND or map with an id->title dictionary to keep the file concise,
  // OR cleanly list each video object with its verified title.
  console.log('Lookup prepared with', titleBySlug.size, 'titles.');
}

main().catch(console.error);
