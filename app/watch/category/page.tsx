
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import { videos, type VideoCategory } from "../../../../data/videos";

const categories: Record<string, { title: string; filter: VideoCategory }> = {
  mv: { title: "OFFICIAL MUSIC VIDEOS", filter: "MV" },
  performance: { title: "PERFORMANCE", filter: "PERFORMANCE" },
  dance: { title: "DANCE PRACTICE", filter: "DANCE" },
  behind: { title: "BEHIND THE SCENES", filter: "BEHIND" },
};

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({ category }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const selected = Object.prototype.hasOwnProperty.call(categories, category)
    ? categories[category]
    : undefined;

  if (!selected) notFound();

  const categoryVideos = videos.filter(
    (video) => video.category === selected.filter
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F5F3EE] px-6 py-12 text-[#111111] md:px-12">
        <div className="mx-auto max-w-[1440px]">

          <Link
            href="/watch"
            className="inline-flex items-center gap-2 text-xs font-bold"
          >
            <ArrowLeft size={16} />
            BACK TO WATCH
          </Link>

          <p className="mt-16 text-xs font-bold tracking-widest">
            THE SCREEN / VIDEO COLLECTION
          </p>

          <h1 className="mt-6 text-5xl font-black tracking-tight md:text-8xl">
            {selected.title}.
          </h1>

          <p className="mt-5 text-sm text-[#777777]">
            {categoryVideos.length} VIDEOS / CORTIS ARCHIVE
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryVideos.map((video) => (
              <Link
                href={`/watch/${video.slug}`}
                key={video.slug}
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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <span className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 text-sm font-bold text-white">
                    {video.title}
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {categoryVideos.length === 0 && (
            <div className="mt-14 border border-black/20 p-10 text-center text-sm text-[#777777]">
              No videos in this collection yet.
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
