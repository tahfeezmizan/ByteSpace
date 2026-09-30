import Image from "next/image";
import Navbar from "./Navbar";
import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-primary overflow-hidden flex flex-col items-center">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "130px 130px",
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* left site shapes */}
      <div className="absolute top-55 -left-22.5 z-10  ">
        <Image
          src="/images/home/decorative/lime-ribbon.png"
          alt=""
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="absolute  bottom-90 left-70">
        <Image
          src="/images/home/decorative/white-ribbon.png"
          alt=""
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      <div className="absolute -bottom-4 left-40 z-30 ">
        <Image
          src="/images/home/decorative/white-ring.png"
          alt=""
          width={380}
          height={380}
          className="object-contain"
        />
      </div>

      {/* right shapes */}
      <div className="absolute top-50 -right-35 z-10 ">
        <Image
          src="/images/home/decorative/lime-blob.png"
          alt=""
          width={400}
          height={400}
          className="object-contain "
        />
      </div>

      <div className="absolute bottom-90 right-60 z-10 ">
        <Image
          src="/images/home/decorative/white-triangle.png"
          alt=""
          width={200}
          height={200}
          className="object-contain "
        />
      </div>

      <div className="absolute -bottom-4 right-28 z-30 ">
        <Image
          src="/images/home/decorative/white-ribbon.png"
          alt=""
          width={380}
          height={380}
          className="object-contain -scale-x-100 -rotate-45"
        />
      </div>

      {/* Heading  */}
      <div className="relative z-20 flex flex-col items-center text-center pt-16 px-6 w-full ">
        <h1 className="text-[80px] font-poppins font-semibold text-white leading-[120%] mb-8">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>
        <p className="text-lg font-satoshi font-light! text-gray-300 mb-12 ">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="flex items-center w-full max-w-145 gap-3">
          <div className="flex items-center w-full bg-white px-6 py-3.5 gap-1.5 rounded-full">
            <Search className="text-gray-500 size-5" />
            <input
              id="hero-search"
              type="text"
              placeholder="Course, topic, creator"
              className="flex-1 bg-transparent outline-none font-satoshi text-lg placeholder:text-gray-500"
            />
          </div>
          <button className=" bg-secondary text-lg text-gray-800 px-6 py-3.5 gap-1.5 rounded-full font-satoshi font-semibold ">
            Search
          </button>
        </div>
      </div>

      <div className="relative z-20 w-full max-w-5xl mx-auto flex justify-center mt-8 pb-0">
        {/* limb circle */}
        <div className="absolute -bottom-30 left-1/2 -translate-x-1/2 w-325 pointer-events-none z-0">
          <Image
            src="/images/home/decorative/hero-green-circle.png"
            alt=""
            width={900}
            height={500}
            className="object-contain w-full"
          />
        </div>

        <div className="relative z-10 flex justify-center">
          <Image
            src="/images/home/hero-student.png"
            alt="Student with headphones and laptop"
            width={720}
            height={500}
            className=" object-contain relative z-10"
          />
        </div>

        {/* UI/UX Design  card */}
        <div className="absolute left-[10%] top-[25%] z-30 ">
          <Image
            src="/images/home/ui-ux-layout.png"
            alt="UI/UX Design - 200 Courses · 1000+ Students"
            width={500}
            height={70}
            className="object-contain w-[230px]"
          />
        </div>

        {/* ── Floating Card: Happy Students ── */}
        <div className="absolute left-[6%] bottom-[10%] z-30 ">
          <Image
            src="/images/home/student-layout.png"
            alt="UI/UX Design - 200 Courses · 1000+ Students"
            width={500}
            height={70}
            className="object-contain w-[270px]"
          />
        </div>

        {/* ── Floating Card: Learning Progress ── */}
        <div className="absolute right-[15%] top-[21%] z-30">
          <Image
            src="/images/home/progress-layout.png"
            alt="Learning Progress - 55%"
            width={1000}
            height={1000}
            className="object-contain w-[285px]"
          />
        </div>
      </div>
    </section>
  );
}
