
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const records = [
  {
    number: "01",
    category: "THE FIRST ERA",
    title: "COLOR OUTSIDE THE LINES",
    subtitle: "EXPLORE THE BEGINNING",
    image: "/image/Album/Record (1).png",
  },
  {
    number: "02",
    category: "SINGLE / RELEASE",
    title: "GREENGREEN",
    subtitle: "DEFINE YOUR OWN",
    image: "/image/Album/Record (3).png",
  },
  {
    number: "03",
    category: "SINGLE / RELEASE",
    title: "MENTION ME",
    subtitle: "MUSIC ARCHIVE",
    image: "/image/Album/Meionme.jpg",
  },
];

export default function RecordsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F5F3EE] text-[#111111]">
        <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-12">

          {/* Editorial top labels */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-bold tracking-wide">
            <span>
              INDEPENDENT FANMADE FASHION & MUSIC ARCHIVE / 2026
            </span>

            <span>ISSUE 002 / THE RECORDS</span>
          </div>

          {/* Hero */}
          <section className="mt-16 border-b border-black pb-16">
            <p className="text-xs font-bold tracking-widest">
              CHAPTER 02 / MUSIC ARCHIVE
            </p>

            <h1 className="mt-8 text-[clamp(4rem,10vw,10rem)] font-black leading-[0.9] tracking-[-0.06em]">
              THE
              <br />
              RECORDS.
            </h1>

            <div className="mt-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <p className="max-w-[560px] text-lg leading-relaxed text-[#777777]">
                Every era has a sound. Explore the music,
                visuals, and creative identity of CORTIS.
              </p>

              <span className="text-xs font-bold tracking-widest">
                03 RECORDS / 01 UNIVERSE
              </span>
            </div>
          </section>

          {/* Featured Record */}
          <section className="py-16">
            <div className="mb-6 flex items-center justify-between text-xs font-bold">
              <span>01 / FEATURED RECORD</span>
              <span>EDITORIAL SELECTION</span>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

              {/* Featured cover */}
              <div className="relative aspect-square overflow-hidden bg-[#D6D6D6]">
                <Image
                  src={records[0].image}
                  alt="Color Outside The Lines album artwork"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Featured information */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold tracking-widest">
                    CORTIS / THE FIRST ERA
                  </p>

                  <h2 className="mt-8 text-[clamp(3rem,5vw,5.5rem)] font-black leading-[0.95] tracking-[-0.05em]">
                    COLOR
                    <br />
                    OUTSIDE
                    <br />
                    THE LINES.
                  </h2>

                  <p className="mt-8 max-w-[420px] text-base leading-relaxed text-[#666666]">
                    An exploration of sound, youth, and
                    creative expression beyond expectations.
                  </p>
                </div>

                <div className="mt-12 border-t border-black pt-6">
                  <p className="text-xs font-bold">
                    THE MUSIC. THE VISUALS. THE ENERGY.
                  </p>

                  <Link
                    href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO0FmwQh?si=RilTQJixSSetbEiw6Kdemg"
                    className="mt-8 inline-flex items-center gap-3 bg-[#111111] px-6 py-4 text-xs font-bold text-white transition-colors hover:bg-[#2854F4]"
                  >
                    EXPLORE THE MUSIC
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Archive */}
          <section className="border-t border-black py-16">
            <div className="mb-10">
              <p className="text-xs font-bold tracking-widest">
                02 / COMPLETE ARCHIVE
              </p>

              <h2 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">
                THE DISCOGRAPHY.
              </h2>

              <p className="mt-4 text-sm text-[#777777]">
                A visual collection of selected CORTIS releases.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {records.map((record) => (
                <article key={record.number} className="group">

                  {/* Album cover */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#D6D6D6]">
                    <Image
                      src={record.image}
                      alt={`${record.title} artwork`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-3 top-3 bg-black px-3 py-2 text-[10px] font-bold text-white">
                      RECORD {record.number}
                    </span>
                  </div>

                  {/* Album info */}
                  <div className="mt-5 border-t border-black pt-4">
                    <p className="text-[10px] font-bold tracking-widest text-[#777777]">
                      {record.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-black tracking-tight">
                      {record.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#777777]">
                      {record.subtitle}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          
        {/* Stream The Music */}
        <section className="border-t border-black py-16 md:py-20">
        <h2 className="text-[clamp(2.8rem,6vw,6rem)] font-black leading-none tracking-[-0.05em]">
            STREAM THE MUSIC.
        </h2>

        <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
            href="https://open.spotify.com/search/CORTIS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#2854F4] transition-opacity hover:opacity-60"
            >
            SPOTIFY
            <ArrowUpRight size={14} />
            </a>

            <a
            href="https://www.melon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#2854F4] transition-opacity hover:opacity-60"
            >
            MELON
            <ArrowUpRight size={14} />
            </a>

            <a
            href="https://youtu.be/Oy8osuFki7c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#2854F4] transition-opacity hover:opacity-60"
            >
            OFFICIAL MUSIC VIDEO
            <ArrowUpRight size={14} />
            </a>
        </div>
        </section>

          {/* Bottom editorial */}
          <section className="border-t border-black py-20">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div>
                <p className="text-xs font-bold tracking-widest">
                  END OF CHAPTER 02
                </p>

                <h2 className="mt-5 text-5xl font-black leading-none tracking-tight md:text-7xl">
                  BEYOND
                  <br />
                  THE SOUND.
                </h2>
              </div>

              <div className="flex flex-col items-start justify-end">
                <p className="max-w-[420px] text-base leading-relaxed text-[#777777]">
                  More than songs. A creative universe shaped
                  through performance, fashion, and visual storytelling.
                </p>

                <Link
                  href="/"
                  className="mt-8 inline-flex items-center gap-3 border-b border-black pb-2 text-xs font-bold"
                >
                  <ArrowLeft size={16} />
                  BACK TO THE UNIVERSE
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
