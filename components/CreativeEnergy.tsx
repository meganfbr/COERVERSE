
import Link from "next/link";

const videoId = "kqvSN7prFjE";

export default function CreativeEnergy() {
  return (
    <section className="overflow-hidden bg-[#B7EF54] text-[#111111]">
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12">

        {/* Section label */}
        <div className="mb-8 flex items-center justify-between border-b border-black/30 pb-4 text-[11px] font-bold tracking-widest">
          <span>06 / CREATIVE ENERGY</span>
          <span>COERVERSE / 2026</span>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">

          {/* YouTube Video */}
          <div className="relative aspect-video overflow-hidden bg-black">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}`}
              title="CORTIS Creative Energy Video"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          {/* Editorial headline */}
          <div>
            <p className="mb-5 text-xs font-bold tracking-[0.2em]">
              NO RULES. JUST EXPRESSION.
            </p>

            <h2 className="text-[clamp(3.5rem,7vw,7rem)] leading-[0.9] font-black tracking-[-0.06em]">
              CREATIVE
              <br />
              ENERGY.
            </h2>

            <p className="mt-8 max-w-[420px] text-base leading-relaxed">
              A space where music, fashion, and individuality
              collide. Different perspectives, one creative universe.
            </p>

            <Link
              href="/lookbook"
              className="mt-8 inline-flex items-center gap-4 border-b-2 border-black pb-2 text-xs font-extrabold tracking-wider transition-all hover:gap-6"
            >
              EXPLORE THE LOOKBOOK
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        {/* Bottom editorial line */}
        <div className="mt-14 border-t border-black/30 pt-5">
          <p className="text-xs font-semibold tracking-[0.15em]">
            COLOR OUTSIDE THE LINES. CREATE BEYOND EXPECTATIONS.
          </p>
        </div>

      </div>
    </section>
  );
}
