
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[540px] overflow-hidden bg-[#E8E8E8]">
      <div className="relative mx-auto min-h-[540px] max-w-[1440px] px-6 py-12 md:px-12">
        {/* Editorial labels */}
        <div className="relative z-20 flex items-center justify-between text-[10px] font-bold tracking-wide">
          <span>INDEPENDENT DIGITAL FAN EDITORIAL</span>
          <span>ISSUE 001 / 2026</span>
        </div>

        {/* Group photo */}
        <div className="absolute inset-y-0 right-0 z-0 w-full md:w-[68%]">
          <Image
            src="/image/hero/cortis-group.svg"
            alt="CORTIS group editorial"
            fill
            priority
            className="object-contain object-right-bottom"
          />
        </div>

        {/* Headline */}
        <div className="relative z-10 mt-16 max-w-[620px]">
          <h1 className="text-[clamp(3.5rem,6.5vw,6.5rem)] leading-[0.95] font-extrabold tracking-[-0.055em] text-[#111111]">
            COLOR
            <br />
            OUTSIDE
            <br />
            <span className="text-[#2854F4]">
              THE LINES.
            </span>
          </h1>

          <p className="mt-5 text-sm font-bold">
            A DIGITAL FASHION EDITORIAL INSPIRED BY CORTIS.
          </p>

          <p className="mt-2 text-sm text-[#777777]">
            Music. Fashion. Youth. Five perspectives. One creative universe.
          </p>

          <Link
            href="/cast"
            className="mt-8 inline-flex bg-[#111111] px-6 py-4 text-xs font-bold text-white transition-colors hover:bg-[#2854F4]"
          >
            EXPLORE THE UNIVERSE ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
