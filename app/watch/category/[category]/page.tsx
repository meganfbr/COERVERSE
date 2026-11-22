
import { notFound } from "next/navigation";

import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import VideoLibrary from "../../../../components/VideoLibrary";

import type { VideoCategory } from "../../../../data/videos";

// Daftar kategori yang tersedia
const categories: Record<string, VideoCategory> = {
  mv: "MV",
  performance: "PERFORMANCE",
  dance: "DANCE",
  behind: "BEHIND",
  story: "STORY",
};

type PageProps = {
  params: Promise<{ category: string }>;
};

// Generate halaman untuk setiap kategori
export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({
    category,
  }));
}

export default async function CategoryPage({
  params,
}: PageProps) {
  const { category } = await params;

  // Ambil kategori berdasarkan URL
  const selectedCategory = Object.prototype.hasOwnProperty.call(
    categories,
    category
  )
    ? categories[category]
    : undefined;

  // Tampilkan 404 jika kategori tidak dikenal
  if (!selectedCategory) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <VideoLibrary
        initialCategory={selectedCategory}
        showBackButton={true}
      />

      <Footer />
    </>
  );
}
