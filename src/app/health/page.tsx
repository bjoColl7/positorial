import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { client } from "../../../sanity/lib/client";
import { articlesByCategoryQuery } from "../../../sanity/lib/queries";
import { formatArticleForCard, SanityArticle } from "../../../sanity/lib/helpers";

export const metadata: Metadata = {
  title: "Health & Wellness",
  description:
    "Science-backed insights on nutrition, fitness, mental health, and sleep to help you feel your best every day.",
};

const fallbackArticles = [
  {
    title: "The Morning Routine Science Says Actually Works",
    excerpt: "Forget the 4 AM club hype. Here's what research actually says about building a morning routine that boosts energy, focus, and mood all day.",
    category: "Routines",
    slug: "morning-routine-science",
    date: "Mar 15, 2026",
    readTime: "8 min read",
    categoryColor: "bg-sage-500 text-sage-700",
    thumbnailGradient: "from-sage-100 to-sage-200",
    thumbnailIcon: "🧘",
  },
  {
    title: "The Anti-Diet Approach to Eating Well",
    excerpt: "Ditch restrictive diets for good. Discover intuitive, sustainable eating habits that nourish your body and mind without the guilt.",
    category: "Nutrition",
    slug: "anti-diet-eating",
    date: "Mar 6, 2026",
    readTime: "6 min read",
    categoryColor: "bg-sage-500 text-sage-700",
    thumbnailGradient: "from-sage-100 to-sage-200",
    thumbnailIcon: "🥗",
  },
  {
    title: "Sleep Optimization: Your #1 Health Hack",
    excerpt: "Better sleep improves everything — cognition, mood, metabolism, and longevity. Here are the evidence-based strategies that actually help.",
    category: "Sleep",
    slug: "sleep-optimization",
    date: "Feb 25, 2026",
    readTime: "9 min read",
    categoryColor: "bg-sage-500 text-sage-700",
    thumbnailGradient: "from-sage-100 to-sage-200",
    thumbnailIcon: "😴",
  },
  {
    title: "Strength Training for Beginners: A Complete Guide",
    excerpt: "No gym experience? No problem. Everything you need to start lifting weights safely and see real results in weeks.",
    category: "Fitness",
    slug: "strength-training-beginners",
    date: "Feb 18, 2026",
    readTime: "12 min read",
    categoryColor: "bg-sage-500 text-sage-700",
    thumbnailGradient: "from-sage-100 to-sage-200",
    thumbnailIcon: "💪",
  },
  {
    title: "Managing Stress Without Burning Out",
    excerpt: "Stress isn't the enemy — chronic unmanaged stress is. Learn practical techniques to stay resilient under pressure.",
    category: "Mental Health",
    slug: "managing-stress",
    date: "Feb 10, 2026",
    readTime: "7 min read",
    categoryColor: "bg-sage-500 text-sage-700",
    thumbnailGradient: "from-sage-100 to-sage-200",
    thumbnailIcon: "🧠",
  },
  {
    title: "Supplements Worth Taking (And Ones to Skip)",
    excerpt: "Cut through the marketing noise. An evidence-based look at which supplements can actually benefit your health.",
    category: "Nutrition",
    slug: "supplements-guide",
    date: "Feb 3, 2026",
    readTime: "8 min read",
    categoryColor: "bg-sage-500 text-sage-700",
    thumbnailGradient: "from-sage-100 to-sage-200",
    thumbnailIcon: "💊",
  },
];

const topics = [
  { label: "Nutrition", count: 7 },
  { label: "Fitness", count: 5 },
  { label: "Sleep", count: 4 },
  { label: "Mental Health", count: 6 },
  { label: "Habits", count: 3 },
  { label: "Longevity", count: 3 },
  { label: "Recovery", count: 2 },
];

export const revalidate = 60;

export default async function HealthPage() {
  let articles = fallbackArticles;
  try {
    const sanityArticles: SanityArticle[] = await client.fetch(articlesByCategoryQuery, { category: "health" });
    if (sanityArticles && sanityArticles.length > 0) {
      articles = sanityArticles.map(formatArticleForCard);
    }
  } catch {
    // Sanity not connected yet, use fallback
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sage-50 via-cream-100 to-warm-50">
        <div className="section-padding py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sage-100 rounded-full mb-4">
              <svg className="w-4 h-4 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-sm font-semibold text-sage-700">Health & Wellness</span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 leading-tight mb-4">
              Feel Your Best,{" "}
              <span className="text-sage-500">Every Single Day</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Evidence-based wellness without the fads. Real strategies for
              nutrition, fitness, sleep, and mental wellbeing that fit into your actual life.
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
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-warm-200 rounded-full hover:border-sage-300 hover:text-sage-600 hover:bg-sage-50 transition-colors"
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
          Latest in Health & Wellness
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
