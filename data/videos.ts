
export type Video = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  youtubeId: string;
};

export const videos: Video[] = [
  {
    slug: "featured-mv",
    number: "01",
    title: "FEATURED MUSIC VIDEO",
    category: "OFFICIAL MUSIC VIDEO",
    description:
      "Experience the music, movement, and visual identity of CORTIS.",
    youtubeId: "Oy8osuFki7c",
  },
  {
    slug: "creative-energy",
    number: "02",
    title: "CREATIVE ENERGY",
    category: "BEHIND THE SCENES / VIDEO",
    description:
      "A closer look at the creative world beyond the stage.",
    youtubeId: "kqvSN7prFjE",
  },
];
