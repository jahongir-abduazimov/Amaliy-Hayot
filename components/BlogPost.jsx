/**
 * BlogPost - Optional wrapper component for blog post layout
 * This is a reusable layout component (optional, since the page already has its own layout)
 * 
 * Note: The actual blog post page uses its own layout, but this component
 * can be used if you want a reusable wrapper for other contexts.
 */

export default function BlogPost({ 
  title, 
  date, 
  category, 
  readTime, 
  author, 
  description, 
  image, 
  children 
}) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header */}
      <header className="mb-10 md:mb-12 space-y-6">
        {category && (
          <span className="inline-block px-4 py-2 text-sm font-bold text-blue-600 bg-blue-50 rounded-full border border-blue-200">
            {category}
          </span>
        )}

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-4 border-t border-gray-200">
          {date && (
            <div className="flex items-center gap-2 text-sm md:text-base text-gray-600">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">{date}</span>
            </div>
          )}

          {readTime && (
            <div className="flex items-center gap-2 text-sm md:text-base text-gray-600">
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">{readTime}</span>
            </div>
          )}

          {author && (
            <div className="flex items-center gap-2 text-sm md:text-base text-gray-600">
              <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-medium">{author}</span>
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </article>
  );
}
