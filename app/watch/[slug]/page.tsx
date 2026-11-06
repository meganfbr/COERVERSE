
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { videos } from "../../../data/videos";

type VideoPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return videos.map((video) => ({
    slug: video.slug,
  }));
}

export default async function VideoDetailPage({
  params,
}: VideoPageProps) {
  const { slug } = await params;

  const video = videos.find((item) => item.slug === slug);

  if (!video) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F5F3EE] text-[#111111]">
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-12">

          {/* Back */}
          <Link
            href="/watch"
            className="inline-flex items-center gap-2 text-xs font-bold hover:text-[#2854F4]"
          >
            <ArrowLeft size={16} />
            BACK TO WATCH
          </Link>

          {/* Video title */}
          <div className="mt-12 border-t border-black pt-8">
            <p className="text-xs font-bold tracking-widest">
              VIDEO {video.number} / {video.category}
            </p>

            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-7xl">
              {video.title}.
            </h1>

            <p className="mt-6 max-w-[600px] text-base text-[#777777]">
              {video.description}
            </p>
          </div>

          {/* Video Player */}
          <div className="relative mt-12 aspect-video overflow-hidden bg-black">
            {video.youtubeId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                title={video.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm font-bold text-white">
                VIDEO COMING SOON
              </div>
            )}
          </div>

          {/* External link */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-black pt-6">
            <span className="text-xs font-bold tracking-widest">
              CORTIS / OFFICIAL YOUTUBE
            </span>
                         
              {video.youtubeId && (
                <a
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#2854F4]"
                >
                  WATCH ON YOUTUBE
                  <ArrowUpRight size={16} />
                </a>
              )}
          </div>

          {/* Return */}
          <Link
            href="/watch"
            className="mt-20 inline-flex items-center gap-2 border-b border-black pb-2 text-sm font-bold"
          >
            <ArrowLeft size={18} />
            EXPLORE MORE VIDEOS
          </Link>

        </div>
      </main>

      <Footer />
    </>
  );
}
