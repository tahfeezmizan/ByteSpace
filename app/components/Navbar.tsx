import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Creators", href: "/creators" },
  ];
  return (
    <nav className="w-full h-25 container mx-auto px-4 flex items-center justify-between z-50">
      <Link href="/">
        <Image
          src={logo}
          alt="ByteSpace"
          width={500}
          height={500}
          className="w-56 h-auto"
        />
      </Link>

      {/* Center Nav Links */}
      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              link.name === "Home"
                ? "text-white font-semibold text-base font-satoshi relative "
                : "text-white/80 font-medium text-base font-satoshi hover:text-white transition-colors"
            }
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <Link
          href="/sign-in"
          className="text-white font-medium text-sm font-satoshi hover:text-white/80 transition-colors"
        >
          Sign In
        </Link>
        <Link
          href="/join"
          className="text-white font-semibold text-sm font-satoshi hover:text-white/80 transition-colors"
        >
          Join Us
        </Link>
        {/* Shopping Bag Icon */}
        <button
          aria-label="Shopping bag"
          className="text-white hover:text-white/80 transition-colors"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
