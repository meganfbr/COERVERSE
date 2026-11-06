
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { videos, type VideoCategory } from "../data/videos";

type Filter = "ALL" | VideoCategory;

const filters: Filter[] = [
  "ALL",
  "MV",
  "PERFORMANCE",
  "DANCE",
  "BEHIND",
];

export default function WatchVideoArchive() {
  const [activeFilter, setActiveFilter] =
    useState<Filter>("ALL");

  const filteredVideos =
    activeFilter === "ALL"
      ? videos
      : videos.filter(
          (video) => video.category === activeFilter
        );

  return (
    <section className="bg-[#F5F3EE] px-6 py-16 text-[#111111] md:px-12">
      <div className="mx-auto max-w-[1440px]">

        <div className="mb-8 border-t border-black pt-8">
          <p className="text-xs font-bold tracking-widest">
            THE MOVING IMAGE ARCHIVE
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            VIDEO ARCHIVE.
          </h2>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap items-center gap-5">
          <span className="text-xs font-bold">
            FILTERS /
          </span>

          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`cursor-pointer text-xs font-bold transition-colors ${
                activeFilter === filter
                  ? "text-[#2854F4]"
                  : "text-[#111111] hover:text-[#2854F4]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Filtered video cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video) => (
            <Link
              key={video.slug}
              href={`/watch/${video.slug}`}
              className="group block"
            >
              <div className="relative aspect-video overflow-hidden bg-[#D6D6D6]">
                <div
                role="img"
                aria-label={video.title}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                    backgroundImage: `url("${video.thumbnail}")`,
                }}
                />


                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                <span className="absolute left-4 top-4 text-[10px] font-bold text-white">
                  {video.category}
                </span>

                <span className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-sm font-bold text-white">
                  {video.title}
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="border border-black/20 p-10 text-center text-sm text-[#777777]">
            No videos available in this category yet.
          </div>
        )}

      </div>
    </section>
  );
}
