// GROQ queries for fetching data from Sanity

// Get all articles, newest first
export const allArticlesQuery = `
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    featured,
    tags
  }
`;

// Get articles by category
export const articlesByCategoryQuery = `
  *[_type == "article" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    tags
  }
`;

// Get a single article by slug
export const articleBySlugQuery = `
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    featured,
    tags,
    body,
    affiliateLinks
  }
`;

// Get featured articles for homepage
export const featuredArticlesQuery = `
  *[_type == "article" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    category,
    excerpt,
    mainImage,
    publishedAt,
    readTime
  }
`;

// Get latest articles for homepage
export const latestArticlesQuery = `
  *[_type == "article"] | order(publishedAt desc)[0...6] {
    _id,
    title,
    slug,
    category,
    excerpt,
    mainImage,
    publishedAt,
    readTime
  }
`;

// Get site settings
export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    title,
    description,
    readerCount,
    articleCount,
    readerRating,
    newsletterHeading,
    newsletterDescription
  }
`;
