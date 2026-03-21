import Link from "next/link";

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  gradient: string;
  articles: number;
}

export default function CategoryCard({
  title,
  description,
  href,
  icon,
  gradient,
  articles,
}: CategoryCardProps) {
  return (
    <Link href={href} className="group">
      <div className="card-hover bg-white rounded-2xl p-8 border border-warm-100 shadow-sm h-full flex flex-col">
        <div
          className={`w-14 h-14 rounded-2xl ${gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            {articles} Articles
          </span>
          <span className="text-primary-500 text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
            Explore &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
