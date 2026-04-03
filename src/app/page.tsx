import CategoryCard from "@/components/CategoryCard";
import ArticleCard from "@/components/ArticleCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import HeroBackground from "@/components/HeroBackground";
import StatsBar from "@/components/StatsBar";
import FeaturedSpotlight from "@/components/FeaturedSpotlight";
import HorizontalArticles from "@/components/HorizontalArticles";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import { featuredArticlesQuery, latestArticlesQuery } from "../../sanity/lib/queries";
import { formatArticleForCard, formatArticleForHorizontal, SanityArticle } from "../../sanity/lib/helpers";

// Fallback articles for when Sanity has no content yet
const fallbackLatestArticles = [
  {
    title: "The Morning Routine Science Says Actually Works",
    excerpt:
      "Forget the 4 AM club hype. Here's what research actually says about building a morning routine that boosts energy, focus, and mood all day.",
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
    excerpt:
      "Goals are great, but systems are better. Learn the identity-based approach to personal development that top performers swear by.",
    category: "Growth",
    slug: "goal-setting-systems",
    date: "Mar 12, 2026",
    readTime: "5 min read",
    categoryColor: "bg-warm-500 text-warm-700",
    thumbnailGradient: "from-warm-100 to-warm-200",
    thumbnailIcon: "🎯",
  },
  {
    title: "Index Funds 101: The Simplest Way to Start Investing",
    excerpt:
      "You don't need to be a Wall Street expert. Learn how index funds work and why they're the go-to choice for long-term wealth building.",
    category: "Money",
    slug: "index-funds-101",
    date: "Feb 28, 2026",
    readTime: "8 min read",
    categoryColor: "bg-primary-500 text-primary-700",
    thumbnailGradient: "from-primary-100 to-primary-200",
    thumbnailIcon: "📈",
  },
];

const fallbackHorizontalArticles = [
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

const fallbackFeatured = {
  title: "7 Money Habits That Changed My Financial Future",
  excerpt: "Small daily habits compound into massive results. These are the money habits that took me from living paycheck to paycheck to building real, lasting wealth. It starts with simple changes anyone can make today.",
  category: "money",
  slug: "7-money-habits",
  date: "Mar 18, 2026",
  readTime: "6 min read",
};

export const revalidate = 60;

export default async function Home() {
  // Fetch data from Sanity with fallbacks
  let latestArticles = fallbackLatestArticles;
  let horizontalArticles = fallbackHorizontalArticles;
  let featuredArticle = fallbackFeatured;

  try {
    const sanityLatest: SanityArticle[] = await client.fetch(latestArticlesQuery);
    if (sanityLatest && sanityLatest.length > 0) {
      latestArticles = sanityLatest.slice(0, 3).map(formatArticleForCard);
      // Use remaining articles for horizontal section
      if (sanityLatest.length > 3) {
        horizontalArticles = sanityLatest.slice(3, 6).map(formatArticleForHorizontal);
      }
    }

    const sanityFeatured: SanityArticle[] = await client.fetch(featuredArticlesQuery);
    if (sanityFeatured && sanityFeatured.length > 0) {
      const f = sanityFeatured[0];
      const date = new Date(f.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      featuredArticle = {
        title: f.title,
        excerpt: f.excerpt,
        category: f.category,
        slug: f.slug.current,
        date,
        readTime: f.readTime || "5 min read",
      };
    }
  } catch {
    // Sanity not connected yet, use fallbacks
  }
  return (
    <>
      {/* Hero Section with background visual */}
      <section className="relative min-h-[600px] flex items-center">
        <HeroBackground />
        <div className="section-padding py-24 md:py-36 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-primary-200 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-sage-400 animate-pulse" />
              <span className="text-sm font-medium text-gray-600">
                New articles every week
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6 animate-fade-in-up animate-delay-100">
              Your Path to a{" "}
              <span className="text-gradient">Richer, Healthier,</span>{" "}
              Better Life
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl animate-fade-in-up animate-delay-200">
              Positorial is your trusted guide to mastering money, optimizing
              health, and unlocking personal growth. Real advice for real
              people navigating the modern world.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-300">
              <Link href="/blog" className="btn-primary text-base">
                Start Exploring
              </Link>
              <Link href="/money" className="btn-secondary text-base">
                Browse Topics
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Credibility Bar */}
      <StatsBar />

      {/* Featured Article Spotlight (side-by-side) */}
      <FeaturedSpotlight article={featuredArticle} />

      {/* Categories Section */}
      <section className="section-padding py-20 bg-cream-50">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Explore Our Pillars
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Three essential areas of life, one place to master them all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard
            title="Money & Finances"
            description="From budgeting basics to investing strategies. Build wealth, crush debt, and take control of your financial future."
            href="/money"
            articles={24}
            gradient="bg-gradient-to-br from-primary-100 to-primary-200"
            icon={
              <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <CategoryCard
            title="Health & Wellness"
            description="Science-backed insights on nutrition, fitness, sleep, and mental wellbeing. Feel your best every single day."
            href="/health"
            articles={18}
            gradient="bg-gradient-to-br from-sage-100 to-sage-200"
            icon={
              <svg className="w-7 h-7 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
          />
          <CategoryCard
            title="Personal Development"
            description="Mindset, habits, productivity, and purpose. Become the best version of yourself with actionable growth strategies."
            href="/personal-development"
            articles={21}
            gradient="bg-gradient-to-br from-warm-100 to-warm-200"
            icon={
              <svg className="w-7 h-7 text-warm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
        </div>
      </section>

      {/* Latest Articles with thumbnails */}
      <section className="section-padding py-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-2">
              Latest Articles
            </h2>
            <p className="text-gray-500 text-lg">
              Fresh reads to fuel your journey.
            </p>
          </div>
          <Link href="/blog" className="btn-secondary text-sm">
            View All &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </section>

      {/* Horizontal Blog Articles */}
      <div className="bg-cream-50">
        <HorizontalArticles articles={horizontalArticles} />
      </div>

      {/* Social Proof / Testimonials */}
      <section className="section-padding py-20">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Real readers, real transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "Positorial helped me pay off $15K in debt in just 14 months. The budgeting articles are incredible.",
              name: "Sarah M.",
              role: "Teacher",
              initials: "SM",
              color: "bg-primary-100 text-primary-600",
            },
            {
              quote: "The health content is refreshingly evidence-based. No fads, no gimmicks — just what works.",
              name: "Marcus J.",
              role: "Software Engineer",
              initials: "MJ",
              color: "bg-sage-100 text-sage-600",
            },
            {
              quote: "The personal development articles changed my relationship with productivity. I'm doing more with less stress.",
              name: "Aisha K.",
              role: "Entrepreneur",
              initials: "AK",
              color: "bg-warm-100 text-warm-600",
            },
          ].map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 border border-cream-200 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center`}>
                  <span className="text-xs font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-display font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter with visual */}
      <NewsletterSignup />
    </>
  );
}
