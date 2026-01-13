'use client';

import { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

export default function SearchModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [allPosts, setAllPosts] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Fetch posts from API when modal opens
    if (isOpen) {
      fetch('/api/posts')
        .then(res => res.json())
        .then(data => setAllPosts(data))
        .catch(() => setAllPosts([]));
    }
  }, [isOpen]);

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    const query = searchQuery.toLowerCase().trim();
    return allPosts.filter(post => {
      const title = (post.title || '').toLowerCase();
      const description = (post.description || '').toLowerCase();
      const category = (post.category || '').toLowerCase();

      return title.includes(query) ||
        description.includes(query) ||
        category.includes(query);
    }).slice(0, 10); // Limit to 10 results
  }, [allPosts, searchQuery]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 pb-4 bg-black/50 backdrop-blur-sm m-0"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="p-6 border-b border-neutral-border">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-text-light"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Maqolalarni qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-neutral-border focus:border-[#0EA5E9] focus:outline-none text-lg bg-white text-neutral-text-dark"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-text-light hover:text-neutral-text-dark cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {searchQuery.trim() && filteredPosts.length > 0 ? (
            <div className="p-2">
              <div className="px-4 py-2 text-sm text-neutral-text-light">
                {filteredPosts.length} ta natija topildi
              </div>
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  onClick={onClose}
                  className="block px-4 py-3 hover:bg-[#F8FAFC] rounded-xl smooth group"
                >
                  <div className="font-semibold text-neutral-text-dark group-hover:text-[#0EA5E9] smooth mb-1">
                    {post.title}
                  </div>
                  {post.description && (
                    <div className="text-sm text-neutral-text-gray line-clamp-2">
                      {post.description}
                    </div>
                  )}
                  {post.category && (
                    <div className="mt-2 inline-block px-2 py-1 text-xs font-semibold bg-[#0EA5E9]/10 text-[#0EA5E9] rounded-lg">
                      {post.category}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          ) : searchQuery.trim() && filteredPosts.length === 0 ? (
            <div className="p-12 text-center">
              <div className="inline-block p-4 bg-neutral-light-gray rounded-2xl mb-4">
                <svg className="w-12 h-12 text-neutral-text-light mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-lg text-neutral-text-gray mb-2">Natija topilmadi</p>
              <p className="text-sm text-neutral-text-light">Boshqa kalit so'zlar bilan qidirib ko'ring</p>
            </div>
          ) : (
            <div className="p-12 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-lg text-neutral-text-gray">Maqolalarni qidirish</p>
              <p className="text-sm text-neutral-text-light mt-2">Qidiruv so'zini kiriting</p>
            </div>
          )}
        </div>

        {/* Footer */}
        {/* <div className="p-4 border-t border-neutral-border bg-neutral-off-white">
          <div className="flex items-center justify-between text-sm text-neutral-text-light">
            <span>ESC tugmasini bosing yoki tashqariga bosing</span>
            <div className="flex items-center gap-4">
              <kbd className="px-2 py-1 bg-white border border-neutral-border rounded text-xs">↑↓</kbd>
              <span>Navigatsiya</span>
              <kbd className="px-2 py-1 bg-white border border-neutral-border rounded text-xs">Enter</kbd>
              <span>Ochish</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}