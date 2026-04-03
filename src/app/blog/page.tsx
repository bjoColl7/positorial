import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { client } from "../../../sanity/lib/client";
import { allArticlesQuery } from "../../../sanity/lib/queries";
import { formatArticleForCard, SanityArticle } from "../../../sanity/lib/helpers";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "All articles on money, health, and personal development. Fresh insights published weekly.",
};

// Fallback hardcoded articles (shown when Sanity has no content yet)
const fallbackArticles = [
  {
    title: "7 Money Habits That Changed My Financial Future",
    excerpt: "Small daily habits compound into massive results. These are the money habits that took me from paycheck to paycheck to building real wealth.",
    category: "Money",
    slug: "7-money-habits",
    date: "Mar 18, 2026",
    readTime: "6 min read",
    categoryColor: "bg-primary-500 text-primary-700",
    thumbnailGradient: "from-primary-100 to-primary-200",
    thumbnailIcon: "💰",
  },
  {
    title: "The Morning Routine Science Says Actually Works",
    excerpt: "Forget the 4 AM club hype. Here's what research actually says about building a morning routine that boosts energy, focus, and mood all day.",
    category: "Health",
    slug: "morning-routine-science",
    date: "Mar 15, 2026",
    readTime: "8 min read",
    categoryColor: "bg-sage-500 text-sage-700",
    thumbnailGradient: "from-sage-100 to-sage-200",
    thumbnailIcon: "🧘",
  },
  {
    title: "Why Most Goal-Setting Fails (And What to Do Instead)",
    excerpt: "Goals are great, but systems are better. Learn the identity-based approach to personal development that top performers swear by.",
    category: "Growth",
    slug: "goal-setting-systems",
    date: "Mar 12, 2026",
    readTime: "5 min read",
    categoryColor: "bg-warm-500 text-warm-700",
    thumbnailGradient: "from-warm-100 to-warm-200",
    thumbnailIcon: "🎯",
  },
  {
    title: "How to Build an Emergency Fund From Scratch",
    excerpt: "Starting from zero? No problem. A step-by-step guide to building your financial safety net, even on a tight budget.",
    category: "Money",
    slug: "emergency-fund-guide",
    date: "Mar 9, 2026",
    readTime: "7 min read",
    categoryColor: "bg-primary-500 text-primary-700",
    thumbnailGradient: "from-primary-100 to-primary-200",
    thumbnailIcon: "🏦",
  },
  {
    title: "The Anti-Diet Approach to Eating Well",
    excerpt: "Ditch restrictive diets for good. Discover intuitive, sustainable eating habits that nourish your body and mind without the guilt.",
    category: "Health",
    slug: "anti-diet-eating",
    date: "Mar 6, 2026",
    readTime: "6 min read",
    categoryColor: "bg-sage-500 text-sage-700",
    thumbnailGradient: "from-sage-100 to-sage-200",
    thumbnailIcon: "🥗",
  },
  {
    title: "Digital Minimalism: Reclaim Your Focus",
    excerpt: "Your phone isn't the enemy — your habits are. Practical strategies for using technology intentionally and getting your focus back.",
    category: "Growth",
    slug: "digital-minimalism",
    date: "Mar 3, 2026",
    readTime: "5 min read",
    categoryColor: "bg-warm-500 text-warm-700",
    thumbnailGradient: "from-warm-100 to-warm-200",
    thumbnailIcon: "📵",
  },
];

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  // Try to fetch from Sanity, fall back to hardcoded data
  let articles = fallbackArticles;
  try {
    const sanityArticles: SanityArticle[] = await client.fetch(allArticlesQuery);
    if (sanityArticles && sanityArticles.length > 0) {
      articles = sanityArticles.map(formatArticleForCard);
    }
  } catch {
    // Sanity not connected yet, use fallback
  }

  return (
    <>
      {/* Hero */}
      <section className="gradient-warm">
        <div className="section-padding py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 leading-tight mb-4">
              The Blog
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              All our latest articles on money, health, and personal growth.
              New content published weekly.
            </p>
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="section-padding py-8 border-b border-cream-200 sticky top-16 lg:top-20 bg-cream-50/95 backdrop-blur-sm z-40">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {["All", "Money", "Health", "Growth"].map((tab, i) => (
            <button
              key={tab}
              className={`px-5 py-2.5 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                i === 0
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-600 border border-cream-200 hover:border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-12">
          <button className="btn-secondary">Load More Articles</button>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
