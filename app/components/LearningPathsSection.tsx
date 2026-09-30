import {
  PenTool,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
  type LucideIcon,
} from "lucide-react";

interface PathCategory {
  label: string;
  icon: LucideIcon;
}

const PATHS: PathCategory[] = [
  { label: "Design", icon: PenTool },
  { label: "Development", icon: Code2 },
  { label: "IT & Software", icon: Laptop },
  { label: "Business", icon: Building2 },
  { label: "Marketing", icon: Megaphone },
  { label: "Photography", icon: Camera },
];

export default function LearningPathsSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="font-satoshi text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {PATHS.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="group flex flex-col items-start gap-6 p-5 rounded-2xl border border-gray-200 bg-white hover:border-secondary hover:shadow-sm transition-all duration-200"
            >
              {/* Icon circle */}
              <div className="flex items-center justify-center size-14 rounded-full bg-secondary shrink-0">
                <Icon className="size-6 text-gray-900" strokeWidth={2} />
              </div>

              {/* Label */}
              <span className="font-poppins font-semibold text-base text-gray-900 text-left leading-snug">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
