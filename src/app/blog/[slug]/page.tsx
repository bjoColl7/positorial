import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

// Sample blog post data — in production, this would come from a CMS or database
const posts: Record<string, {
  title: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  author: string;
  content: string[];
}> = {
  "7-money-habits": {
    title: "7 Money Habits That Changed My Financial Future",
    category: "Money & Finances",
    categoryColor: "bg-primary-100 text-primary-700",
    date: "March 18, 2026",
    readTime: "6 min read",
    author: "Positorial Team",
    content: [
      "Money isn't just about numbers — it's about behavior. The biggest financial transformations don't come from a single windfall or a complex investment strategy. They come from small, consistent habits practiced daily.",
      "After years of living paycheck to paycheck, I realized that my income wasn't the problem. My habits were. Here are the seven changes that completely shifted my financial trajectory.",
      "## 1. Pay Yourself First\n\nBefore any bill, any subscription, any impulse purchase — I move money into savings. Even starting with just $25 per paycheck made a difference. Automating this transfer removed the temptation entirely.",
      "## 2. Track Every Dollar\n\nYou can't improve what you don't measure. I started using a simple spreadsheet to track where every dollar went. The awareness alone changed my spending patterns within the first month.",
      "## 3. Wait 48 Hours Before Non-Essential Purchases\n\nThis simple rule eliminated roughly 70% of my impulse spending. Most \"must-have\" items feel completely unnecessary after two days of reflection.",
      "## 4. Cook More, Eat Out Less\n\nFood spending was my biggest budget leak. Learning to meal prep saved me over $400 per month — that's nearly $5,000 a year redirected to savings and investments.",
      "## 5. Automate Your Investments\n\nI set up automatic monthly contributions to a low-cost index fund. No timing the market, no stress. Just consistent, automated wealth building.",
      "## 6. Review Subscriptions Monthly\n\nSubscription creep is real. I found I was paying for 8 services I barely used. A monthly 5-minute audit keeps this in check.",
      "## 7. Invest in Financial Education\n\nBooks, podcasts, courses — the ROI on financial literacy is infinite. The more you understand money, the better decisions you make with it.",
      "These habits didn't transform my finances overnight. But compounded over months and years, they've been life-changing. The best part? Anyone can start today, regardless of income level.",
    ],
  },
};

// Default post for any slug not in our sample data
const defaultPost = {
  title: "Article Coming Soon",
  category: "Positorial",
  categoryColor: "bg-warm-100 text-warm-700",
  date: "2026",
  readTime: "5 min read",
  author: "Positorial Team",
  content: [
    "This article is currently being written and will be published soon. Check back later for the full content!",
    "In the meantime, browse our other articles on money, health, and personal development.",
  ],
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug] || { ...defaultPost, title: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") };

  return (
    <>
      {/* Article Header */}
      <article>
        <header className="gradient-warm">
          <div className="section-padding py-16 md:py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Link
                  href="/blog"
                  className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
                >
                  &larr; Back to Blog
                </Link>
              </div>

              <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full ${post.categoryColor} mb-4`}>
                {post.category}
              </span>

              <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>By {post.author}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <time>{post.date}</time>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="section-padding py-12">
          <div className="max-w-3xl prose prose-lg prose-gray prose-headings:font-display prose-headings:font-bold prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline">
            {post.content.map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                const heading = paragraph.replace("## ", "").split("\n")[0];
                const body = paragraph.split("\n").slice(2).join("\n");
                return (
                  <div key={index} className="mt-10">
                    <h2 className="text-2xl text-gray-900 mb-3">{heading}</h2>
                    <p className="text-gray-600 leading-relaxed">{body}</p>
                  </div>
                );
              }
              return (
                <p key={index} className="text-gray-600 leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        {/* Share / Tags */}
        <div className="section-padding pb-12">
          <div className="max-w-3xl border-t border-warm-100 pt-8 flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex gap-2">
              <span className="text-sm text-gray-500 self-center">Tags:</span>
              {["money", "habits", "budgeting"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-warm-100 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      <NewsletterSignup />
    </>
  );
}
