import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import CategoriesSection from '@/components/CategoriesSection';
import NewsletterSection from '@/components/NewsletterSection';
import StatsSection from '@/components/StatsSection';
import SearchButton from '@/components/SearchButton';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Amaliy Hayot",
  description: "O'zbekistonda kundalik hayotga oid foydali ma'lumotlar, yo'riqnomalar va maslahatlar.",
  keywords: "o'zbekiston, yo'riqnoma, id karta, bank kartasi, mygov, davlat xizmatlari, hayot maslahatlari, texnologiya",
};

export default function Home() {
  const posts = getAllPosts();
  const featuredPosts = posts.slice(0, 3);
  const latestPosts = posts.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-linear-to-b from-white to-neutral-off-white pt-24 md:pt-32 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#0EA5E9]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#F97316]/5 rounded-full blur-3xl"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 text-neutral-text-dark leading-tight">
              O'zbekistonda hayotni{' '}
              <span className="gradient-text">osonlashtiruvchi</span>{' '}
              yo'riqnomalar
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-text-gray mb-8 sm:mb-10 leading-relaxed px-2">
              Hujjatlar, xizmatlar va kundalik hayot haqida foydali ma'lumotlar - 
              barchasi bir joyda
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16">
              <a 
                href="#maqolalar"
                className="group bg-[#0EA5E9] text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl text-base sm:text-lg font-bold shadow-blue hover:bg-[#0369A1] smooth inline-flex items-center justify-center cursor-pointer"
              >
                Maqolalarni o'qish
                <span className="inline-block ml-2 group-hover:translate-x-1 smooth">→</span>
              </a>
              
              <SearchButton className="bg-transparent border-2 border-[#F97316] text-[#F97316] px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl text-base sm:text-lg font-bold hover:bg-[#F97316] hover:text-white smooth cursor-pointer">
                Qidiruv 🔍
              </SearchButton>
            </div>
            
            {/* Trust indicators */}
            {/* <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-text-light">
              <span className="flex items-center gap-2">
                <span className="text-[#0EA5E9]">✓</span> 500+ Maqolalar
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#0EA5E9]">✓</span> 50K+ O'quvchilar
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#0EA5E9]">✓</span> Bepul
              </span>
            </div> */}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <StatsSection /> */}

      {/* Featured Posts Section */}
      {/* {featuredPosts.length > 0 && (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-text-dark mb-4">
                Mashhur Maqolalar
              </h2>
              <p className="text-lg text-neutral-text-gray">
                Eng ko'p o'qilgan va foydali maqolalar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )} */}

      {/* Categories Section */}
      {/* <CategoriesSection posts={posts} /> */}

      {/* Latest Articles Section */}
      {posts.length > 0 && (
        <section id="maqolalar" className="bg-white py-10 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-text-dark mb-2">
                  So'nggi Maqolalar
                </h2>
                <p className="text-base sm:text-lg text-neutral-text-gray">
                  {posts.length} ta maqola mavjud
                </p>
              </div>
              <Link 
                href="/blog"
                className="bg-transparent cursor-pointer border-2 border-[#F97316] text-[#F97316] px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl text-sm sm:text-base md:text-lg font-bold hover:bg-[#F97316] hover:text-white smooth inline-flex items-center justify-center whitespace-nowrap"
              >
                Barcha maqolalarni ko'rish
                <span className="inline-block ml-2 group-hover:translate-x-1 smooth">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {latestPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>

            {posts.length > 6 && (
              <div className="text-center mt-12">
                <a
                  href="/blog"
                  className="inline-flex items-center text-[#0EA5E9] font-semibold hover:text-[#0369A1] smooth"
                >
                  Barcha maqolalarni ko'rish
                  <span className="ml-2 inline-block">→</span>
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Empty State */}
      {posts.length === 0 && (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 md:py-20">
            <div className="inline-block p-4 bg-neutral-light-gray rounded-2xl mb-4">
              <svg className="w-12 h-12 text-neutral-text-light mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-lg text-neutral-text-gray mb-2">Hozircha maqolalar mavjud emas</p>
            <p className="text-sm text-neutral-text-light">Tez orada yangi maqolalar qo'shiladi</p>
          </div>
        </section>
      )}

      {/* Info/Features Section */}
      <section className="bg-neutral-off-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-white border border-neutral-border rounded-2xl p-8 text-center card-hover">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-neutral-text-dark mb-3">
                To'liq Ma'lumot
              </h3>
              <p className="text-neutral-text-gray leading-relaxed">
                Har bir mavzu bo'yicha batafsil va qamrab oluvchi yo'riqnomalar
              </p>
            </div>

            <div className="bg-white border border-neutral-border rounded-2xl p-8 text-center card-hover">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-neutral-text-dark mb-3">
                Tez Yangilanish
              </h3>
              <p className="text-neutral-text-gray leading-relaxed">
                Eng yangi qoidalar va o'zgarishlar haqida doimiy yangilanishlar
              </p>
            </div>

            <div className="bg-white border border-neutral-border rounded-2xl p-8 text-center card-hover">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-neutral-text-dark mb-3">
                Ishonchli Manbalar
              </h3>
              <p className="text-neutral-text-gray leading-relaxed">
                Barcha ma'lumotlar rasmiy manbalarga asoslangan va tekshirilgan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
