// Helper functions for formatting Sanity data for the site components

export interface SanityArticle {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  excerpt: string;
  mainImage?: unknown;
  publishedAt: string;
  readTime?: string;
  featured?: boolean;
  tags?: string[];
  body?: unknown[];
  affiliateLinks?: { label: string; url: string; description: string }[];
}

// Map Sanity category values to display colors and icons
const categoryConfig: Record<
  string,
  { label: string; color: string; gradient: string; icon: string }
> = {
  money: {
    label: "Money",
    color: "bg-primary-500 text-primary-700",
    gradient: "from-primary-100 to-primary-200",
    icon: "💰",
  },
  health: {
    label: "Health",
    color: "bg-sage-500 text-sage-700",
    gradient: "from-sage-100 to-sage-200",
    icon: "💚",
  },
  "personal-development": {
    label: "Growth",
    color: "bg-warm-500 text-warm-700",
    gradient: "from-warm-100 to-warm-200",
    icon: "⚡",
  },
};

// Convert a Sanity article to the format our ArticleCard component expects
export function formatArticleForCard(article: SanityArticle) {
  const config = categoryConfig[article.category] || categoryConfig.money;
  const date = new Date(article.publishedAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return {
    title: article.title,
    excerpt: article.excerpt,
    category: config.label,
    slug: article.slug.current,
    date: formattedDate,
    readTime: article.readTime || "5 min read",
    categoryColor: config.color,
    thumbnailGradient: config.gradient,
    thumbnailIcon: config.icon,
  };
}

// Convert for the horizontal article layout
export function formatArticleForHorizontal(article: SanityArticle) {
  const config = categoryConfig[article.category] || categoryConfig.money;
  const date = new Date(article.publishedAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return {
    title: article.title,
    excerpt: article.excerpt,
    category: config.label,
    slug: article.slug.current,
    date: formattedDate,
    readTime: article.readTime || "5 min read",
    gradient: config.gradient,
    icon: config.icon,
  };
}

export function getCategoryConfig(category: string) {
  return categoryConfig[category] || categoryConfig.money;
}
