
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
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const videos: Video[] = [
  // ======================================
  // OFFICIAL MV COLLECTION
  // ======================================

  {
    slug: "acai",
    number: "01",
    title: "CORTIS (코르티스) 'ACAI' Official MV",
    category: "MV",
    description: "CORTIS music video.",
    youtubeId: "nCElUD0jvgo",
    thumbnail: youtubeThumbnail("nCElUD0jvgo"),
  },
  {
    slug: "redred",
    number: "02",
    title: "CORTIS (코르티스) 'REDRED' Official MV",
    category: "MV",
    description: "CORTIS official music video.",
    youtubeId: "U6BDbXIah-Y",
    thumbnail: youtubeThumbnail("U6BDbXIah-Y"),
  },
  {
    slug: "blue-lips",
    number: "03",
    title: "CORTIS (코르티스) 'Blue Lips' Official MV",
    category: "MV",
    description: "CORTIS official music video.",
    youtubeId: "hOIY3OhvD94",
    thumbnail: youtubeThumbnail("hOIY3OhvD94"),
  },
  {
    slug: "what-you-want-original",
    number: "04",
    title: "CORTIS (코르티스) 'What You Want' MV (Original Ver.)",
    category: "MV",
    description: "Original version music video.",
    youtubeId: "of-FAob3X9w",
    thumbnail: youtubeThumbnail("of-FAob3X9w"),
  },
  {
    slug: "tnt",
    number: "05",
    title: "CORTIS (코르티스) 'TNT' Official MV",
    category: "MV",
    description: "CORTIS music video.",
    youtubeId: "kRpaqR5sbf0",
    thumbnail: youtubeThumbnail("kRpaqR5sbf0"),
  },
  {
    slug: "mv-06",
    number: "06",
    title: "CORTIS (코르티스) 'GO!' Conceptual Performance Film",
    category: "MV",
    description: "CORTIS music video archive.",
    youtubeId: "-fTvZfQoF-w",
    thumbnail: youtubeThumbnail("-fTvZfQoF-w"),
  },
  {
    slug: "what-you-want",
    number: "07",
    title: "CORTIS (코르티스) 'What You Want' Official MV",
    category: "MV",
    description: "CORTIS official music video.",
    youtubeId: "e2OpbOv_JiQ",
    thumbnail: youtubeThumbnail("e2OpbOv_JiQ"),
  },
  {
    slug: "mv-08",
    number: "08",
    title: "CORTIS (코르티스) 'REDRED' MV (Original Ver.)",
    category: "MV",
    description: "CORTIS music video archive.",
    youtubeId: "7112WTKl45Y",
    thumbnail: youtubeThumbnail("7112WTKl45Y"),
  },
  {
    slug: "joyride",
    number: "09",
    title: "CORTIS (코르티스) 'JoyRide' Official MV",
    category: "MV",
    description: "CORTIS music video.",
    youtubeId: "8QZeXvOjgGE",
    thumbnail: youtubeThumbnail("8QZeXvOjgGE"),
  },
  {
    slug: "mv-10",
    number: "10",
    title: "CORTIS (코르티스) 'REDRED' Conceptual Performance Film",
    category: "MV",
    description: "CORTIS music video archive.",
    youtubeId: "a1vHjBy85TU",
    thumbnail: youtubeThumbnail("a1vHjBy85TU"),
  },
  {
    slug: "mv-11",
    number: "11",
    title: "CORTIS (코르티스) 'FaSHioN' MV (Original Ver.)",
    category: "MV",
    description: "CORTIS music video archive.",
    youtubeId: "rdB7ip3zQqg",
    thumbnail: youtubeThumbnail("rdB7ip3zQqg"),
  },
  {
    slug: "mv-12",
    number: "12",
    title: "CORTIS (코르티스) 'What You Want' Conceptual Performance Film",
    category: "MV",
    description: "CORTIS music video archive.",
    youtubeId: "6MYB61hUaFg",
    thumbnail: youtubeThumbnail("6MYB61hUaFg"),
  },
  {
    slug: "featured-mv",
    number: "13",
    title: "CORTIS (코르티스) 'GO!' Official MV",
    category: "MV",
    description: "CORTIS featured visual archive.",
    youtubeId: "Oy8osuFki7c",
    thumbnail: youtubeThumbnail("Oy8osuFki7c"),
  },
  {
    slug: "tnt-performance-film",
    number: "14",
    title: "CORTIS (코르티스) 'TNT' Conceptual Performance Film",
    category: "MV",
    description: "CORTIS conceptual performance film.",
    youtubeId: "XgmdslsEJ1M",
    thumbnail: youtubeThumbnail("XgmdslsEJ1M"),
  },

  // ======================================
  // DANCE COLLECTION
  // ======================================

  {
    slug: "dance-01",
    number: "01",
    title: "CORTIS (코르티스) 'REDRED' Dance Practice (Fix ver.)",
    category: "DANCE",
    description: "CORTIS dance video collection.",
    youtubeId: "kuVNutQeBBA",
    thumbnail: youtubeThumbnail("kuVNutQeBBA"),
  },
  {
    slug: "dance-02",
    number: "02",
    title: "CORTIS (코르티스) ‘ACAI’ Dance Practice (Fix ver.)",
    category: "DANCE",
    description: "CORTIS dance video collection.",
    youtubeId: "ysg6GVlzz9Y",
    thumbnail: youtubeThumbnail("ysg6GVlzz9Y"),
  },
  {
    slug: "dance-03",
    number: "03",
    title: "CORTIS (코르티스) ‘TNT’ Dance Practice (Fix ver.)",
    category: "DANCE",
    description: "CORTIS dance video collection.",
    youtubeId: "6vewvgkj4us",
    thumbnail: youtubeThumbnail("6vewvgkj4us"),
  },
  {
    slug: "dance-04",
    number: "04",
    title: "CORTIS(코르티스) 'REDRED' (4K) | STUDIO CHOOM ORIGINAL",
    category: "DANCE",
    description: "CORTIS dance video collection.",
    youtubeId: "qSYNCpb0Bzw",
    thumbnail: youtubeThumbnail("qSYNCpb0Bzw"),
  },
  {
    slug: "dance-05",
    number: "05",
    title: "CORTIS (코르티스) 'Deja Vu' Dance Practice | 원곡 : TOMORROW X TOGETHER (투모로우바이투게더)",
    category: "DANCE",
    description: "CORTIS dance video collection.",
    youtubeId: "V7LxVsIo8vg",
    thumbnail: youtubeThumbnail("V7LxVsIo8vg"),
  },
  {
    slug: "dance-06",
    number: "06",
    title: "CORTIS (코르티스) ‘FaSHioN' Dance Practice (Fix ver.)",
    category: "DANCE",
    description: "CORTIS dance video collection.",
    youtubeId: "u5IhtyOsEzE",
    thumbnail: youtubeThumbnail("u5IhtyOsEzE"),
  },
  {
    slug: "dance-07",
    number: "07",
    title: "CORTIS (코르티스) 'What You Want' Dance Practice (Fix ver.)",
    category: "DANCE",
    description: "CORTIS dance video collection.",
    youtubeId: "daSFSbDyi9A",
    thumbnail: youtubeThumbnail("daSFSbDyi9A"),
  },
  {
    slug: "dance-08",
    number: "08",
    title: "(Full Focused) CORTIS(코르티스) 'REDRED' (4K) | STUDIO CHOOM ORIGINAL",
    category: "DANCE",
    description: "CORTIS dance video collection.",
    youtubeId: "8trNT1WjIg0",
    thumbnail: youtubeThumbnail("8trNT1WjIg0"),
  },
  {
    slug: "dance-09",
    number: "09",
    title: "CORTIS (코르티스) ‘GO!’ Dance Practice (Fix ver.)",
    category: "DANCE",
    description: "CORTIS dance video collection.",
    youtubeId: "gSm-eTRl9JE",
    thumbnail: youtubeThumbnail("gSm-eTRl9JE"),
  },
  {
    slug: "dance-10",
    number: "10",
    title: "CORTIS(코르티스) 'What You Want' (4K) | STUDIO CHOOM ORIGINAL",
    category: "DANCE",
    description: "CORTIS dance video collection.",
    youtubeId: "n5IJYhE78t4",
    thumbnail: youtubeThumbnail("n5IJYhE78t4"),
  },
  {
    slug: "dance-11",
    number: "11",
    title: "CORTIS (코르티스) 'MIC Drop' Live Practice | 원곡 : BTS (방탄소년단)",
    category: "DANCE",
    description: "CORTIS dance video collection.",
    youtubeId: "T-76o4XpGh8",
    thumbnail: youtubeThumbnail("T-76o4XpGh8"),
  },
  {
    slug: "dance-12",
    number: "12",
    title: "CORTIS (코르티스) ‘FaSHioN' Dance Practice (Moving ver.)",
    category: "DANCE",
    description: "CORTIS dance video collection.",
    youtubeId: "-6sM0e50_oI",
    thumbnail: youtubeThumbnail("-6sM0e50_oI"),
  },
  {
    slug: "dance-13",
    number: "13",
    title: "CORTIS (코르티스) ‘GO!’ Dance Practice (Moving ver.)",
    category: "DANCE",
    description: "CORTIS dance video collection.",
    youtubeId: "xfDwI_csntE",
    thumbnail: youtubeThumbnail("xfDwI_csntE"),
  },
  {
    slug: "dance-14",
    number: "14",
    title: "CORTIS (코르티스) ‘What You Want’ Dance Practice (Moving ver.)",
    category: "DANCE",
    description: "CORTIS dance video collection.",
    youtubeId: "LaFEhyMF-ss",
    thumbnail: youtubeThumbnail("LaFEhyMF-ss"),
  },

  // ======================================
  // PERFORMANCE COLLECTION
  // ======================================

  ...[
    {
      id: "kI-ntAp2vPI",
      title: "CORTIS (코르티스) 'MONEYMONEYMONEY' Live Performance @ PYPD BIRTHDAY PARTY",
    },
    {
      id: "592Q6lyEvag",
      title: "MIC Drop (Steve Aoki Remix) (원곡: BTS) - CORTIS [2025 뮤직뱅크 글로벌페스티벌 IN JAPAN] | KBS 251230 방송",
    },
    {
      id: "501FXu_Cdd8",
      title: "CORTIS (코르티스) 'PACK IT UP' Live Performance @ PYPD BIRTHDAY PARTY",
    },
    {
      id: "_jsA3F6jLTY",
      title: "[HOT DEBUT🔥] CORTIS コルティス 코르티스 - GO! [Music Bank] | KBS WORLD TV 250822",
    },
    {
      id: "_k0mhOl5zOc",
      title: "CORTIS (코르티스) Full Live Performance @ ROCK IN JAPAN FESTIVAL 2026",
    },
    {
      id: "MoZbwLzg47w",
      title: "CORTIS 코르티스 'TNT'｜On the Spot｜온더스팟",
    },
    {
      id: "MrY3EwjBU5U",
      title: "'최초 공개' CORTIS - ACAI #엠카운트다운 EP.929 | Mnet 260521 방송",
    },
    {
      id: "HpXgaOucHfk",
      title: "[MOVE TO PERFORMANCE] CORTIS(코르티스) - FaSHioN (4K)",
    },
    {
      id: "iyKA7tSb9KI",
      title: "YOUNGCREATORCREW - CORTIS [뮤직뱅크/Music Bank] | KBS 260605 방송",
    },
    {
      id: "ieEwm_o18Ls",
      title: "데뷔 2일차에 LIVE로 떼창 말아준 GO!AT한 무대🎤✨｜코르티스(CORTIS) - GO!｜공간음향🎧라이브｜SoundBOMB360˚[SUB]",
    },
    {
      id: "7M-Q8D-19cI",
      title: "GO! - CORTIS | SBS 250921 방송",
    },
    {
      id: "ELPeHSrMd8M",
      title: "[2025 MBC 가요대제전] CORTIS (코르티스) - Deja Vu + FaSHioN, MBC 251231 방송",
    },
    {
      id: "7ComIC5ZEb0",
      title: "'SPECIAL STAGE' CORTIS - JoyRide #엠카운트다운 EP.915 | Mnet 260205 방송",
    },
    {
      id: "M_8rM9wtZFw",
      title: "[원테이크] 코르티스 (CORTIS ONETAKE) 'FaSHioN' Bonus Ver. @뮤직뱅크글로벌페스티벌 251230",
    },
    {
      id: "OPPowVJ7B6c",
      title: "[#AAA2025] CORTIS(코르티스) -‘GO!+What You Want’ Broadcast Stage | Official Video",
    },
    {
      id: "MTRe479iM8E",
      title: "[#2025MAMA] WINNERS’ ALL-TIME STAGE 🏆 CORTIS",
    },
    {
      id: "kPYmxdHgw4Y",
      title: "CORTIS (코르티스) - TNT | Show! MusicCore | MBC260509방송",
    },
    {
      id: "QJAe0tYxTeY",
      title: "CORTIS - MONEYMONEYMONEY | M COUNTDOWN : PLAY FESTA #엠카운트다운 EP.951 | Mnet 261028 방송",
    },
    {
      id: "x3O94qq9kOU",
      title: "[Store Link Live] CORTIS (코르티스) - GO! | 스토어링크 라이브 | 스.링.라 | Live Performance | GOGOSING",
    },
    {
      id: "PC-lfjlJUBA",
      title: "CORTIS - REDRED | M COUNTDOWN : PLAY FESTA #엠카운트다운 EP.951 | Mnet 261028 방송",
    },
    {
      id: "esx3YIFwuaA",
      title: "CORTIS (코르티스) - ACAI | Show! MusicCore | MBC260530방송",
    },
    {
      id: "koED8KSXfeo",
      title: "[#2025MAMA] CORTIS - GO! + FaSHioN | Mnet 251129 방송",
    },
    {
      id: "rREZviPAdM8",
      title: "'최초 공개' CORTIS - REDRED #엠카운트다운 EP.925 | Mnet 260423 방송",
    },
  ].map((item, index) => {
    const number = String(index + 1).padStart(2, "0");

    return {
      slug: `performance-${number}`,
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
    {
      id: "i5_O0buoPxI",
      title: "time to debut",
    },
    {
      id: "efGuRedKxmM",
      title: "1주년 티꾸",
    },
    {
      id: "JDRYfo1nABY",
      title: "빨간티 빨간티 fit check",
    },
    {
      id: "7m09XumTnlc",
      title: "Teezo: Touchdown in Seoul",
    },
    {
      id: "Xq46_fQcVzg",
      title: "Chuseok Cooking",
    },
    {
      id: "K-okEnJEge0",
      title: "thumb war",
    },
    {
      id: "iLYesHLYXo4",
      title: "it's time to ACAI",
    },
    {
      id: "ISkAWt8_aqI",
      title: "relay cam LA",
    },
    {
      id: "yaDDSlFFG6c",
      title: "pop out lab",
    },
    {
      id: "T54nhlkIHTI",
      title: "We're on a JoyRide",
    },
    {
      id: "rUNiRM08ryc",
      title: "‘Lullaby’ Official MV Behind | CORTIS (코르티스)",
    },
    {
      id: "oaoa1noQzBw",
      title: "PYPD NA tour 1",
    },
    {
      id: "NeaXPMDpfnc",
      title: "go home",
    },
    {
      id: "hhrvUa1wcvU",
      title: "martin pov in barcelona",
    },
    {
      id: "kaYrFZGjY7g",
      title: "martin pov in busan TMA",
    },
    {
      id: "6J8TxneIPm8",
      title: "terima kasih allo bank",
    },
    {
      id: "GsnPafjuXDw",
      title: "Pack Up Bro",
    },
    {
      id: "SCYgHBPGEtI",
      title: "‘Blue Lips’ Official MV Behind | CORTIS (코르티스)",
    },
    {
      id: "IAS8BhLdpZc",
      title: "[SUB] ㅋㅋㅋㅋ코르티스 ZZZZZㅏ바와 | 돌들의침묵 | 코르티스 (CORTIS) 'REDRED'",
    },
    {
      id: "itW9VF1LZxk",
      title: "TPE Roller hockey",
    },
    {
      id: "xkNJthSBICs",
      title: "Seollal break",
    },
    {
      id: "dl4i3gNRzNI",
      title: "Laundry in LA",
    },
    {
      id: "r6vn1ZeYC5I",
      title: "LA album photo shoot",
    },
  ].map((item, index) => {
    const number = String(index + 1).padStart(2, "0");

    return {
      slug: `behind-${number}`,
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
    {
      id: "CHXKOpj5LRA",
      title: "CORTIS (코르티스) Documentary ‘What We Want' Trailer",
    },
    {
      id: "K8z4TvBJP0A",
      title: "before debut",
    },
    {
      id: "o_WOlIxOZDs",
      title: "CORTIS (코르티스) Documentary ‘What We Want' EPISODE 02",
    },
    {
      id: "VrFDKz2eo0I",
      title: "CORTIS (코르티스) Documentary ‘What We Want' EPISODE 03",
    },
    {
      id: "W3xhrW33qCI",
      title: "CORTIS (코르티스) Documentary ‘What We Want' EPISODE 04",
    },
    {
      id: "v1d4Rj1pnMY",
      title: "CORTIS (코르티스) Documentary ‘What We Want' EPISODE 01",
    },
    {
      id: "k5IG4o5sZUo",
      title: "D+100 🥳",
    },
    {
      id: "n4FMWVgHjb0",
      title: "‘GO!’ Official MV Commentary",
    },
    {
      id: "i5_O0buoPxI",
      title: "time to debut",
    },
    {
      id: "PjCLUZRdmdI",
      title: "our first Release Party",
    },
    {
      id: "V8xSTZAvKxg",
      title: "first reaction",
    },
    {
      id: "kjB6IUj64TA",
      title: "2024_신인팀 인터뷰.xlsx",
    },
    {
      id: "U6Mf2CyODVI",
      title: "2025_cartalk",
    },
    {
      id: "lKDxp-BWy1M",
      title: "Cooking ACAI",
    },
  ].map((item, index) => {
    const number = String(index + 1).padStart(2, "0");

    return {
      slug: `story-${number}`,
      number,
      title: item.title,
      category: "STORY" as const,
      description: "CORTIS debut journey and visual archive.",
      youtubeId: item.id,
      thumbnail: youtubeThumbnail(item.id),
    };
  }),

];
