import Image from "next/image";

const logos = [
  "/images/partner-logo/Frame.png",
  "/images/partner-logo/Frame-1.png",
  "/images/partner-logo/Frame-2.png",
  "/images/partner-logo/Frame-3.png",
  "/images/partner-logo/Frame-4.png",
];

export default function PartnersStrip() {
  return (
    <div className="w-full py-14 bg-gray-100 overflow-hidden">
      <div className="container mx-auto overflow-hidden">
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {[...logos, ...logos].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-10"
              style={{ width: "20vw" }}
            >
              <Image
                src={src}
                alt={`Partner logo ${(i % logos.length) + 1}`}
                width={140}
                height={48}
                className="object-contain h-10 w-auto opacity-60 grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
