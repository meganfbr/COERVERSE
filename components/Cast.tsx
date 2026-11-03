
import Image from "next/image";
import Link from "next/link";

const members = [
  {
    name: "MARTIN",
    image: "/image/members/MARTIN02.png",
    href: "/cast/martin",
  },
  {
    name: "JAMES",
    image: "/image/members/JAMES2.png",
    href: "/cast/james",
  },
  {
    name: "JUHOON",
    image: "/image/members/JUHOON2.png",
    href: "/cast/juhoon",
  },
  {
    name: "SEONGHYEON",
    image: "/image/members/SEAN02.png",
    href: "/cast/seonghyeon",
  },
  {
    name: "KEONHO",
    image: "/image/members/KEONHO2.png",
    href: "/cast/keonho",
  },
];

export default function Cast() {
  return (
    <section className="bg-[#F5F3EE] px-6 py-20 text-[#111111] md:px-12">
      <div className="mx-auto max-w-[1440px]">

        {/* Section heading */}
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#777777]">
              04 / THE PEOPLE
            </p>

            <h2 className="mt-3 text-5xl font-extrabold tracking-tight md:text-7xl">
              THE CAST.
            </h2>

            <p className="mt-4 text-sm text-[#666666]">
              Five individuals. One creative universe.
            </p>
          </div>

          <Link
            href="/cast"
            className="shrink-0 border-b border-black pb-1 text-xs font-bold hover:text-[#2854F4]"
          >
            MEET THE CAST ↗
          </Link>
        </div>

        {/* Member cards */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          {members.map((member, index) => (
            <Link
              href={member.href}
              key={member.name}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#D6D6D6]">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute bottom-3 left-3 bg-[#B7EF54] px-2 py-1 text-[10px] font-bold text-black">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between gap-2">
                <h3 className="text-sm font-extrabold tracking-wide md:text-base">
                  {member.name}
                </h3>

                <span className="text-lg transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
