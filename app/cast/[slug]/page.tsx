
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { members } from "../../../data/members";

type MemberPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(members).map((slug) => ({
    slug,
  }));
}

export default async function MemberPage({
  params,
}: MemberPageProps) {
  const { slug } = await params;

  const member = Object.prototype.hasOwnProperty.call(
    members,
    slug
  )
    ? members[slug]
    : undefined;

  if (!member) {
    notFound();
  }

  const biographyFields = [
    ["STAGE NAME", member.biography.stageName],
    ["BIRTH NAME", member.biography.birthName],
    ["KOREAN NAME", member.biography.koreanName],
    ["POSITION(S)", member.biography.positions],
    ["BIRTHDAY", member.biography.birthday],
    ["ZODIAC SIGN", member.biography.zodiac],
    ["HEIGHT", member.biography.height],
    ["BLOOD TYPE", member.biography.bloodType],
    ["MBTI TYPE", member.biography.mbti],
    ["NATIONALITY", member.biography.nationality],
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#F5F3EE] text-[#111111]">
        <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-12">

          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black pb-5">
            <Link
              href="/cast"
              className="flex items-center gap-2 text-xs font-bold hover:text-[#2854F4]"
            >
              <ArrowLeft size={16} />
              BACK TO THE CAST
            </Link>

            <p className="text-[10px] font-bold tracking-widest">
              MEMBER PROFILE / {member.number}
            </p>
          </div>

          {/* Member Hero */}
          <section className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">

            {/* Portrait */}
            <div>
              <p className="mb-3 text-[10px] font-bold tracking-widest">
                EDITORIAL PORTRAIT / {member.name}
              </p>

              <div className="relative aspect-[3/4] overflow-hidden bg-[#D8D8D8]">
                <Image
                  src={member.portrait}
                  alt={`Portrait of ${member.name}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Biography */}
            <div>
              <p className="text-xs font-bold tracking-widest">
                THE CAST / {member.number}
              </p>              
                <h1
                  className={`mt-5 font-black leading-[0.95] tracking-[-0.06em] ${
                    member.name.length > 8
                      ? "text-[clamp(2.5rem,4.2vw,4.8rem)]"
                      : "text-[clamp(3.5rem,7vw,7rem)]"
                  }`}
                >
                  {member.name}.
                </h1>
              <p className="mt-6 text-sm text-[#777777]">
                MEMBER PROFILE / PERSONAL ARCHIVE
              </p>

              {/* Biography from members.ts */}
              <div className="mt-12 border-t border-black">
                {biographyFields.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-2 gap-4 border-b border-black/20 py-4"
                  >
                    <span className="text-[11px] font-bold tracking-wide">
                      {label}
                    </span>

                    <span className="text-sm text-[#777777]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Creative Credits */}
          <section className="mt-24 border-t border-black pt-8">
            <div className="grid gap-8 md:grid-cols-2">

              <div>
                <p className="text-xs font-bold tracking-widest">
                  02 / BEYOND THE STAGE
                </p>

                <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
                  CREATIVE
                  <br />
                  CREDITS.
                </h2>
              </div>

              <div>
                <p className="text-base leading-relaxed text-[#666666]">
                  Explore selected creative contributions,
                  performances, and artistic projects.
                </p>

                {member.creativeCredits.length > 0 ? (
                  <div className="mt-8 border-t border-black/20">
                    {member.creativeCredits.map((credit, index) => (
                      <div
                        key={`${credit.title}-${index}`}
                        className="border-b border-black/20 py-5"
                      >
                        <h3 className="text-sm font-bold">
                          {credit.title}
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-[#777777]">
                          {credit.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-8 border-t border-black/20 py-5 text-sm text-[#777777]">
                    Creative credits will be added after verification.
                  </p>
                )}
              </div>

            </div>
          </section>

          {/* Candid Gallery */}
          <section className="mt-24 border-t border-black pt-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold tracking-widest">
                  03 / CANDID MOMENTS
                </p>

                <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
                  OFF THE RECORD.
                </h2>

                <p className="mt-4 text-sm text-[#777777]">
                  Unfiltered moments. Beyond the stage.
                </p>
              </div>

              <span className="flex items-center gap-2 text-xs font-bold">
                {member.name} / PERSONAL ARCHIVE
                <ArrowUpRight size={16} />
              </span>
            </div>

              {member.candidPhotos.length > 0 ? (
                <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {member.candidPhotos.map((photo, index) => {
                    const photoLabels = [
                      "LIFESTYLE / SNAPSHOT",
                      "CASUAL / OFF STAGE",
                      "SELFIE / PERSONAL MOMENT",
                      "CHILDHOOD / MEMBER",
                    ];

                    return (
                      <div
                        key={`${photo}-${index}`}
                        className="group relative aspect-[4/5] overflow-hidden bg-[#DFDFDF]"
                      >
                        {/* Photo */}
                        <Image
                          src={photo}
                          alt={`${member.name} candid photo ${index + 1}`}
                          fill
                          sizes="(max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Dark gradient for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

                        {/* Top label */}
                        <span className="absolute left-3 top-3 text-[9px] font-bold tracking-wide text-white">
                          {photoLabels[index] ?? "PERSONAL ARCHIVE"}
                        </span>

                        {/* Bottom label */}
                        <span className="absolute bottom-3 left-3 text-xs font-extrabold tracking-wide text-white">
                          {member.name} PHOTO {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="mt-10 border border-black/20 px-6 py-16 text-center">
                  <p className="text-sm text-[#777777]">
                    Candid photos coming soon.
                  </p>
                </div>
              )}

          </section>

          {/* Back Navigation */}
          <div className="mt-24 border-t border-black py-10">
            <Link
              href="/cast"
              className="inline-flex items-center gap-3 text-sm font-bold hover:text-[#2854F4]"
            >
              <ArrowLeft size={18} />
              EXPLORE ALL MEMBERS
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
