
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WatchGallery from "../../components/WatchGallery";
import WatchVideoArchive from "../../components/WatchVideoArchive";

export default function WatchPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F5F3EE] text-[#111111]">

        {/* Editorial Header */}
        <section className="px-6 pb-20 pt-8 md:px-12">
          <div className="mx-auto max-w-[1440px]">

            <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold">
              <span>
                INDEPENDENT FANMADE FASHION & MUSIC ARCHIVE / 2026
              </span>
              <span>ISSUE 001 / WATCH</span>
            </div>

            <p className="mt-8 text-xs font-bold tracking-wide">
              CHAPTER 03 / MOVING IMAGE ARCHIVE
            </p>

            <h1 className="mt-10 text-[clamp(3.8rem,9vw,9rem)] font-black leading-none tracking-[-0.06em]">
              THE SCREEN.
            </h1>

            <p className="mt-10 text-base text-[#888888] md:mt-14">
              Performance, music videos and everything in motion.
            </p>

          </div>
        </section>

        {/* Featured Section */}
        <section className="bg-[#111111] px-6 py-16 text-white md:px-12 md:py-20">
          <div className="mx-auto max-w-[1440px]">

            <p className="mb-8 text-[11px] font-bold">
              NOW SHOWING / OFFICIAL CONTENT
            </p>

            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">

              {/* Featured Image */}
              <Link
                href="/watch/featured-mv"
                className="group relative block aspect-video overflow-hidden bg-[#292929] lg:col-span-8"
              >
                <Image
                  src="/image/cortis/imgv1.jpg"
                  alt="CORTIS featured music video"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40" />

                <span className="absolute left-4 top-4 text-[10px] font-bold text-white">
                  EDITORIAL PHOTO / FEATURED MV
                </span>

                <span className="absolute bottom-5 left-5 flex items-center gap-3 text-xs font-bold">
                  <Play size={17} fill="currentColor" />
                  PLAY OFFICIAL MUSIC VIDEO
                  <ArrowUpRight size={16} />
                </span>
              </Link>

              {/* Right Editorial Text */}
              <div className="lg:col-span-4">
                <h2 className="text-[clamp(3rem,5vw,5.5rem)] font-black leading-[0.95] tracking-[-0.05em]">
                  WATCH
                  <br />
                  THE
                  <br />
                  STORY.
                </h2>

                <p className="mt-6 max-w-[330px] text-base leading-relaxed text-[#CCCCCC]">
                  Official music videos, performance films,
                  dance practices, and behind the scenes.
                </p>

                <Link
                  href="/watch/featured-mv"
                  className="mt-8 inline-flex items-center gap-2 border-b border-white pb-2 text-xs font-bold hover:text-[#B7EF54]"
                >
                  WATCH THE FEATURED MV
                  <ArrowUpRight size={16} />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Filterable Video Cards */}
        <WatchGallery />
        <WatchVideoArchive />
      </main>

      <Footer />
    </>
  );
}
