import Image from "next/image";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#1832F5] overflow-hidden flex flex-col items-center">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* ──  shapes ── */}

      {/* Top-left lime blob */}
      <div className="absolute top-[90px] left-[-30px] z-10 w-[180px] pointer-events-none">
        <Image
          src="/images/home/decorative/lime-blob.png"
          alt=""
          width={200}
          height={220}
          className="object-contain"
        />
      </div>

      {/* Bottom-left white ring */}
      <div className="absolute bottom-[60px] left-[40px] z-10 w-[130px] pointer-events-none">
        <Image
          src="/images/home/decorative/white-ring.png"
          alt=""
          width={140}
          height={140}
          className="object-contain"
        />
      </div>

      {/* Left white ribbon (zigzag) */}
      <div className="absolute top-[44%] left-[120px] z-10 w-[70px] pointer-events-none">
        <Image
          src="/images/home/decorative/white-ribbon.png"
          alt=""
          width={70}
          height={90}
          className="object-contain"
        />
      </div>

      {/* Top-right lime blob (cylinder) */}
      <div className="absolute top-[55px] right-[-10px] z-10 w-[120px] pointer-events-none">
        <Image
          src="/images/home/decorative/lime-blob.png"
          alt=""
          width={130}
          height={150}
          className="object-contain scale-x-[-1] rotate-[30deg]"
        />
      </div>

      {/* Right white ribbon */}
      <div className="absolute top-[44%] right-[110px] z-10 w-[65px] pointer-events-none">
        <Image
          src="/images/home/decorative/white-ribbon.png"
          alt=""
          width={65}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Bottom-right lime ribbon */}
      <div className="absolute bottom-[30px] right-[20px] z-10 w-[110px] pointer-events-none">
        <Image
          src="/images/home/decorative/lime-ribbon.png"
          alt=""
          width={120}
          height={140}
          className="object-contain"
        />
      </div>

      {/* White triangle */}
      <div className="absolute top-[49%] right-[190px] z-10 pointer-events-none">
        <svg width="76" height="86" viewBox="0 0 76 86" fill="none">
          <polygon points="0,86 76,86 38,0" fill="white" />
        </svg>
      </div>

      {/* ── Hero Text ── */}
      <div className="relative z-20 flex flex-col items-center text-center pt-40 px-6 w-full ">
        <h1 className="text-7xl font-poppins font-semibold text-white leading-[120%] mb-8">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>
        <p className="font-satoshi text-white/75 text-[15px] max-w-xl mb-10 leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-full shadow-lg w-full max-w-[520px] pl-5 pr-2 py-2 gap-3">
          <svg
            className="text-gray-400 flex-shrink-0"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            id="hero-search"
            type="text"
            placeholder="Course, topic, creator"
            className="flex-1 bg-transparent outline-none text-gray-700 font-satoshi text-sm placeholder:text-gray-400"
          />
          <button
            id="hero-search-btn"
            className="bg-[#C5F135] text-[#0D0D2B] font-poppins font-semibold text-sm px-7 py-2.5 rounded-full hover:bg-[#b8e020] active:scale-95 transition-all flex-shrink-0"
          >
            Search
          </button>
        </div>
      </div>

      {/* ── Hero Image + Green Circle + Floating Cards ── */}
      <div className="relative z-20 w-full max-w-5xl mx-auto flex justify-center mt-10 px-6 pb-0">
        {/* Green background semicircle */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[480px] pointer-events-none z-0">
          <Image
            src="/images/home/decorative/hero-green-circle.png"
            alt=""
            width={480}
            height={480}
            className="object-contain w-full"
          />
        </div>

        {/* Student image */}
        <Image
          src="/images/home/hero-student.png"
          alt="Student with headphones and laptop"
          width={400}
          height={460}
          className="object-contain relative z-10"
          priority
        />

        {/* ── Floating Card: UI/UX Design ── */}
        <div className="absolute left-[6%] top-[6%] z-30 bg-white rounded-2xl shadow-2xl p-0 overflow-hidden">
          <Image
            src="/images/home/ui-ux-layout.png"
            alt="UI/UX Design - 200 Courses · 1000+ Students"
            width={240}
            height={70}
            className="object-contain w-[240px]"
          />
        </div>

        {/* ── Floating Card: Happy Students ── */}
        <div className="absolute left-[2%] bottom-[10%] z-30 bg-white rounded-2xl shadow-2xl px-4 pt-3 pb-3.5 min-w-[220px]">
          <p className="font-poppins font-bold text-[#0D0D2B] text-sm mb-1">
            Happy Students
          </p>
          <div className="flex items-center gap-1 mb-2.5">
            <span className="font-satoshi font-semibold text-xs text-gray-700">
              4.5
            </span>
            <span className="font-satoshi text-xs text-gray-400">(240)</span>
            <svg
              className="ml-0.5"
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="#FBBF24"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          {/* Avatar stack */}
          <div className="flex items-center">
            {[
              { color: "bg-purple-500", letter: "A" },
              { color: "bg-orange-400", letter: "B" },
              { color: "bg-teal-500", letter: "C" },
              { color: "bg-blue-500", letter: "D" },
              { color: "bg-pink-500", letter: "E" },
            ].map(({ color, letter }, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full border-2 border-white ${color} flex items-center justify-center text-white text-[10px] font-bold font-poppins ${
                  i > 0 ? "-ml-2" : ""
                }`}
              >
                {letter}
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-[#C5F135] flex items-center justify-center -ml-2">
              <span className="text-[#0D0D2B] text-[9px] font-bold font-poppins leading-none">
                2K+
              </span>
            </div>
          </div>
        </div>

        {/* ── Floating Card: Learning Progress ── */}
        <div className="absolute right-[4%] top-[10%] z-30 bg-white rounded-2xl shadow-2xl p-0 overflow-hidden">
          <Image
            src="/images/home/progress-layout.png"
            alt="Learning Progress - 55%"
            width={210}
            height={90}
            className="object-contain w-[210px]"
          />
        </div>
      </div>
    </section>
  );
}
