const fs = require('fs');
const path = require('path');
const preview = require('./sync-preview.json');

const mvDescriptions = {
  'acai': 'CORTIS music video.',
  'redred': 'CORTIS official music video.',
  'blue-lips': 'CORTIS official music video.',
  'what-you-want-original': 'Original version music video.',
  'tnt': 'CORTIS music video.',
  'mv-06': 'CORTIS music video archive.',
  'what-you-want': 'CORTIS official music video.',
  'mv-08': 'CORTIS music video archive.',
  'joyride': 'CORTIS music video.',
  'mv-10': 'CORTIS music video archive.',
  'mv-11': 'CORTIS music video archive.',
  'mv-12': 'CORTIS music video archive.',
  'featured-mv': 'CORTIS featured visual archive.',
  'tnt-performance-film': 'CORTIS conceptual performance film.',
};

let output = `
export type VideoCategory =
  | "MV"
  | "PERFORMANCE"
  | "DANCE"
  | "BEHIND"
  | "STORY";

export type Video = {
  slug: string;
  number: string;
  title: string;
  category: VideoCategory;
  description: string;
  thumbnail: string;
  youtubeId?: string;
};

// Mengambil thumbnail otomatis dari YouTube
const youtubeThumbnail = (id: string) =>
  \`https://i.ytimg.com/vi/\${id}/hqdefault.jpg\`;

export const videos: Video[] = [
  // ======================================
  // OFFICIAL MV COLLECTION
  // ======================================

`;

const mv = preview.filter(x => x.category === 'MV');
for (const item of mv) {
  output += `  {
    slug: ${JSON.stringify(item.slug)},
    number: ${JSON.stringify(item.number)},
    title: ${JSON.stringify(item.fetchedTitle)},
    category: "MV",
    description: ${JSON.stringify(mvDescriptions[item.slug] || 'CORTIS music video.')},
    youtubeId: ${JSON.stringify(item.youtubeId)},
    thumbnail: youtubeThumbnail(${JSON.stringify(item.youtubeId)}),
  },
`;
}

output += `
  // ======================================
  // DANCE COLLECTION
  // ======================================

`;

const dance = preview.filter(x => x.category === 'DANCE');
for (const item of dance) {
  output += `  {
    slug: ${JSON.stringify(item.slug)},
    number: ${JSON.stringify(item.number)},
    title: ${JSON.stringify(item.fetchedTitle)},
    category: "DANCE",
    description: "CORTIS dance video collection.",
    youtubeId: ${JSON.stringify(item.youtubeId)},
    thumbnail: youtubeThumbnail(${JSON.stringify(item.youtubeId)}),
  },
`;
}

output += `
  // ======================================
  // PERFORMANCE COLLECTION
  // ======================================

  ...[
`;

const perf = preview.filter(x => x.category === 'PERFORMANCE');
for (const item of perf) {
  output += `    {
      id: ${JSON.stringify(item.youtubeId)},
      title: ${JSON.stringify(item.fetchedTitle)},
    },
`;
}

output += `  ].map((item, index) => {
    const number = String(index + 1).padStart(2, "0");

    return {
      slug: \`performance-\${number}\`,
      number,
      title: item.title,
      category: "PERFORMANCE" as const,
      description: "CORTIS performance video collection.",
      youtubeId: item.id,
      thumbnail: youtubeThumbnail(item.id),
    };
  }),

  // ======================================
  // BEHIND THE SCENES COLLECTION
  // ======================================

  ...[
`;

const behind = preview.filter(x => x.category === 'BEHIND');
for (const item of behind) {
  output += `    {
      id: ${JSON.stringify(item.youtubeId)},
      title: ${JSON.stringify(item.fetchedTitle)},
    },
`;
}

output += `  ].map((item, index) => {
    const number = String(index + 1).padStart(2, "0");

    return {
      slug: \`behind-\${number}\`,
      number,
      title: item.title,
      category: "BEHIND" as const,
      description: "CORTIS behind-the-scenes video collection.",
      youtubeId: item.id,
      thumbnail: youtubeThumbnail(item.id),
    };
  }),

  // ======================================
  // THE STORY COLLECTION
  // ======================================

  ...[
`;

const story = preview.filter(x => x.category === 'STORY');
for (const item of story) {
  output += `    {
      id: ${JSON.stringify(item.youtubeId)},
      title: ${JSON.stringify(item.fetchedTitle)},
    },
`;
}

output += `  ].map((item, index) => {
    const number = String(index + 1).padStart(2, "0");

    return {
      slug: \`story-\${number}\`,
      number,
      title: item.title,
      category: "STORY" as const,
      description: "CORTIS debut journey and visual archive.",
      youtubeId: item.id,
      thumbnail: youtubeThumbnail(item.id),
    };
  }),

];
`;

fs.writeFileSync(path.resolve(__dirname, 'generated-videos.ts'), output, 'utf8');
console.log('Successfully generated scripts/generated-videos.ts');
