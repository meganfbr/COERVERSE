

import Image from "next/image";
import Link from "next/link";

const records = [
  {
    id: 1,
    title: "RECORD 01",
    subtitle: "CORTIS / RELEASE",
    image: "/image/hero/album1.png",
  },
  {
    id: 2,
    title: "RECORD 02",
    subtitle: "CORTIS / RELEASE",
    image: "/image/hero/album2.png",
  },
  {
    id: 3,
    title: "RECORD 03",
    subtitle: "CORTIS / RELEASE",
    image: "/image/hero/album3.png",
  },
];
;

export default function Records() {
  return (
    <section className="bg-[#F5F3EE] px-6 py-20 text-[#111111] md:px-12">
      <div className="mx-auto max-w-[1440px]">
        {/* Section heading */}
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#777777]">
              02 / MUSIC ARCHIVE
            </p>

            <h2 className="mt-3 text-5xl font-extrabold tracking-tight md:text-7xl">
              THE RECORDS.
            </h2>

            <p className="mt-4 text-sm text-[#666666]">
              Music that defines the era.
            </p>
          </div>

          <Link
            href="/records"
            className="shrink-0 border-b border-black pb-1 text-xs font-bold hover:text-[#2854F4]"
          >
            VIEW ALL ↗
          </Link>
        </div>

        {/* Album grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {records.map((record) => (
            <article key={record.id}>
              <div className="relative aspect-[4/3] overflow-hidden bg-[#D6D6D6]">
                <Image
                  src={record.image}
                  alt={record.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <h3 className="mt-4 text-lg font-bold">
                {record.title}
              </h3>

              <p className="mt-1 text-xs text-[#777777]">
                {record.subtitle}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
