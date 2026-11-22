
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "OFFICIAL MV",
    slug: "mv",
    number: "01",
    description: "MUSIC VIDEOS",
    image: "/image/watch/img7.jpg",
  },
  {
    title: "PERFORMANCE",
    slug: "performance",
    number: "02",
    description: "LIVE & STAGE",
    image: "/image/watch/img2.jpg",
  },
  {
    title: "DANCE",
    slug: "dance",
    number: "03",
    description: "DANCE PRACTICE",
    image: "/image/watch/img3.jpg",
  },
  {
    title: "BEHIND THE SCENES",
    slug: "behind",
    number: "04",
    description: "OFF STAGE",
    image: "/image/watch/img4.jpg",
  },
  {
    title: "THE STORY",
    slug: "story",
    number: "05",
    description: "FROM THE BEGINNING",
    image: "/image/watch/joyride.jpg",
  },
];

export default function WatchGallery() {
  return (
    <section className="bg-[#F5F3EE] px-6 py-16 text-[#111111] md:px-12">
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between gap-4">
          <p className="text-xs font-bold tracking-widest">
            EXPLORE / VIDEO CATEGORIES
          </p>

          <span className="text-xs font-bold">
            05 CATEGORIES
          </span>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const isStory = category.slug === "story";

            return (
              <Link
                key={category.slug}
                href={`/watch/category/${category.slug}`}
                className={`group block ${
                  isStory
                    ? "sm:col-span-2 lg:col-span-4"
                    : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-[#D6D6D6] ${
                    isStory
                      ? "aspect-[4/3] sm:aspect-[16/7] lg:aspect-[21/7]"
                      : "aspect-[3/4]"
                  }`}
                >
                  {/* Category Image */}
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes={
                      isStory
                        ? "(max-width: 640px) 100vw, 95vw"
                        : "(max-width: 1024px) 50vw, 25vw"
                    }
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/75" />

                  {/* Top Label */}
                  <span className="absolute left-4 top-4 text-[10px] font-bold tracking-wide text-white md:left-6 md:top-6">
                    {category.number} / {category.description}
                  </span>

                  {/* Bottom Content */}
                  <div className="absolute bottom-5 left-4 right-4 flex items-end justify-between gap-4 md:bottom-8 md:left-8 md:right-8">
                    <div>
                      <h3
                        className={`font-black leading-[0.95] tracking-tight text-white ${
                          isStory
                            ? "text-4xl md:text-7xl"
                            : "text-xl md:text-2xl"
                        }`}
                      >
                        {category.title}
                        {isStory ? "." : ""}
                      </h3>

                      {isStory && (
                        <p className="mt-4 max-w-[560px] text-sm leading-relaxed text-white/85 md:text-lg">
                          Five members. One beginning.
                          Explore the journey of CORTIS,
                          from their first chapter to the present.
                        </p>
                      )}
                    </div>

                    <ArrowUpRight
                      size={isStory ? 32 : 22}
                      className="shrink-0 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>

                {/* Bottom Link */}
                <p className="mt-3 text-xs font-bold tracking-wide">
                  {isStory
                    ? "DISCOVER THEIR STORY ↗"
                    : "EXPLORE COLLECTION ↗"}
                </p>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
