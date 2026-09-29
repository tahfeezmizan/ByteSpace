import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full container mx-auto flex items-center justify-between px-8 py-4 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        {/* ByteSpace "b" icon */}
        <div className="w-9 h-9 rounded-lg bg-[#C5F135] flex items-center justify-center flex-shrink-0">
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 2H11C13.7614 2 16 4.23858 16 7C16 8.48878 15.3729 9.83065 14.3604 10.7815C16.4562 11.6469 18 13.7083 18 16.1667C18 19.3883 15.3883 22 12.1667 22H3V2Z"
              fill="#1A1A2E"
            />
            <path
              d="M3 2H11C13.7614 2 16 4.23858 16 7C16 9.76142 13.7614 12 11 12H3V2Z"
              fill="#0D0D2B"
            />
          </svg>
        </div>
        <span className="text-white font-bold text-xl tracking-wide font-poppins">
          ByteSpace
        </span>
      </Link>

      {/* Center Nav Links */}
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="text-white font-semibold text-sm font-poppins relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white"
        >
          Home
        </Link>
        <Link
          href="/courses"
          className="text-white/80 font-medium text-sm font-poppins hover:text-white transition-colors"
        >
          Courses
        </Link>
        <Link
          href="/creators"
          className="text-white/80 font-medium text-sm font-poppins hover:text-white transition-colors"
        >
          Creators
        </Link>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <Link
          href="/sign-in"
          className="text-white font-medium text-sm font-poppins hover:text-white/80 transition-colors"
        >
          Sign In
        </Link>
        <Link
          href="/join"
          className="text-white font-semibold text-sm font-poppins hover:text-white/80 transition-colors"
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
