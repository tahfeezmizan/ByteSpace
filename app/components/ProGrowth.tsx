import Image from "next/image";

export default function ProGrowth() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 lg:py-28 px-4 sm:px-8 lg:px-16">
      {/* Ambient background glows */}
      <div
        className="absolute top-0 left-1/4 -translate-x-1/2 -translate-y-1/4 w-[580px] h-[580px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(235, 253, 104, 0.28) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
      />
      <div
        className="absolute top-1/4 right-0 translate-x-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(219, 234, 254, 0.4) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-14">
          {/* Left Column: Heading, description, stats */}
          <div className="flex flex-col space-y-6 lg:max-w-xl">
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold font-poppins text-gray-900 leading-[1.18] tracking-tight">
              Your Path to Professional <br className="hidden sm:inline" />
              Growth Starts Here!
            </h2>

            <p className="text-gray-500 font-satoshi text-base sm:text-lg leading-relaxed">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-10 sm:gap-14 pt-4 sm:pt-6">
              <div>
                <h3 className="text-primary font-poppins font-bold text-3xl sm:text-4xl tracking-tight">
                  12K
                </h3>
                <p className="font-satoshi text-gray-500 text-sm sm:text-base font-normal mt-1">
                  Students
                </p>
              </div>

              <div>
                <h3 className="text-primary font-poppins font-bold text-3xl sm:text-4xl tracking-tight">
                  70+
                </h3>
                <p className="font-satoshi text-gray-500 text-sm sm:text-base font-normal mt-1">
                  Courses
                </p>
              </div>

              <div>
                <h3 className="text-primary font-poppins font-bold text-3xl sm:text-4xl tracking-tight">
                  16
                </h3>
                <p className="font-satoshi text-gray-500 text-sm sm:text-base font-normal mt-1">
                  Creators
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Composite Layered Artwork */}
          <div className="relative w-full max-w-[560px] mx-auto flex items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[560px]">
            {/* 1. Background Course Card */}
            <div className="absolute left-0 sm:left-2 top-2 sm:top-6 w-[260px] sm:w-[310px] lg:w-[335px] z-10 filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/Course_Card.png"
                alt="Course Card"
                width={360}
                height={390}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* 2. Background Lime Spring/Ribbon */}
            <div className="absolute right-2 sm:right-6 top-6 sm:top-10 w-[110px] sm:w-[130px] lg:w-[145px] z-10 pointer-events-none select-none">
              <Image
                src="/images/home/decorative/lime-ribbon.png"
                alt=""
                width={200}
                height={200}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* 3. Hero Student Holding Laptop */}
            <div className="relative z-20 w-[340px] sm:w-[410px] lg:w-[445px] translate-x-6 sm:translate-x-12 translate-y-3 sm:translate-y-5">
              <Image
                src="/images/home/hero-student.png"
                alt="Student with headphones and laptop"
                width={520}
                height={480}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* 4. Foreground Floating Progress Card */}
            <div className="absolute right-0 sm:right-2 top-[48%] -translate-y-1/2 z-30 w-[185px] sm:w-[215px] lg:w-[235px] filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/home/progress-layout.png"
                alt="Learning Progress 55%"
                width={285}
                height={160}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
