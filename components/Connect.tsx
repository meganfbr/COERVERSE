
import Link from "next/link";
import {
  Camera,
  Music2,
  Headphones,
  ArrowUpRight,
  Users,
} from "lucide-react";

const socials = [
  {
    name: "INSTAGRAM",
    description: "Visuals, photos & daily updates.",
    href: "https://www.instagram.com/cortis/",
    icon: Camera,
  },
  {
    name: "TIKTOK",
    description: "Short videos, trends & behind the scenes.",
    href: "https://www.tiktok.com/@cortis",
    icon: Music2,
  },
  {
    name: "SPOTIFY",
    description: "Listen to the music.",
    href: "https://open.spotify.com/search/CORTIS",
    icon: Headphones,
  },
  {
    name: "WEVERSE",
    description: "Connect with the community.",
    href: "https://weverse.io/",
    icon: Users,
  },
];

export default function Connect() {
  return (
    <section className="bg-[#F5F3EE] px-6 py-20 text-[#111111] md:px-12">
      <div className="mx-auto max-w-[1440px]">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#777777]">
            05 / STAY CONNECTED
          </p>

          <h2 className="mt-3 text-5xl font-extrabold tracking-tight md:text-7xl">
            CONNECT.
          </h2>

          <p className="mt-4 text-sm text-[#666666]">
            Stay in the loop. Follow the universe beyond this page.
          </p>
        </div>

        {/* Social cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[240px] flex-col justify-between border border-[#111111] bg-[#F5F3EE] p-6 transition-colors hover:bg-[#B7EF54]"
              >
                <div className="flex items-start justify-between">
                  <Icon size={30} strokeWidth={1.5} />
                  <ArrowUpRight
                    size={20}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold tracking-tight">
                    {social.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#555555]">
                    {social.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
