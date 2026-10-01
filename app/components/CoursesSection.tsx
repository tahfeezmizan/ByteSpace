"use client";

import { useState } from "react";
import CourseCard, { CourseCardProps } from "./CourseCard";

const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const AVATARS = [
  "https://i.pravatar.cc/40?img=1",
  "https://i.pravatar.cc/40?img=2",
  "https://i.pravatar.cc/40?img=3",
  "https://i.pravatar.cc/40?img=4",
  "https://i.pravatar.cc/40?img=5",
];

const COURSES: CourseCardProps[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&q=80",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    title: "Learn Figma from Basic",
    rating: 4.5,
    instructor: "purepearl studio",
    avatars: AVATARS,
    extraStudents: 26,
    level: "Beginner",
    price: 25,
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    title: "Build Digital Asset",
    rating: 4.5,
    instructor: "purepearl studio",
    avatars: AVATARS,
    extraStudents: 26,
    level: "Beginner",
    price: 25,
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    title: "the Power of Big Data",
    rating: 4.5,
    instructor: "purepearl studio",
    avatars: AVATARS,
    extraStudents: 26,
    level: "Beginner",
    price: 25,
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    title: "Balancing Productivity an...",
    rating: 4.5,
    instructor: "purepearl studio",
    avatars: AVATARS,
    extraStudents: 26,
    level: "Beginner",
    price: 25,
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    title: "Mastering Money Manage...",
    rating: 4.5,
    instructor: "purepearl studio",
    avatars: AVATARS,
    extraStudents: 26,
    level: "Beginner",
    price: 25,
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    title: "From Idea to Startup Succ...",
    rating: 4.5,
    instructor: "purepearl studio",
    avatars: AVATARS,
    extraStudents: 26,
    level: "Beginner",
    price: 25,
  },
];

const VISIBLE_CATEGORIES = 18;

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = showAll
    ? CATEGORIES
    : CATEGORIES.slice(0, VISIBLE_CATEGORIES);

  return (
    <section
      id="courses"
      className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-semibold font-poppins text-gray-900 mb-4">
            Discover Your Passion, <br className="hidden sm:block" />
            Build Your Skills
          </h2>
          <p className="font-satoshi text-gray-400 text-lg max-w-232.5 mx-auto leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        {/* Category filter */}
        <div className="w-full md:max-w-7xl px-4 mx-auto flex flex-wrap justify-center gap-x-4 gap-y-5 mb-14">
          {visibleCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-4 py-3 rounded-full text-base font-satoshi font-medium transition-all duration-200
                ${
                  activeCategory === cat
                    ? "bg-secondary text-gray-900"
                    : "bg-gray-100 text-gray-700 "
                }
              `}
            >
              {cat}
            </button>
          ))}
          {CATEGORIES.length && (
            <button
              onClick={() => setShowAll(true)}
              className="px-4 py-1.5 text-base font-satoshi font-medium text-primary"
            >
              + More
            </button>
          )}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {COURSES.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
