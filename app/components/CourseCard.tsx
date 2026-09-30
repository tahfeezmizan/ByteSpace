import Image from "next/image";
import { Star, BarChart2, ChartNoAxesColumnIncreasing } from "lucide-react";

export interface CourseCardProps {
  id: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  title: string;
  rating: number;
  instructor: string;
  avatars: string[];
  extraStudents: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  priceSuffix?: string;
}

export default function CourseCard({
  image,
  lessons,
  duration,
  comments,
  title,
  rating,
  instructor,
  avatars,
  extraStudents,
  level,
  price,
  priceSuffix = "/lifetime",
}: CourseCardProps) {
  return (
    <article className="p-4.5 bg-white rounded-2xl border border-gray-300 overflow-hidden flex flex-col">
      <div className="relative  w-full aspect-[16/10] rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
        />

        <div className="absolute bottom-4 left-0 right-0 flex items-center gap-2 px-2 lg:px-4">
          <span
            className="text-xs font-medium font-satoshi text-[#4F4F4F]
    bg-white/55 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.08)]
     px-2 lg:px-4 py-1 lg:py-2 rounded-full"
          >
            {lessons} Lessons
          </span>
          <span
            className="text-xs font-medium font-satoshi text-[#4F4F4F]
    bg-white/55 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.08)]
     px-2 lg:px-4 py-1 lg:py-2 rounded-full"
          >
            {duration}
          </span>
          <span
            className="text-xs font-medium font-satoshi text-[#4F4F4F]
    bg-white/55 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.08)]
     px-2 lg:px-4 py-1 lg:py-2 rounded-full"
          >
            {comments} Comments
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-poppins font-semibold text-xl leading-[120%] text-gray-900 line-clamp-2 flex-1">
            {title}
          </h3>

          <div className="flex items-center gap-1 shrink-0">
            <span className="font-satoshi text-lg font-medium text-gray-700">
              {rating.toFixed(1)}
            </span>
            <Star className="size-4.5 fill-gray-300 text-gray-300" />
          </div>
        </div>

        <p className="font-satoshi text-xs">
          by <span className="text-primary">{instructor}</span>
        </p>

        <div className="flex items-center gap-4 my-4">
          <div className="flex items-center gap-1.5 px-4 py-2 bg-gray-200 rounded-full">
            <ChartNoAxesColumnIncreasing className="size-3.5 text-gray-700" />
            <span className="text-xs font-medium font-satoshi text-gray-700">
              {level}
            </span>
          </div>

          {/* Avatar stack */}
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {avatars.slice(0, 4).map((src, i) => (
                <div
                  key={i}
                  className="relative size-9 rounded-full overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`Student avatar ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="30px"
                  />
                </div>
              ))}
            </div>
            {extraStudents > 0 && (
              <button className="bg-secondary p-2.5 -ml-3 z-10 text-xs text-satoshi font-medium rounded-full">
                {extraStudents}+
              </button>
            )}
          </div>
        </div>

        <div className=" ">
          <p className="text-primary font-poppins font-bold text-xl">
            ${price}
            <span className="text-xs font-satoshi font-normal text-gray-700 ml-0.5">
              {priceSuffix}
            </span>
          </p>
        </div>
      </div>
    </article>
  );
}
