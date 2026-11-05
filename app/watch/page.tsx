
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { videos } from "../../data/videos";

export default function WatchPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F5F3EE] text-[#111111]">
        <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-12">

          {/* Editorial header */}
          <div className="flex flex-wrap justify-between gap-4 text-[10px] font-bold tracking-widest">
            <span>
              INDEPENDENT FANMADE FASHION & MUSIC ARCHIVE
            </span>
            <span>ISSUE 003 / WATCH</span>
          </div>

          {/* Title */}
          <section className="mt-16 border-b border-black pb-12">
            <p className="text-xs font-bold tracking-widest">
              CHAPTER 03 / MOVING IMAGES
            </p>

            <h1 className="mt-6 text-[clamp(5rem,12vw,11rem)] font-black leading-none tracking-[-0.07em]">
              WATCH.
            </h1>

            <p className="mt-8 text-lg text-[#777777]">
              Music videos. Visual stories. Moments beyond the sound.
            </p>
          </section>

          {/* Video archive */}
          <section className="py-16">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold tracking-widest">
                  01 / VIDEO ARCHIVE
                </p>

                <h2 className="mt-4 text-4xl font-black md:text-6xl">
                  THE SCREEN.
                </h2>
              </div>

              <span className="text-xs font-bold">
                {String(videos.length).padStart(2, "0")} VIDEOS
              </span>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {videos.map((video) => (
                <Link
                  key={video.slug}
                  href={`/watch/${video.slug}`}
                  className="group block"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-[#222222]">

                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{
                        backgroundImage:
                          `url(https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg)`,
                      }}
                    />

                    <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40" />

                    {/* Play icon */}
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:scale-110">
                        <Play size={27} fill="currentColor" />
                      </span>
                    </span>

                    <span className="absolute left-4 top-4 bg-black px-3 py-2 text-[10px] font-bold text-white">
                      {video.number} / {video.category}
                    </span>
                  </div>

                  {/* Card description */}
                  <div className="mt-5 flex items-start justify-between gap-4 border-t border-black pt-4">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-[#777777]">
                        CORTIS / MOVING IMAGES
                      </p>

                      <h3 className="mt-3 text-2xl font-black tracking-tight md:text-3xl">
                        {video.title}
                      </h3>

                      <p className="mt-3 text-sm text-[#777777]">
                        {video.description}
                      </p>

                      <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#2854F4]">
                        WATCH VIDEO
                        <ArrowUpRight size={16} />
                      </span>
                    </div>

                    <ArrowUpRight
                      size={24}
                      className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
