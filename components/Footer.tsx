
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "THE CAST", href: "/cast" },
  { label: "THE RECORDS", href: "/records" },
  { label: "WATCH", href: "/watch" },
  { label: "LOOKBOOK", href: "/lookbook" },
  { label: "CONNECT", href: "/connect" },
];

const socials = [
  { label: "INSTAGRAM", href: "https://www.instagram.com/cortis/" },
  { label: "TIKTOK", href: "https://www.tiktok.com/@cortis" },
  { label: "SPOTIFY", href: "https://open.spotify.com/search/CORTIS" },
  { label: "WEVERSE", href: "https://weverse.io/" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] px-6 pt-16 pb-6 text-white md:px-12">
      <div className="mx-auto max-w-[1440px]">

        {/* Brand */}
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#B7EF54]">
              INDEPENDENT FAN EDITORIAL
            </p>

            <Link href="/" className="mt-4 flex items-center gap-4">
              <Image
                src="/image/Album/LOGO.svg"
                alt="CORTIS logo"
                width={60}
                height={60}
                className="object-contain"
              />

              <span className="text-4xl font-black tracking-tight md:text-6xl">
                COERVERSE
              </span>
            </Link>

            <p className="mt-4 text-sm text-[#AAAAAA]">
              A universe beyond the ordinary.
            </p>
          </div>

          <Link
            href="/"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 transition-colors hover:bg-[#B7EF54] hover:text-black"
            aria-label="Back to homepage"
          >
            <ArrowUpRight size={24} />
          </Link>
        </div>

        {/* Navigation */}
        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-white/20 pt-10 sm:grid-cols-2">
          <div>
            <h3 className="mb-5 text-xs font-bold tracking-widest">
              EXPLORE
            </h3>

            <div className="flex flex-col items-start gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[#AAAAAA] transition-colors hover:text-[#B7EF54]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold tracking-widest">
              FOLLOW
            </h3>

            <div className="flex flex-col items-start gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#AAAAAA] transition-colors hover:text-[#B7EF54]"
                >
                  {social.label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/20 pt-6 text-[10px] tracking-wide text-[#888888] md:flex-row">
          <p>© 2026 COERVERSE. FANMADE WITH LOVE.</p>

          <p className="max-w-[440px]">
            UNOFFICIAL FANMADE PROJECT. NOT AFFILIATED WITH
            CORTIS OR ITS MANAGEMENT.
          </p>
        </div>

      </div>
    </footer>
  );
}
