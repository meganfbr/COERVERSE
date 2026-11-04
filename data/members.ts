
export type Member = {
  slug: string;
  name: string;
  number: string;
  portrait: string;

  biography: {
    stageName: string;
    birthName: string;
    koreanName: string;
    positions: string;
    birthday: string;
    zodiac: string;
    height: string;
    bloodType: string;
    mbti: string;
    nationality: string;
  };

  creativeCredits: {
    title: string;
    description: string;
  }[];

  candidPhotos: string[];
};

export const members: Record<string, Member> = {
  martin: {
    slug: "martin",
    name: "MARTIN",
    number: "01",
    portrait: "/image/MARTIN/MARTIN0.jpg",

    biography: {
      stageName: "Martin",
      birthName: "Martin Edward",
      koreanName: "마틴",
      positions: "Leader",
      birthday: "March 20, 2008",
      zodiac: "Pisces",
      height: "190 cm",
      bloodType: "O",
      mbti: "ENFP",
      nationality: "Korean-Canadian",
    },
    
    creativeCredits: [
      {
        title: "ILLIT — Magnetic",
        description: "Songwriting, composition, and production credits.",
      },
      {
        title: "TXT — Deja Vu",
        description: "Songwriting and composition credits.",
      },
      {
        title: "LE SSERAFIM — Pierrot",
        description: "Songwriting and composition credits.",
      },
      {
        title: "CORTIS — COLOR OUTSIDE THE LINES",
        description: "Songwriting, composition, and selected production contributions.",
      },
    ],

    candidPhotos: [
      "/image/CARD/MARTIN/1.png",
      "/image/CARD/MARTIN/2.png",
      "/image/CARD/MARTIN/3.png",
      "/image/CARD/MARTIN/4.png",
    ],
  },

  james: {
    slug: "james",
    name: "JAMES",
    number: "02",
    portrait: "/image/JMS/JAMES0.jpg",

    biography: {
      stageName: "James",
      birthName: "Zhao Yufan",
      koreanName: "제임스",
      positions: "Member / Creative contributor",
      birthday: "October 14, 2005",
      zodiac: "Libra",
      height: "178 cm",
      bloodType: "A",
      mbti: "INTP",
      nationality: "Thai-Taiwanese",
    },

    
    creativeCredits: [
      {
        title: "ILLIT — Magnetic",
        description: "Songwriting contribution and choreography involvement, including the signature hand movement.",
      },
      {
        title: "ILLIT — Cherish",
        description: "Songwriting contribution and choreography involvement, including the signature hand movement.",
      },
      {
        title: "TXT — Deja Vu",
        description: "Songwriting contribution.",
      },
      {
        title: "CORTIS — COLOR OUTSIDE THE LINES",
        description: "Songwriting and creative contributions to the debut project.",
      },
    ],

    candidPhotos: [
      "/image/CARD/JAMES/1.png",
      "/image/candid/martin/2.jpg",
      "/image/candid/martin/3.jpg",
    ],

  },

  juhoon: {
    slug: "juhoon",
    name: "JUHOON",
    number: "03",
    portrait: "/image/JUHOON/JUHOON0.jpg",

    biography: {
      stageName: "Juhoon",
      birthName: "Kim Juhoon",
      koreanName: "주훈",
      positions: "Member / Creative contributor",
      birthday: "January 3, 2008",
      zodiac: "Capricorn",
      height: "176 cm",
      bloodType: "O",
      mbti: "ISFP",
      nationality: "South Korean",
    },

    
    creativeCredits: [
      {
        title: "CORTIS — GO!",
        description: "Songwriting contribution.",
      },
      {
        title: "CORTIS — What You Want",
        description: "Songwriting contribution.",
      },
      {
        title: "CORTIS — FaSHioN",
        description: "Songwriting contribution.",
      },
    ],
    candidPhotos: [
      "/image/candid/martin/1.jpg",
      "/image/candid/martin/2.jpg",
      "/image/candid/martin/3.jpg",
    ],
  },

  seonghyeon: {
    slug: "seonghyeon",
    name: "SEONGHYEON",
    number: "04",
    portrait: "/image/SEAN/SEAN0.jpg",

    biography: {
      stageName: "Seonghyeon",
      birthName: "Eom Seonghyeon / Sean Eom",
      koreanName: "성현",
      positions: "Member / Creative contributor",
      birthday: "January 13, 2009",
      zodiac: "Capricorn",
      height: "175 cm",
      bloodType: "A",
      mbti: "INTP",
      nationality: "South Korean",
    },

    creativeCredits: [
      {
        title: "CORTIS — GO!",
        description: "Songwriting contribution.",
      },
      {
        title: "CORTIS — What You Want",
        description: "Songwriting contribution.",
      },
      {
        title: "CORTIS — FaSHioN",
        description: "Songwriting contribution.",
      },
    ],
    candidPhotos: [
      "/image/candid/martin/1.jpg",
      "/image/candid/martin/2.jpg",
      "/image/candid/martin/3.jpg",
    ],
  },

  keonho: {
    slug: "keonho",
    name: "KEONHO",
    number: "05",
    portrait: "/image/KEONHO/KEONHO1.jpg",

    biography: {
      stageName: "Keonho",
      birthName: "Anh Keonho",
      koreanName: "건호",
      positions: "Member / Creative contributor",
      birthday: "February 14, 2009",
      zodiac: "Aquarius",
      height: "178 cm",
      bloodType: "O",
      mbti: "INTP",
      nationality: "South Korean",
    },

    creativeCredits: [
      {
        title: "CORTIS — GO!",
        description: "Songwriting contribution.",
      },
      {
        title: "CORTIS — What You Want",
        description: "Songwriting contribution.",
      },
      {
        title: "CORTIS — FaSHioN",
        description: "Songwriting contribution.",
      },
    ],
    candidPhotos: [
      "/image/candid/martin/1.jpg",
      "/image/candid/martin/2.jpg",
      "/image/candid/martin/3.jpg",
    ],
  },
};
