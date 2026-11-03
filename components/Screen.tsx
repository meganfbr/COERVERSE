
"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const videoId = "Oy8osuFki7c";

export default function Screen() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-[#111111] px-6 py-16 text-white md:px-12">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 md:grid-cols-12">

        {/* Left: Heading */}
        <div className="md:col-span-3">
          <h2 className="text-5xl font-extrabold leading-[0.95] tracking-tight md:text-6xl">
            THE
            <br />
            SCREEN.
          </h2>

          <p className="mt-6 text-[10px] font-semibold tracking-wide text-[#BBBBBB]">
            MUSIC VIDEOS. BEYOND THE MUSIC.
          </p>
        </div>

        {/* Center: YouTube Player */}
        <div className="md:col-span-6">
          <div className="relative aspect-video overflow-hidden bg-[#222222]">

            {isPlaying ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
                title="CORTIS Featured Music Video"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label="Play CORTIS music video"
                className="group relative h-full w-full cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://i.ytimg.com/vi/${videoId}/hqdefault.jpg)`,
                  }}
                />

                <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40" />

                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:scale-110">
                    <Play size={28} fill="currentColor" />
                  </span>
                </span>

                <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-wide">
                  FEATURED OFFICIAL MV / YOUTUBE
                </span>
              </button>
            )}

          </div>
        </div>

        {/* Right: Description */}
        <div className="md:col-span-3">
          <p className="text-[10px] font-semibold text-[#AAAAAA]">
            01 / FEATURED
          </p>

          <h3 className="mt-5 text-2xl font-extrabold leading-tight md:text-3xl">
            WATCH THE
            <br />
            LATEST MV.
          </h3>

          <p className="mt-5 max-w-[240px] text-sm leading-relaxed text-[#CCCCCC]">
            Watch through the official YouTube player.
          </p>
        </div>

      </div>
    </section>
  );
}
