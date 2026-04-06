import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import { client } from "../../../../sanity/lib/client";
import { articleBySlugQuery } from "../../../../sanity/lib/queries";
import { SanityArticle, getCategoryConfig } from "../../../../sanity/lib/helpers";
import { PortableText } from "@portabletext/react";

// Sample hardcoded posts as fallback
const fallbackPosts: Record<string, {
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

// Callout box styles per type
const calloutStyles: Record<string, { bg: string; border: string; icon: string; label: string }> = {
  tip:      { bg: "bg-primary-50",  border: "border-primary-200", icon: "💡", label: "Tip" },
  warning:  { bg: "bg-amber-50",    border: "border-amber-200",   icon: "⚠️", label: "Warning" },
  takeaway: { bg: "bg-sage-50",     border: "border-sage-200",    icon: "📌", label: "Key Takeaway" },
  pro:      { bg: "bg-warm-50",     border: "border-warm-200",    icon: "🔥", label: "Pro Tip" },
  fact:     { bg: "bg-blue-50",     border: "border-blue-200",    icon: "📖", label: "Did You Know?" },
};

// Portable Text components for rendering Sanity rich text
const portableTextComponents = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl font-display font-bold text-gray-900 mt-10 mb-3">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl font-display font-bold text-gray-900 mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-lg font-display font-bold text-gray-900 mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-gray-600 leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-primary-300 pl-6 my-6 italic text-gray-500 text-lg">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-outside pl-6 mb-6 space-y-2 text-gray-600">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-outside pl-6 mb-6 space-y-2 text-gray-600">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    underline: ({ children }: { children?: React.ReactNode }) => (
      <span className="underline">{children}</span>
    ),
    "strike-through": ({ children }: { children?: React.ReactNode }) => (
      <span className="line-through text-gray-400">{children}</span>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="bg-gray-100 text-primary-700 font-mono text-sm px-1.5 py-0.5 rounded">{children}</code>
    ),
    link: ({ children, value }: { children?: React.ReactNode; value?: { href: string; blank?: boolean } }) => (
      <a
        href={value?.href}
        className="text-primary-600 underline hover:text-primary-700 transition-colors"
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
  },
  types: {
    // Images inside the article body
    image: ({ value }: { value?: { asset?: { url?: string }; alt?: string; caption?: string } }) => {
      if (!value?.asset?.url) return null;
      return (
        <figure className="my-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={value.asset.url}
            alt={value.alt || "Article image"}
            className="w-full rounded-xl shadow-sm"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-400 mt-2 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    // Callout / tip boxes
    callout: ({ value }: { value?: { calloutType?: string; content?: string } }) => {
      const type = value?.calloutType || "tip";
      const style = calloutStyles[type] || calloutStyles.tip;
      return (
        <div className={`my-6 rounded-xl border ${style.bg} ${style.border} p-5 flex gap-4`}>
          <span className="text-2xl shrink-0 mt-0.5">{style.icon}</span>
          <div>
            <p className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-1">
              {style.label}
            </p>
            <p className="text-gray-700 leading-relaxed">{value?.content}</p>
          </div>
        </div>
      );
    },
    // Section dividers
    divider: ({ value }: { value?: { style?: string } }) => {
      const style = value?.style || "line";
      if (style === "stars") {
        return (
          <div className="my-10 text-center text-gray-300 text-xl tracking-widest select-none">
            ✦&nbsp;&nbsp;✦&nbsp;&nbsp;✦
          </div>
        );
      }
      return (
        <hr
          className={`my-10 border-0 border-t ${
            style === "dotted" ? "border-dotted border-gray-300" : "border-gray-200"
          }`}
        />
      );
    },
  },
};

export const revalidate = 60;

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Try to fetch from Sanity first
  let sanityArticle: SanityArticle | null = null;
  try {
    sanityArticle = await client.fetch(articleBySlugQuery, { slug });
  } catch {
    // Sanity not connected yet
  }

  // If we have a Sanity article, render it
  if (sanityArticle) {
    const config = getCategoryConfig(sanityArticle.category);
    const date = new Date(sanityArticle.publishedAt).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    return (
      <>
        <article>
          <header className="gradient-warm">
            <div className="section-padding py-16 md:py-20">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <Link href="/blog" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                    &larr; Back to Blog
                  </Link>
                </div>
                <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full ${config.color} bg-opacity-10 mb-4`}>
                  {config.label}
                </span>
                <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
                  {sanityArticle.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>By Positorial Team</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <time>{date}</time>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{sanityArticle.readTime || "5 min read"}</span>
                </div>
              </div>
            </div>
          </header>

          <div className="section-padding py-12">
            <div className="max-w-3xl prose prose-lg prose-gray prose-headings:font-display prose-headings:font-bold prose-a:text-primary-600">
              {sanityArticle.body ? (
                <PortableText value={sanityArticle.body as never[]} components={portableTextComponents as never} />
              ) : (
                <p className="text-gray-600">Content coming soon.</p>
              )}
            </div>
          </div>

          {/* Affiliate Links */}
          {sanityArticle.affiliateLinks && sanityArticle.affiliateLinks.length > 0 && (
            <div className="section-padding pb-12">
              <div className="max-w-3xl">
                <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-4">Recommended Products</h3>
                  <div className="space-y-4">
                    {sanityArticle.affiliateLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="block bg-white rounded-xl p-4 border border-primary-100 hover:shadow-md transition-shadow"
                      >
                        <p className="font-semibold text-gray-900">{link.label}</p>
                        {link.description && (
                          <p className="text-sm text-gray-500 mt-1">{link.description}</p>
                        )}
                        <span className="text-primary-500 text-sm font-medium mt-2 inline-block">Learn more &rarr;</span>
                      </a>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-4">
                    Disclosure: Some links above are affiliate links. We may earn a commission at no extra cost to you.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tags */}
          {sanityArticle.tags && sanityArticle.tags.length > 0 && (
            <div className="section-padding pb-12">
              <div className="max-w-3xl border-t border-cream-200 pt-8 flex gap-2">
                <span className="text-sm text-gray-500 self-center">Tags:</span>
                {sanityArticle.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-cream-200 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
        <NewsletterSignup />
      </>
    );
  }

  // Fallback to hardcoded posts
  const post = fallbackPosts[slug] || { ...defaultPost, title: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") };

  return (
    <>
      <article>
        <header className="gradient-warm">
          <div className="section-padding py-16 md:py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Link href="/blog" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
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

        <div className="section-padding py-12">
          <div className="max-w-3xl">
            {post.content.map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                const heading = paragraph.replace("## ", "").split("\n")[0];
                const body = paragraph.split("\n").slice(2).join("\n");
                return (
                  <div key={index} className="mt-10">
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">{heading}</h2>
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
      </article>
      <NewsletterSignup />
    </>
  );
}
