import { defineField, defineType } from "sanity";

export default defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Money & Finances", value: "money" },
          { title: "Health & Wellness", value: "health" },
          { title: "Personal Development", value: "personal-development" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "A short summary that appears on article cards (1-2 sentences)",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Read Time",
      type: "string",
      description: 'e.g. "6 min read"',
    }),
    defineField({
      name: "featured",
      title: "Featured Article",
      type: "boolean",
      description: "Show this article in the featured spotlight on the homepage",
      initialValue: false,
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "body",
      title: "Body Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Underline", value: "underline" },
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: "affiliateLinks",
      title: "Affiliate Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Product Name", type: "string" },
            { name: "url", title: "Affiliate URL", type: "url" },
            { name: "description", title: "Short Description", type: "string" },
          ],
        },
      ],
      description: "Optional affiliate product links to include in the article",
    }),
  ],
  orderings: [
    {
      title: "Published Date (Newest)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "mainImage",
      date: "publishedAt",
    },
    prepare(selection) {
      const { title, category, date } = selection;
      const categoryLabels: Record<string, string> = {
        money: "Money",
        health: "Health",
        "personal-development": "Growth",
      };
      return {
        ...selection,
        title,
        subtitle: `${categoryLabels[category] || category} · ${date ? new Date(date).toLocaleDateString() : "Draft"}`,
      };
    },
  },
});
