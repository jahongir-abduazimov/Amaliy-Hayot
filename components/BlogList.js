'use client';

import { useState, useMemo, useRef } from 'react';
import PostCard from './PostCard';

// Category mapping - maps existing categories to new display names
const categoryMapping = {
  'Hujjatlar': 'Hujjatlar va rasmiy xizmatlar (ID karta, pasport va boshqalar)',
  'Moliya': 'Moliya va bank xizmatlari',
  'Davlat xizmatlari': 'Davlat xizmatlari (my.gov.uz va boshqa portallar)',
  'Ta\'lim': 'Ta\'lim va kasbiy rivojlanish',
  'Salomatlik': 'Salomatlik va tibbiy xizmatlar',
  'Transport': 'Transport va yo\'l harakati',
  'Texnologiya': 'Texnologiya va internet',
};

// All available categories with icons
const categories = [
  {
    key: 'Hujjatlar',
    label: 'Hujjatlar',
    icon: '📄',
    color: 'blue'
  },
  {
    key: 'Davlat xizmatlari',
    label: 'Davlat xizmatlari',
    icon: '🏛️',
    color: 'purple'
  },
  {
    key: 'Moliya',
    label: 'Moliya',
    icon: '💰',
    color: 'emerald'
  },
  {
    key: 'Ta\'lim',
    label: 'Ta\'lim',
    icon: '🎓',
    color: 'blue'
  },
  {
    key: 'Salomatlik',
    label: 'Salomatlik',
    icon: '🏥',
    color: 'emerald'
  },
  {
    key: 'Transport',
    label: 'Transport',
    icon: '🚗',
    color: 'orange'
  },
  {
    key: 'Texnologiya',
    label: 'Texnologiya',
    icon: '💻',
    color: 'cyan'
  },
  {
    key: 'Uy-joy va Kommunal',
    label: 'Uy-joy va Kommunal',
    icon: '🏠',
    color: 'pink'
  },
  {
    key: 'Ish va Karyera',
    label: 'Ish va Karyera',
    icon: '💼',
    color: 'indigo'
  },
  {
    key: 'Oila va Bolalar',
    label: 'Oila va Bolalar',
    icon: '👨‍👩‍👧‍👦',
    color: 'amber'
  },
  {
    key: 'Jarimalar',
    label: 'Jarimalar',
    icon: '🏛️',
    color: 'purple'
  },
  // {
  //   key: 'Boshqa',
  //   label: 'Boshqa maqolalar',
  //   icon: '📌',
  //   color: 'gray'
  // },
];

const POSTS_PER_PAGE = 9;

export default function BlogList({ posts }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsListRef = useRef(null);

  // Filter posts by category
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) {
      return posts;
    }

    if (selectedCategory === 'Boshqa') {
      // Show posts that don't match any of the defined categories
      const definedCategories = ['Hujjatlar', 'Moliya', 'Davlat xizmatlari', 'Ta\'lim', 'Salomatlik', 'Transport', 'Texnologiya', 'Uy-joy va Kommunal', 'Ish va Karyera', 'Oila va Bolalar'];
      return posts.filter(post => !definedCategories.includes(post.category));
    }

    return posts.filter(post => post.category === selectedCategory);
  }, [posts, selectedCategory]);

  // Paginate filtered posts
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, endIndex);
  }, [filteredPosts, currentPage]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  // Scroll to posts list
  const scrollToPostsList = () => {
    if (postsListRef.current) {
      postsListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle category selection
  const handleCategoryClick = (categoryKey) => {
    if (categoryKey === selectedCategory) {
      // If clicking the same category, deselect it
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryKey);
    }
    setCurrentPage(1);
  };

  // Get category count
  const getCategoryCount = (categoryKey) => {
    if (categoryKey === 'Boshqa') {
      const definedCategories = ['Hujjatlar', 'Moliya', 'Davlat xizmatlari', 'Ta\'lim', 'Salomatlik', 'Transport', 'Texnologiya', 'Uy-joy va Kommunal', 'Ish va Karyera', 'Oila va Bolalar'];
      return posts.filter(post => !definedCategories.includes(post.category)).length;
    }
    return posts.filter(post => post.category === categoryKey).length;
  };

  // Color classes for category buttons
  const colorClasses = {
    blue: {
      base: 'bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200',
      active: 'bg-[#0EA5E9] text-white border-[#0EA5E9]',
    },
    emerald: {
      base: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-200',
      active: 'bg-[#10B981] text-white border-[#10B981]',
    },
    purple: {
      base: 'bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-200',
      active: 'bg-[#8B5CF6] text-white border-[#8B5CF6]',
    },
    orange: {
      base: 'bg-orange-50 text-orange-700 hover:bg-orange-100 border-orange-200',
      active: 'bg-[#F97316] text-white border-[#F97316]',
    },
    cyan: {
      base: 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100 border-cyan-200',
      active: 'bg-[#06B6D4] text-white border-[#06B6D4]',
    },
    gray: {
      base: 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200',
      active: 'bg-gray-600 text-white border-gray-600',
    },
    pink: {
      base: 'bg-pink-50 text-pink-700 hover:bg-pink-100 border-pink-200',
      active: 'bg-[#EC4899] text-white border-[#EC4899]',
    },
    indigo: {
      base: 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-200',
      active: 'bg-[#6366F1] text-white border-[#6366F1]',
    },
    amber: {
      base: 'bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200',
      active: 'bg-[#F59E0B] text-white border-[#F59E0B]',
    },
  };

  return (
    <>
      {/* Category Filters */}
      <section className="bg-white pb-8 md:pb-12 border-b border-neutral-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6">
            {/* Category Title */}
            <div className="text-center">
              <h2 className="text-lg md:text-xl font-semibold text-neutral-text-dark mb-2">
                Kategoriyalar
              </h2>
              <p className="text-sm text-neutral-text-gray">
                Kategoriyani tanlang yoki barcha maqolalarni ko'ring
              </p>
            </div>

            {/* Category Buttons */}
            <div className="w-full">
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                {/* All Categories Button */}
                <button
                  onClick={() => handleCategoryClick(null)}
                  className={`px-4 py-2.5 md:px-6 md:py-3 rounded-xl border-2 font-semibold text-sm md:text-base transition-all duration-200 smooth cursor-pointer flex items-center gap-2 ${selectedCategory === null
                    ? 'bg-[#0EA5E9] text-white border-[#0EA5E9] shadow-lg shadow-[#0EA5E9]/20'
                    : 'bg-white text-neutral-text-dark border-neutral-border hover:border-[#0EA5E9] hover:bg-blue-50'
                    }`}
                >
                  <span>📚</span>
                  <span>Barchasi</span>
                  <span className="px-2 py-0.5 rounded-full text-xs bg-white/20 text-inherit">
                    {posts.length}
                  </span>
                </button>

                {/* Category Buttons */}
                {categories.map((category) => {
                  const count = getCategoryCount(category.key);
                  const isActive = selectedCategory === category.key;
                  const colorClass = colorClasses[category.color];

                  return (
                    <button
                      key={category.key}
                      onClick={() => handleCategoryClick(category.key)}
                      className={`px-4 py-2.5 md:px-6 md:py-3 rounded-xl border-2 font-semibold text-sm md:text-base transition-all duration-200 smooth cursor-pointer flex items-center gap-2 ${isActive
                        ? `${colorClass.active} shadow-lg`
                        : `${colorClass.base}`
                        }`}
                    >
                      <span>{category.icon}</span>
                      <span>{category.label}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${isActive
                        ? 'bg-white/20 text-inherit'
                        : 'bg-white/60 text-inherit'
                        }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Results count */}
            <div className="mt-4 text-center">
              <p className="text-neutral-text-gray text-sm md:text-base">
                {selectedCategory ? (
                  <>
                    <span className="font-semibold text-neutral-text-dark">{filteredPosts.length}</span> ta maqola topildi
                  </>
                ) : (
                  <>
                    Jami <span className="font-semibold text-neutral-text-dark">{posts.length}</span> ta maqola
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      {paginatedPosts.length > 0 ? (
        <section ref={postsListRef} className="bg-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {paginatedPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 md:py-20">
            <div className="inline-block p-4 bg-neutral-light-gray rounded-2xl mb-4">
              <svg className="w-12 h-12 text-neutral-text-light mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-lg text-neutral-text-gray mb-2">
              {selectedCategory ? 'Bu kategoriyada maqolalar topilmadi' : 'Hozircha maqolalar mavjud emas'}
            </p>
            <p className="text-sm text-neutral-text-light">
              {selectedCategory ? 'Boshqa kategoriyalarni ko\'rib chiqing' : 'Tez orada yangi maqolalar qo\'shiladi'}
            </p>
          </div>
        </section>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="bg-white py-8 md:py-12 border-t border-neutral-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2">
              {/* Previous button */}
              <button
                onClick={() => {
                  const newPage = Math.max(1, currentPage - 1);
                  setCurrentPage(newPage);
                  setTimeout(() => scrollToPostsList(), 0);
                }}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-semibold text-sm md:text-base transition-all duration-200 ${currentPage === 1
                  ? 'bg-neutral-light-gray text-neutral-text-light cursor-not-allowed'
                  : 'bg-[#0EA5E9] text-white hover:bg-[#0284C7] smooth cursor-pointer'
                  }`}
              >
                ← Oldingi
              </button>

              {/* Page numbers */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current
                  const showPage =
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1);

                  if (!showPage) {
                    // Show ellipsis
                    if (page === currentPage - 2 || page === currentPage + 2) {
                      return (
                        <span key={page} className="px-2 text-neutral-text-light">
                          ...
                        </span>
                      );
                    }
                    return null;
                  }

                  return (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        setTimeout(() => scrollToPostsList(), 0);
                      }}
                      className={`px-4 py-2 rounded-lg font-semibold text-sm md:text-base transition-all duration-200 cursor-pointer ${currentPage === page
                        ? 'bg-[#0EA5E9] text-white'
                        : 'bg-neutral-light-gray text-neutral-text-dark hover:bg-neutral-border smooth'
                        }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              {/* Next button */}
              <button
                onClick={() => {
                  const newPage = Math.min(totalPages, currentPage + 1);
                  setCurrentPage(newPage);
                  setTimeout(() => scrollToPostsList(), 0);
                }}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-semibold text-sm md:text-base transition-all duration-200 ${currentPage === totalPages
                  ? 'bg-neutral-light-gray text-neutral-text-light cursor-not-allowed'
                  : 'bg-[#0EA5E9] text-white hover:bg-[#0284C7] smooth cursor-pointer'
                  }`}
              >
                Keyingi →
              </button>
            </div>

            {/* Page info */}
            <div className="mt-4 text-center">
              <p className="text-sm text-neutral-text-gray">
                Sahifa {currentPage} / {totalPages}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
