
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Search,
  SlidersHorizontal,
  Play,
  X,
  Film,
} from "lucide-react";

import {
  videos,
  type Video,
  type VideoCategory,
} from "../data/videos";

// ======================================
// TYPES
// ======================================

type CategoryFilter = "ALL" | VideoCategory;

type SortOption =
  | "default"
  | "title-asc"
  | "title-desc";

type VideoLibraryProps = {
  initialCategory?: CategoryFilter;
  showBackButton?: boolean;
  hideHeader?: boolean;
};

// ======================================
// CATEGORY CONFIGURATION
// ======================================

const filters: CategoryFilter[] = [
  "ALL",
  "MV",
  "PERFORMANCE",
  "DANCE",
  "BEHIND",
  "STORY",
];

const categoryTitles: Record<CategoryFilter, string> = {
  ALL: "THE VIDEO LIBRARY.",
  MV: "OFFICIAL MUSIC VIDEOS.",
  PERFORMANCE: "PERFORMANCE.",
  DANCE: "DANCE PRACTICE.",
  BEHIND: "BEHIND THE SCENES.",
  STORY: "THE STORY.",
};

const categoryDescriptions: Record<CategoryFilter, string> = {
  ALL: "Music. Movement. Behind the scenes. Stories.",
  MV: "Explore the music videos and visual world of CORTIS.",
  PERFORMANCE: "Live stages, special performances and moments on stage.",
  DANCE: "Dance practices, choreography and movement.",
  BEHIND: "Discover the creative moments behind the camera.",
  STORY: "Follow the journey and stories of CORTIS.",
};

const ITEMS_PER_PAGE = 12;

// ======================================
// COMPONENT
// ======================================

export default function VideoLibrary({
  initialCategory = "ALL",
  showBackButton = true,
  hideHeader = false,
}: VideoLibraryProps) {
  // Active category
  const [activeCategory, setActiveCategory] =
    useState<CategoryFilter>(initialCategory);

  // Search input
  const [searchQuery, setSearchQuery] = useState("");

  // Sorting
  const [sortBy, setSortBy] =
    useState<SortOption>("default");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  // ======================================
  // FILTER + SEARCH + SORT
  // ======================================

  const filteredVideos = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const result = videos.filter((video) => {
      // Filter category
      const matchCategory =
        activeCategory === "ALL" ||
        video.category === activeCategory;

      // Search title, category, description
      const matchSearch =
        query === "" ||
        video.title.toLowerCase().includes(query) ||
        video.category.toLowerCase().includes(query) ||
        video.description.toLowerCase().includes(query);

      return matchCategory && matchSearch;
    });

    // Sort video list
    if (sortBy === "title-asc") {
      result.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    if (sortBy === "title-desc") {
      result.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  // ======================================
  // PAGINATION
  // ======================================

  const totalPages = Math.max(
    1,
    Math.ceil(filteredVideos.length / ITEMS_PER_PAGE)
  );

  const safePage = Math.min(currentPage, totalPages);

  const startIndex =
    (safePage - 1) * ITEMS_PER_PAGE;

  const visibleVideos = filteredVideos.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // ======================================
  // EVENT HANDLERS
  // ======================================

  const handleCategoryChange = (
    category: CategoryFilter
  ) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: SortOption) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  // ======================================
  // COMPONENT UI
  // ======================================

  return (
    <section className="min-h-screen bg-[#F5F3EE] px-6 py-12 text-[#111111] md:px-12">
      <div className="mx-auto max-w-[1440px]">

        {/* ======================================
            TOP NAVIGATION & EDITORIAL HEADER
        ====================================== */}

        {!hideHeader && (
          <>
            <div className="flex flex-wrap items-center justify-between gap-4">
              {showBackButton ? (
                <Link
                  href="/watch"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wide transition-colors hover:text-[#2854F4]"
                >
                  <ArrowLeft size={16} />
                  BACK TO WATCH
                </Link>
              ) : (
                <span className="text-xs font-bold">
                  COERVERSE / WATCH
                </span>
              )}

              <span className="text-[10px] font-bold tracking-widest text-[#777777]">
                THE MOVING IMAGE ARCHIVE / 2026
              </span>
            </div>

            <div className="mt-16">
              <p className="text-xs font-bold tracking-widest text-[#2854F4]">
                CHAPTER 03 / VIDEO COLLECTION
              </p>

              <h1 className="mt-6 max-w-[1200px] text-[clamp(3rem,7vw,7.5rem)] font-black leading-[0.95] tracking-[-0.07em]">
                {categoryTitles[activeCategory]}
              </h1>

              <div className="mt-10 flex flex-col justify-between gap-5 border-t border-black pt-6 md:flex-row md:items-end">
                <p className="max-w-[600px] text-base leading-relaxed text-[#777777] md:text-lg">
                  {categoryDescriptions[activeCategory]}
                </p>

                <div className="flex items-center gap-3">
                  <Film size={17} />

                  <span className="text-xs font-bold">
                    {filteredVideos.length} VIDEOS
                  </span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ======================================
            SEARCH BAR + SORT
        ====================================== */}

        <div className={`${hideHeader ? "mt-4" : "mt-14"} grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto]`}>

          {/* Search */}
          <div className="flex h-14 items-center gap-4 border border-[#D2D0CA] bg-white px-5 transition-colors focus-within:border-[#2854F4]">

            <Search
              size={20}
              className="shrink-0 text-[#777777]"
            />

            <input
              type="search"
              value={searchQuery}
              onChange={(event) =>
                handleSearchChange(event.target.value)
              }
              placeholder="Search the video archive..."
              aria-label="Search videos"
              className="h-full w-full min-w-0 bg-transparent text-sm text-[#111111] outline-none placeholder:text-[#999999]"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearchChange("")}
                aria-label="Clear search"
                className="cursor-pointer text-[#777777] hover:text-black"
              >
                <X size={18} />
              </button>
            )}

          </div>

          {/* Sorting */}
          <div className="flex h-14 items-center gap-3 border border-[#D2D0CA] bg-white px-5">

            <SlidersHorizontal
              size={18}
              className="text-[#777777]"
            />

            <span className="whitespace-nowrap text-xs font-bold">
              SORT /
            </span>

            <select
              value={sortBy}
              onChange={(event) =>
                handleSortChange(
                  event.target.value as SortOption
                )
              }
              aria-label="Sort videos"
              className="min-w-0 cursor-pointer bg-transparent text-xs font-bold outline-none"
            >
              <option value="default">
                DEFAULT ORDER
              </option>

              <option value="title-asc">
                TITLE A–Z
              </option>

              <option value="title-desc">
                TITLE Z–A
              </option>
            </select>

          </div>
        </div>

        {/* ======================================
            CATEGORY FILTERS
        ====================================== */}

        <div className="mt-8 flex flex-wrap items-center gap-2">

          <span className="mr-3 text-xs font-bold">
            FILTERS /
          </span>

          {filters.map((filter) => {
            const isActive =
              activeCategory === filter;

            const count =
              filter === "ALL"
                ? videos.length
                : videos.filter(
                    (video) =>
                      video.category === filter
                  ).length;

            return (
              <button
                key={filter}
                type="button"
                onClick={() =>
                  handleCategoryChange(filter)
                }
                aria-pressed={isActive}
                className={`cursor-pointer border px-4 py-2.5 text-[11px] font-bold tracking-wide transition-colors ${
                  isActive
                    ? "border-[#2854F4] bg-[#2854F4] text-white"
                    : "border-[#D2D0CA] text-[#111111] hover:border-[#2854F4] hover:text-[#2854F4]"
                }`}
              >
                {filter}

                <span
                  className={`ml-2 ${
                    isActive
                      ? "text-white/75"
                      : "text-[#999999]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}

        </div>

        {/* ======================================
            RESULTS HEADER
        ====================================== */}

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-b border-black pb-5">

          <h2 className="text-2xl font-black tracking-tight md:text-3xl">
            THE ARCHIVE.
          </h2>

          <span className="text-xs font-bold text-[#777777]">
            SHOWING {visibleVideos.length} OF{" "}
            {filteredVideos.length} VIDEOS
          </span>

        </div>

        {/* ======================================
            VIDEO GRID
        ====================================== */}

        {visibleVideos.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

            {visibleVideos.map((video: Video) => (
              <Link
                key={video.slug}
                href={`/watch/${video.slug}`}
                className="group block"
              >

                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-[#D6D6D6]">

                  {/* CSS background avoids remote
                      Next/Image hostname errors */}
                  <div
                    role="img"
                    aria-label={video.title}
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url("${video.thumbnail}")`,
                    }}
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/15 transition-colors duration-300 group-hover:bg-black/40" />

                  {/* Category label */}
                  <span className="absolute left-4 top-4 bg-[#111111] px-3 py-2 text-[10px] font-bold tracking-wider text-white">
                    {video.category} / {video.number}
                  </span>

                  {/* Play button */}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#111111] transition-transform duration-300 group-hover:scale-110">
                      <Play
                        size={22}
                        fill="currentColor"
                      />
                    </span>
                  </span>

                </div>

                {/* Video Information */}
                <div className="mt-5 flex items-start justify-between gap-4">

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold tracking-widest text-[#777777]">
                      CORTIS / {video.category}
                    </p>

                    <h3 className="mt-2 text-xl font-black leading-tight tracking-tight transition-colors group-hover:text-[#2854F4] md:text-2xl">
                      {video.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#777777]">
                      {video.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </div>

              </Link>
            ))}

          </div>
        ) : (
          /* ======================================
              EMPTY RESULTS
          ====================================== */

          <div className="mt-10 flex min-h-[300px] flex-col items-center justify-center border border-[#D2D0CA] px-6 text-center">

            <Search
              size={36}
              className="text-[#999999]"
            />

            <h3 className="mt-5 text-2xl font-black">
              NO VIDEOS FOUND.
            </h3>

            <p className="mt-3 max-w-[400px] text-sm leading-relaxed text-[#777777]">
              We couldn't find a video matching your search.
              Try another keyword or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("ALL");
                setSortBy("default");
                setCurrentPage(1);
              }}
              className="mt-6 cursor-pointer border-b border-black pb-2 text-xs font-bold"
            >
              CLEAR ALL FILTERS
            </button>

          </div>
        )}

        {/* ======================================
            PAGINATION
        ====================================== */}

        {totalPages > 1 && (
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4 border-t border-black pt-8">

            <button
              type="button"
              onClick={() =>
                setCurrentPage((page) =>
                  Math.max(1, page - 1)
                )
              }
              disabled={safePage === 1}
              className="flex cursor-pointer items-center gap-2 text-xs font-bold disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeft size={17} />
              PREV
            </button>

            <span className="px-4 text-xs font-bold">
              PAGE {safePage} / {totalPages}
            </span>

            <button
              type="button"
              onClick={() =>
                setCurrentPage((page) =>
                  Math.min(totalPages, page + 1)
                )
              }
              disabled={safePage === totalPages}
              className="flex cursor-pointer items-center gap-2 text-xs font-bold disabled:cursor-not-allowed disabled:opacity-30"
            >
              NEXT
              <ArrowRight size={17} />
            </button>

          </div>
        )}

        {/* ======================================
            BOTTOM NOTE
        ====================================== */}

        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-[#D2D0CA] pt-6 text-[10px] font-bold tracking-wide text-[#777777]">

          <span>
            COERVERSE / THE MOVING IMAGE ARCHIVE
          </span>

          <span>
            AN INDEPENDENT FANMADE PROJECT
          </span>

        </div>

      </div>
    </section>
  );
}
