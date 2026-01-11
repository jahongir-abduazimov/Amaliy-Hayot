import Link from 'next/link';
import Image from 'next/image';

export default function PostCard({ post }) {
  // Format date in Uzbek format
  const date = new Date(post.date);
  const months = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'];
  const formattedDate = `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;

  // Category color mapping
  const categoryColors = {
    'Hujjatlar': { bg: 'bg-blue-50', text: 'text-blue-700', hover: 'bg-blue-100' },
    'Moliya': { bg: 'bg-emerald-50', text: 'text-emerald-700', hover: 'bg-emerald-100' },
    'Xizmatlar': { bg: 'bg-purple-50', text: 'text-purple-700', hover: 'bg-purple-100' },
    'Transport': { bg: 'bg-orange-50', text: 'text-orange-700', hover: 'bg-orange-100' },
    'Salomatlik': { bg: 'bg-emerald-50', text: 'text-emerald-700', hover: 'bg-emerald-100' },
    'Ta\'lim': { bg: 'bg-blue-50', text: 'text-blue-700', hover: 'bg-blue-100' },
    'Texnologiya': { bg: 'bg-cyan-50', text: 'text-cyan-700', hover: 'bg-cyan-100' },
    'Boshqa': { bg: 'bg-gray-50', text: 'text-gray-700', hover: 'bg-gray-100' },
  };

  const categoryColor = post.category ? categoryColors[post.category] || categoryColors['Hujjatlar'] : null;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white border border-neutral-border rounded-2xl overflow-hidden card-hover md:flex-col flex flex-row-reverse"
    >
      {/* Image */}
      {post.image ? (
        <div className="relative md:w-full w-32 md:h-56 h-full shrink-0 overflow-hidden bg-linear-to-br from-[#F1F5F9] to-[#E2E8F0]">
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent z-10 md:block hidden"></div>
          <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-transparent z-10 md:hidden"></div>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 smooth"
            sizes="(max-width: 768px) 128px, (max-width: 1200px) 50vw, 33vw"
          />
          {/* {post.category && categoryColor && (
            <div className="absolute top-2 left-2 md:top-4 md:left-4 z-20">
              <span className={`inline-block px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-soft ${categoryColor.bg} ${categoryColor.text}`}>
                {post.category}
              </span>
            </div>
          )} */}
        </div>
      ) : (
        <div className="md:w-full w-32 md:h-56 h-full shrink-0 bg-linear-to-br from-[#DBEAFE] via-[#F0F9FF] to-[#F8FAFC] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-[#0EA5E9]/20 to-[#06B6D4]/20 opacity-50 group-hover:opacity-70 smooth"></div>
          <span className="text-neutral-text-light text-xs md:text-sm font-medium relative z-10">Rasm yo'q</span>
          {post.category && categoryColor && (
            <div className="absolute top-2 left-2 md:top-4 md:left-4 z-20">
              <span className={`inline-block px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-soft ${categoryColor.bg} ${categoryColor.text}`}>
                {post.category}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-4 md:p-6 flex-1 flex flex-col">
        {/* Title */}
        <h2 className="text-base md:text-xl lg:text-2xl font-bold text-neutral-text-dark mb-2 md:mb-3 group-hover:text-[#0EA5E9] smooth line-clamp-2 leading-tight">
          {post.title}
        </h2>

        {/* Description */}
        {post.description && (
          <p className="text-neutral-text-gray text-xs md:text-sm lg:text-base mb-3 md:mb-5 line-clamp-2 md:line-clamp-3 leading-relaxed flex-1">{post.description}</p>
        )}

        {/* Meta */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0 text-xs text-neutral-text-light pt-3 md:pt-4 border-t border-neutral-border/50 mt-auto">
          <div className="flex items-center gap-2">
            <span className="text-[#0EA5E9]">📅</span>
            <span>{formattedDate}</span>
          </div>
          {post.readingTime && (
            <div className="flex items-center gap-2 text-[#0EA5E9] font-medium">
              <span>⏱️</span>
              <span>{post.readingTime} daqiqa</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
