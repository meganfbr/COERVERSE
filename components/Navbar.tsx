
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "THE CAST", href: "/cast" },
  { label: "THE RECORDS", href: "/records" },
  { label: "WATCH", href: "/watch" },
  { label: "LOOKBOOK", href: "/lookbook" },
  { label: "CONNECT", href: "/connect" },
];

export default function Navbar() {
  return (
    <header className="w-full bg-[#0D0D0D] text-white">
      <nav className="mx-auto flex min-h-18 max-w-[1440px] items-center justify-between gap-6 px-6 md:px-12">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
        >
          <Image
            src="/image/Album/LOGO.svg"
            alt="CORTIS logo"
            width={44}
            height={44}
            className="object-contain"
          />

          <span className="text-xl font-extrabold tracking-tight">
            COERVERSE
          </span>
        </Link>

        {/* Navigation Menu */}
        <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] font-semibold tracking-wide transition-colors hover:text-[#B7EF54]"
            >
              {item.label}
            </Link>
          ))}
        </div>

      </nav>
    </header>
  );
}
