import Link from "next/link";

const recentPosts = [
  {
    title: "How to Build an Emergency Fund From Scratch",
    excerpt: "Starting from zero? No problem. A step-by-step guide to building your financial safety net, even on a tight budget.",
    category: "Money",
    slug: "emergency-fund-guide",
    date: "Mar 9, 2026",
    readTime: "7 min read",
    gradient: "from-primary-100 to-primary-200",
    icon: "💰",
  },
  {
    title: "The Anti-Diet Approach to Eating Well",
    excerpt: "Ditch restrictive diets for good. Discover intuitive, sustainable eating habits that nourish your body and mind without the guilt.",
    category: "Health",
    slug: "anti-diet-eating",
    date: "Mar 6, 2026",
    readTime: "6 min read",
    gradient: "from-sage-100 to-sage-200",
    icon: "🥗",
  },
  {
    title: "Digital Minimalism: Reclaim Your Focus",
    excerpt: "Your phone isn't the enemy — your habits are. Practical strategies for using technology intentionally and getting your focus back.",
    category: "Growth",
    slug: "digital-minimalism",
    date: "Mar 3, 2026",
    readTime: "5 min read",
    gradient: "from-warm-100 to-warm-200",
    icon: "📵",
  },
];

export default function HorizontalArticles() {
  return (
    <section className="section-padding py-20">
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-sage-500">Recent Reads</span>
        <div className="flex-1 h-px bg-cream-300" />
        <Link href="/blog" className="text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors">
          View all &rarr;
        </Link>
      </div>

      <div className="space-y-6">
        {recentPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <article className="bg-white rounded-2xl border border-cream-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-0">
                {/* Image side */}
                <div className={`relative h-48 md:h-auto bg-gradient-to-br ${post.gradient} overflow-hidden`}>
                  <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 300 200">
                    <circle cx="240" cy="40" r="80" stroke="currentColor" strokeWidth="0.5" className="text-gray-800" />
                    <circle cx="60" cy="160" r="50" stroke="currentColor" strokeWidth="0.5" className="text-gray-800" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <span className="text-3xl">{post.icon}</span>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                    <span className="text-xs text-gray-400 hidden sm:inline">
                      <span className="mx-1">·</span>{post.date}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-xl text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  <span className="text-primary-500 text-sm font-medium group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1">
                    Read article
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
