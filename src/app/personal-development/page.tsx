import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { client } from "../../../sanity/lib/client";
import { articlesByCategoryQuery } from "../../../sanity/lib/queries";
import { formatArticleForCard, SanityArticle } from "../../../sanity/lib/helpers";

export const metadata: Metadata = {
  title: "Personal Development",
  description:
    "Mindset, habits, productivity, and purpose. Actionable growth strategies to become the best version of yourself.",
};

const fallbackArticles = [
  {
    title: "Why Most Goal-Setting Fails (And What to Do Instead)",
    excerpt: "Goals are great, but systems are better. Learn the identity-based approach to personal development that top performers swear by.",
    category: "Mindset",
    slug: "goal-setting-systems",
    date: "Mar 12, 2026",
    readTime: "5 min read",
    categoryColor: "bg-warm-500 text-warm-700",
    thumbnailGradient: "from-warm-100 to-warm-200",
    thumbnailIcon: "🎯",
  },
  {
    title: "Digital Minimalism: Reclaim Your Focus",
    excerpt: "Your phone isn't the enemy — your habits are. Practical strategies for using technology intentionally and getting your focus back.",
    category: "Productivity",
    slug: "digital-minimalism",
    date: "Mar 3, 2026",
    readTime: "5 min read",
    categoryColor: "bg-warm-500 text-warm-700",
    thumbnailGradient: "from-warm-100 to-warm-200",
    thumbnailIcon: "📵",
  },
  {
    title: "The Power of Journaling: A Beginner's Guide",
    excerpt: "Journaling isn't just for writers. Discover how 10 minutes a day of writing can transform your clarity, creativity, and emotional health.",
    category: "Habits",
    slug: "journaling-beginners-guide",
    date: "Feb 22, 2026",
    readTime: "6 min read",
    categoryColor: "bg-warm-500 text-warm-700",
    thumbnailGradient: "from-warm-100 to-warm-200",
    thumbnailIcon: "📓",
  },
  {
    title: "How to Build Confidence From the Inside Out",
    excerpt: "True confidence isn't about faking it. It's built through action, self-awareness, and small wins. Here's the practical playbook.",
    category: "Mindset",
    slug: "building-confidence",
    date: "Feb 15, 2026",
    readTime: "7 min read",
    categoryColor: "bg-warm-500 text-warm-700",
    thumbnailGradient: "from-warm-100 to-warm-200",
    thumbnailIcon: "💪",
  },
  {
    title: "Deep Work: How to Get More Done in Less Time",
    excerpt: "In a world of constant distraction, your ability to focus deeply is a superpower. Here's how to cultivate it.",
    category: "Productivity",
    slug: "deep-work-guide",
    date: "Feb 8, 2026",
    readTime: "8 min read",
    categoryColor: "bg-warm-500 text-warm-700",
    thumbnailGradient: "from-warm-100 to-warm-200",
    thumbnailIcon: "🧠",
  },
  {
    title: "Finding Your Purpose: A Practical Framework",
    excerpt: "Purpose isn't something you discover in a flash of inspiration. It's built through exploration, reflection, and intentional action.",
    category: "Purpose",
    slug: "finding-your-purpose",
    date: "Feb 1, 2026",
    readTime: "9 min read",
    categoryColor: "bg-warm-500 text-warm-700",
    thumbnailGradient: "from-warm-100 to-warm-200",
    thumbnailIcon: "🧭",
  },
];

const topics = [
  { label: "Mindset", count: 8 },
  { label: "Productivity", count: 6 },
  { label: "Habits", count: 5 },
  { label: "Confidence", count: 4 },
  { label: "Purpose", count: 3 },
  { label: "Communication", count: 3 },
  { label: "Creativity", count: 2 },
];

export const revalidate = 60;

export default async function PersonalDevelopmentPage() {
  let articles = fallbackArticles;
  try {
    const sanityArticles: SanityArticle[] = await client.fetch(articlesByCategoryQuery, { category: "personal-development" });
    if (sanityArticles && sanityArticles.length > 0) {
      articles = sanityArticles.map(formatArticleForCard);
    }
  } catch {
    // Sanity not connected yet, use fallback
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-warm-50 via-cream-100 to-primary-50">
        <div className="section-padding py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-warm-100 rounded-full mb-4">
              <svg className="w-4 h-4 text-warm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-semibold text-warm-700">Personal Development</span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 leading-tight mb-4">
              Grow Into Your{" "}
              <span className="text-warm-500">Best Self</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Actionable strategies for mindset, habits, productivity, and purpose.
              No fluff — just real frameworks that drive real growth.
            </p>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="section-padding py-10 border-b border-warm-100">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium text-gray-500 mr-2 self-center">Topics:</span>
          {topics.map((topic) => (
            <button
              key={topic.label}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-warm-200 rounded-full hover:border-warm-400 hover:text-warm-600 hover:bg-warm-50 transition-colors"
            >
              {topic.label}
              <span className="ml-1.5 text-xs text-gray-400">({topic.count})</span>
            </button>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding py-16">
        <h2 className="font-display font-bold text-2xl text-gray-900 mb-8">
          Latest in Personal Development
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
