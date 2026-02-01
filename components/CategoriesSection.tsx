"use client";

import { useState } from "react";

interface Post {
  slug: string;
  category?: string;
  [key: string]: any;
}

interface CategoriesSectionProps {
  posts?: Post[];
}

export default function CategoriesSection({
  posts = [],
}: CategoriesSectionProps) {
  // Extract unique categories from posts
  const categoriesMap = posts.reduce(
    (acc, post) => {
      if (post.category) {
        acc[post.category] = (acc[post.category] || 0) + 1;
      }
      return acc;
    },
    {} as Record<string, number>,
  );

  const categories = [
    {
      name: "Hujjatlar",
      icon: "📄",
      color: "blue",
      count: categoriesMap["Hujjatlar"] || 0,
    },
    {
      name: "Moliya",
      icon: "💰",
      color: "emerald",
      count: categoriesMap["Moliya"] || 0,
    },
    {
      name: "Xizmatlar",
      icon: "🏛️",
      color: "purple",
      count: categoriesMap["Xizmatlar"] || 0,
    },
    {
      name: "Transport",
      icon: "🚗",
      color: "coral",
      count: categoriesMap["Transport"] || 0,
    },
    {
      name: "Salomatlik",
      icon: "🏥",
      color: "emerald",
      count: categoriesMap["Salomatlik"] || 0,
    },
    {
      name: "Ta’lim",
      icon: "🎓",
      color: "blue",
      count: categoriesMap["Ta’lim"] || 0,
    },
    {
      name: "Uy-joy va Kommunal",
      icon: "🏠",
      color: "pink",
      count: categoriesMap["Uy-joy va Kommunal"] || 0,
    },
    {
      name: "Ish va Karyera",
      icon: "💼",
      color: "indigo",
      count: categoriesMap["Ish va Karyera"] || 0,
    },
    {
      name: "Oila va Bolalar",
      icon: "👨‍👩‍👧‍👦",
      color: "amber",
      count: categoriesMap["Oila va Bolalar"] || 0,
    },
    {
      name: "Jarimalar",
      icon: "🏛️",
      color: "purple",
      count: categoriesMap["Jarimalar"] || 0,
    },
  ].filter((cat) => cat.count > 0 || categoriesMap[cat.name] === undefined); // Show all if no posts yet

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const colorClasses = {
    blue: {
      base: "bg-blue-50 text-blue-700 hover:bg-blue-100",
      active: "bg-[#0EA5E9] text-white",
    },
    emerald: {
      base: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
      active: "bg-[#10B981] text-white",
    },
    purple: {
      base: "bg-purple-50 text-purple-700 hover:bg-purple-100",
      active: "bg-[#8B5CF6] text-white",
    },
    coral: {
      base: "bg-orange-50 text-orange-700 hover:bg-orange-100",
      active: "bg-[#F97316] text-white",
    },
    pink: {
      base: "bg-pink-50 text-pink-700 hover:bg-pink-100",
      active: "bg-[#EC4899] text-white",
    },
    indigo: {
      base: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
      active: "bg-[#6366F1] text-white",
    },
    amber: {
      base: "bg-amber-50 text-amber-700 hover:bg-amber-100",
      active: "bg-[#F59E0B] text-white",
    },
  };

  return (
    <section className="bg-neutral-off-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-text-dark mb-4">
            Kategoriyalar
          </h2>
          <p className="text-lg text-neutral-text-gray">
            Qiziqan mavzularingizni toping
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const colors =
              colorClasses[category.color as keyof typeof colorClasses] ||
              colorClasses.blue;
            const isActive = activeCategory === category.name;

            return (
              <button
                key={category.name}
                onClick={() =>
                  setActiveCategory(isActive ? null : category.name)
                }
                className={`px-6 py-3 rounded-full font-semibold smooth cursor-pointer ${
                  isActive ? colors.active : colors.base
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
                {category.count > 0 && (
                  <span
                    className={`ml-2 ${isActive ? "opacity-90" : "opacity-70"}`}
                  >
                    ({category.count})
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
