
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
];

export default function WatchGallery() {
  return (
    <section className="bg-[#F5F3EE] px-6 py-16 text-[#111111] md:px-12">
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <p className="text-xs font-bold tracking-widest">
            EXPLORE / VIDEO CATEGORIES
          </p>

          <span className="text-xs font-bold">
            04 CATEGORIES
          </span>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/watch/category/${category.slug}`}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#D6D6D6]">

                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

                {/* Top label */}
                <span className="absolute left-4 top-4 text-[10px] font-bold text-white">
                  {category.number} / {category.description}
                </span>

                {/* Bottom label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
                  <h3 className="text-lg font-black leading-tight text-white md:text-2xl">
                    {category.title}
                  </h3>

                  <ArrowUpRight
                    size={22}
                    className="shrink-0 text-white transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>

              <p className="mt-3 text-xs font-bold tracking-wide">
                EXPLORE COLLECTION ↗
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
