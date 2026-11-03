
import Image from "next/image";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const members = [
  {
    name: "MARTIN",
    slug: "martin",
    image: "/image/members/martin.jpg",
  },
  {
    name: "JAMES",
    slug: "james",
    image: "/image/members/james.jpg",
  },
  {
    name: "JUHOON",
    slug: "juhoon",
    image: "/image/members/juhoon.jpg",
  },
  {
    name: "SEONGHYEON",
    slug: "seonghyeon",
    image: "/image/members/seonghyeon.jpg",
  },
  {
    name: "KEONHO",
    slug: "keonho",
    image: "/image/members/keonho.jpg",
  },
];

export default function CastPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F5F3EE] px-6 py-12 text-[#111111] md:px-12">
        <div className="mx-auto max-w-[1440px]">

          {/* Editorial header */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 text-[10px] font-bold tracking-wide">
            <span>
              INDEPENDENT FANMADE FASHION & MUSIC ARCHIVE / 2026
            </span>
            <span>ISSUE 001 / THE CAST</span>
          </div>

          {/* CAST HERO */}
          <section className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">

            {/* Left content */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold tracking-wide">
                  CHAPTER 01 / MEMBERS
                </p>

                <h1 className="mt-8 text-[clamp(4rem,7vw,7rem)] font-black leading-none tracking-tight">
                  THE CAST.
                </h1>

                <p className="mt-12 text-lg text-[#888888]">
                  Five individuals. One creative universe.
                </p>
              </div>

              <div className="mt-16">
                <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
                  THE PEOPLE
                  <br />
                  BEHIND THE SOUND.
                </h2>

                <p className="mt-10 text-xs font-bold">
                  SELECT A MEMBER TO EXPLORE ↗
                </p>

                <p className="mt-8 text-xs font-bold">
                  THE CREATIVE GENERATION
                </p>
              </div>
            </div>

            {/* Right: Group photo */}
            <div>
              <p className="mb-2 text-[10px] font-bold">
                EDITORIAL PHOTO / GROUP EDITORIAL COVER
              </p>

              <div className="relative aspect-square overflow-hidden bg-[#DDDDDD]">
                <Image
                  src="/image/cast/cast-group.jpg"
                  alt="CORTIS group editorial portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

          </section>

          {/* Member index separator */}
          <div className="mt-12 border-t border-black pt-3">
            <p className="text-[10px] font-bold">
              MEMBER INDEX / 01—05
            </p>
          </div>

          {/* MEMBER GALLERY */}
          <section className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
            {members.map((member, index) => (
              <Link
                key={member.slug}
                href={`/cast/${member.slug}`}
                className="group block"
              >
                <p className="mb-2 text-[10px] font-bold">
                  EDITORIAL PHOTO / {member.name}
                </p>

                <div className="relative aspect-[3/4] overflow-hidden bg-[#D6D6D6]">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-3 text-center text-sm font-extrabold tracking-wide">
                  {member.name}
                </h3>

                <p className="mt-4 text-center text-[10px] font-bold transition-colors group-hover:text-[#2854F4]">
                  0{index + 1} &nbsp; VIEW PROFILE ↗
                </p>
              </Link>
            ))}
          </section>

          {/* OFF STAGE SECTION */}
          <section className="mt-20 pb-20">
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              OFF STAGE / ON RECORD.
            </h2>

            <p className="mt-4 text-base text-[#888888]">
              Member stories, selected moments, and official media connections.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
