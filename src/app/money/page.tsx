import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Money & Finances",
  description:
    "Master your money with practical advice on budgeting, investing, debt payoff, and building long-term wealth.",
};

const moneyArticles = [
  {
    title: "7 Money Habits That Changed My Financial Future",
    excerpt: "Small daily habits compound into massive results. These are the money habits that took me from paycheck to paycheck to building real wealth.",
    category: "Budgeting",
    slug: "7-money-habits",
    date: "Mar 18, 2026",
    readTime: "6 min read",
    categoryColor: "bg-primary-500 text-primary-700",
  },
  {
    title: "How to Build an Emergency Fund From Scratch",
    excerpt: "Starting from zero? No problem. A step-by-step guide to building your financial safety net, even on a tight budget.",
    category: "Saving",
    slug: "emergency-fund-guide",
    date: "Mar 9, 2026",
    readTime: "7 min read",
    categoryColor: "bg-primary-500 text-primary-700",
  },
  {
    title: "Index Funds 101: The Simplest Way to Start Investing",
    excerpt: "You don't need to be a Wall Street expert. Learn how index funds work and why they're the go-to choice for long-term wealth building.",
    category: "Investing",
    slug: "index-funds-101",
    date: "Feb 28, 2026",
    readTime: "8 min read",
    categoryColor: "bg-primary-500 text-primary-700",
  },
  {
    title: "The Debt Snowball vs. Avalanche Method",
    excerpt: "Two proven strategies for crushing debt. Here's how to choose the one that fits your psychology and financial situation.",
    category: "Debt",
    slug: "debt-snowball-avalanche",
    date: "Feb 20, 2026",
    readTime: "6 min read",
    categoryColor: "bg-primary-500 text-primary-700",
  },
  {
    title: "Side Hustle Ideas That Actually Pay in 2026",
    excerpt: "From freelancing to digital products, here are realistic side hustles that can add $500-$5,000+ per month to your income.",
    category: "Income",
    slug: "side-hustle-ideas-2026",
    date: "Feb 14, 2026",
    readTime: "10 min read",
    categoryColor: "bg-primary-500 text-primary-700",
  },
  {
    title: "Understanding Your Credit Score (And How to Improve It)",
    excerpt: "Your credit score affects everything from loan rates to apartment applications. Here's exactly how it works and how to boost it.",
    category: "Credit",
    slug: "credit-score-guide",
    date: "Feb 7, 2026",
    readTime: "7 min read",
    categoryColor: "bg-primary-500 text-primary-700",
  },
];

const topics = [
  { label: "Budgeting", count: 8 },
  { label: "Investing", count: 6 },
  { label: "Debt Freedom", count: 5 },
  { label: "Saving", count: 7 },
  { label: "Side Hustles", count: 4 },
  { label: "Credit & Loans", count: 3 },
  { label: "Retirement", count: 4 },
  { label: "Tax Tips", count: 2 },
];

export default function MoneyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-cream-100 to-warm-50">
        <div className="section-padding py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-100 rounded-full mb-4">
              <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold text-primary-700">Money & Finances</span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 leading-tight mb-4">
              Master Your Money,{" "}
              <span className="text-primary-500">Own Your Future</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              From your first budget to your investment portfolio — practical,
              no-nonsense financial guidance for every stage of your journey.
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
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-warm-200 rounded-full hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50 transition-colors"
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
          Latest in Money & Finances
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moneyArticles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
