
export type VideoCategory =
  | "MV"
  | "PERFORMANCE"
  | "DANCE"
  | "BEHIND";

export type Video = {
  slug: string;
  number: string;
  title: string;
  category: VideoCategory;
  description: string;
  thumbnail: string;
  youtubeId?: string;
};

const youtubeThumbnail = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const videos: Video[] = [
  // OFFICIAL MV COLLECTION

  {
    slug: "acai",
    number: "01",
    title: "ACAI",
    category: "MV",
    description: "CORTIS music video.",
    youtubeId: "nCElUD0jvgo",
    thumbnail: youtubeThumbnail("nCElUD0jvgo"),
  },
  {
    slug: "redred",
    number: "02",
    title: "REDRED",
    category: "MV",
    description: "CORTIS official music video.",
    youtubeId: "U6BDbXIah-Y",
    thumbnail: youtubeThumbnail("U6BDbXIah-Y"),
  },
  {
    slug: "blue-lips",
    number: "03",
    title: "Blue Lips",
    category: "MV",
    description: "CORTIS official music video.",
    youtubeId: "hOIY3OhvD94",
    thumbnail: youtubeThumbnail("hOIY3OhvD94"),
  },
  {
    slug: "what-you-want-original",
    number: "04",
    title: "What You Want — Original Ver.",
    category: "MV",
    description: "Original version music video.",
    youtubeId: "of-FAob3X9w",
    thumbnail: youtubeThumbnail("of-FAob3X9w"),
  },
  {
    slug: "tnt",
    number: "05",
    title: "TNT",
    category: "MV",
    description: "CORTIS music video.",
    youtubeId: "kRpaqR5sbf0",
    thumbnail: youtubeThumbnail("kRpaqR5sbf0"),
  },
  {
    slug: "mv-06",
    number: "06",
    title: "MV ARCHIVE 06",
    category: "MV",
    description: "Video title to be verified.",
    youtubeId: "-fTvZfQoF-w",
    thumbnail: youtubeThumbnail("-fTvZfQoF-w"),
  },
  {
    slug: "what-you-want",
    number: "07",
    title: "What You Want — Official MV",
    category: "MV",
    description: "CORTIS official music video.",
    youtubeId: "e2OpbOv_JiQ",
    thumbnail: youtubeThumbnail("e2OpbOv_JiQ"),
  },
  {
    slug: "mv-08",
    number: "08",
    title: "MV ARCHIVE 08",
    category: "MV",
    description: "Video title to be verified.",
    youtubeId: "7112WTKl45Y",
    thumbnail: youtubeThumbnail("7112WTKl45Y"),
  },
  {
    slug: "joyride",
    number: "09",
    title: "JoyRide",
    category: "MV",
    description: "CORTIS music video.",
    youtubeId: "8QZeXvOjgGE",
    thumbnail: youtubeThumbnail("8QZeXvOjgGE"),
  },
  {
    slug: "mv-10",
    number: "10",
    title: "MV ARCHIVE 10",
    category: "MV",
    description: "Video title to be verified.",
    youtubeId: "a1vHjBy85TU",
    thumbnail: youtubeThumbnail("a1vHjBy85TU"),
  },
  {
    slug: "mv-11",
    number: "11",
    title: "MV ARCHIVE 11",
    category: "MV",
    description: "Video title to be verified.",
    youtubeId: "rdB7ip3zQqg",
    thumbnail: youtubeThumbnail("rdB7ip3zQqg"),
  },
  {
    slug: "mv-12",
    number: "12",
    title: "MV ARCHIVE 12",
    category: "MV",
    description: "Video title to be verified.",
    youtubeId: "6MYB61hUaFg",
    thumbnail: youtubeThumbnail("6MYB61hUaFg"),
  },
  {
    slug: "featured-mv",
    number: "13",
    title: "FEATURED MUSIC VIDEO",
    category: "MV",
    description: "CORTIS featured visual archive.",
    youtubeId: "Oy8osuFki7c",
    thumbnail: youtubeThumbnail("Oy8osuFki7c"),
  },
  {
    slug: "tnt-performance-film",
    number: "14",
    title: "TNT — Conceptual Performance Film",
    category: "MV",
    description: "CORTIS conceptual performance film.",
    youtubeId: "XgmdslsEJ1M",
    thumbnail: youtubeThumbnail("XgmdslsEJ1M"),
  },

  // PERFORMANCE COLLECTION
  {
    slug: "performance",
    number: "15",
    title: "PERFORMANCE ARCHIVE",
    category: "PERFORMANCE",
    description: "Performance video coming soon.",
    thumbnail: "/image/watch/performance.jpg",
  },

  // BEHIND THE SCENES
  {
    slug: "creative-energy",
    number: "16",
    title: "CREATIVE ENERGY",
    category: "BEHIND",
    description: "Behind-the-scenes visual content.",
    youtubeId: "kqvSN7prFjE",
    thumbnail: youtubeThumbnail("kqvSN7prFjE"),
  },
];
