import Link from "next/link";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  date: string;
  readTime: string;
  categoryColor: string;
  thumbnailGradient?: string;
  thumbnailIcon?: string;
}

export default function ArticleCard({
  title,
  excerpt,
  category,
  slug,
  date,
  readTime,
  categoryColor,
  thumbnailGradient = "from-primary-100 to-primary-200",
  thumbnailIcon,
}: ArticleCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group">
      <article className="card-hover bg-white rounded-2xl overflow-hidden border border-cream-200 shadow-sm h-full flex flex-col">
        {/* Thumbnail area */}
        <div className={`relative h-44 bg-gradient-to-br ${thumbnailGradient} overflow-hidden`}>
          {/* Abstract pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 400 200">
            <circle cx="320" cy="40" r="80" stroke="currentColor" strokeWidth="0.5" className="text-gray-800" />
            <circle cx="80" cy="160" r="60" stroke="currentColor" strokeWidth="0.5" className="text-gray-800" />
            <rect x="150" y="30" width="140" height="140" rx="8" stroke="currentColor" strokeWidth="0.5" className="text-gray-800" />
          </svg>
          {/* Category icon centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-sm">
              <span className="text-2xl">{thumbnailIcon || "📄"}</span>
            </div>
          </div>
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm ${categoryColor}`}>
              {category}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          {/* Read time */}
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs text-gray-400">{readTime}</span>
          </div>

          {/* Title */}
          <h3 className="font-display font-semibold text-lg text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
            {excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-cream-200">
            <time className="text-xs text-gray-400">{date}</time>
            <span className="text-primary-500 text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
              Read more &rarr;
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
