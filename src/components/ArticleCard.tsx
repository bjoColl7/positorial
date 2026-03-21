import Link from "next/link";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  date: string;
  readTime: string;
  categoryColor: string;
}

export default function ArticleCard({
  title,
  excerpt,
  category,
  slug,
  date,
  readTime,
  categoryColor,
}: ArticleCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group">
      <article className="card-hover bg-white rounded-2xl overflow-hidden border border-warm-100 shadow-sm h-full flex flex-col">
        {/* Colored top accent bar */}
        <div className={`h-1.5 ${categoryColor}`} />

        <div className="p-6 flex flex-col flex-1">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${categoryColor} bg-opacity-10`}>
              {category}
            </span>
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
          <div className="flex items-center justify-between pt-4 border-t border-warm-100">
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
