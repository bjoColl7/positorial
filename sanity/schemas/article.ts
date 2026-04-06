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
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Describe the image for accessibility and SEO",
        },
        {
          name: "caption",
          title: "Caption",
          type: "string",
          description: "Optional caption shown below the image",
        },
      ],
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
      description: 'e.g. "budgeting", "investing", "mindset"',
    }),
    defineField({
      name: "body",
      title: "Article Body",
      type: "array",
      description: "Write your article here. Use the + button to add images, callout boxes, or dividers.",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal Text", value: "normal" },
            { title: "Heading 2 (Section Title)", value: "h2" },
            { title: "Heading 3 (Sub-section)", value: "h3" },
            { title: "Heading 4 (Small Header)", value: "h4" },
            { title: "Quote / Blockquote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet List", value: "bullet" },
            { title: "Numbered List", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Strikethrough", value: "strike-through" },
              { title: "Inline Code", value: "code" },
            ],
            annotations: [
              {
                title: "Link",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                    description: "Paste the full link (e.g. https://example.com)",
                  },
                  {
                    title: "Open in new tab?",
                    name: "blank",
                    type: "boolean",
                    initialValue: true,
                    description: "Turn on to open link in a new browser tab",
                  },
                ],
              },
            ],
          },
        },
        // Inline images within the article body
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Describe the image (important for SEO)",
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
              description: "Optional caption shown below the image",
            },
          ],
        },
        // Callout / Tip box
        {
          type: "object",
          name: "callout",
          title: "Callout Box",
          fields: [
            {
              name: "type",
              title: "Box Type",
              type: "string",
              options: {
                list: [
                  { title: "💡 Tip", value: "tip" },
                  { title: "⚠️ Warning", value: "warning" },
                  { title: "📌 Key Takeaway", value: "takeaway" },
                  { title: "🔥 Pro Tip", value: "pro" },
                  { title: "📖 Did You Know?", value: "fact" },
                ],
                layout: "radio",
              },
              initialValue: "tip",
            },
            {
              name: "content",
              title: "Content",
              type: "text",
              rows: 3,
              description: "The text inside the callout box",
            },
          ],
          preview: {
            select: { type: "type", content: "content" },
            prepare({ type, content }: { type: string; content: string }) {
              const icons: Record<string, string> = {
                tip: "💡", warning: "⚠️", takeaway: "📌", pro: "🔥", fact: "📖",
              };
              return {
                title: `${icons[type] || "📦"} Callout Box`,
                subtitle: content,
              };
            },
          },
        },
        // Section divider
        {
          type: "object",
          name: "divider",
          title: "Section Divider",
          fields: [
            {
              name: "style",
              title: "Divider Style",
              type: "string",
              options: {
                list: [
                  { title: "Simple line", value: "line" },
                  { title: "Dotted line", value: "dotted" },
                  { title: "Stars (✦ ✦ ✦)", value: "stars" },
                ],
                layout: "radio",
              },
              initialValue: "line",
            },
          ],
          preview: {
            select: { style: "style" },
            prepare({ style }: { style: string }) {
              const labels: Record<string, string> = {
                line: "─────────────",
                dotted: "· · · · · · ·",
                stars: "✦  ✦  ✦",
              };
              return { title: `Section Divider: ${labels[style] || "Line"}` };
            },
          },
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
          preview: {
            select: { label: "label", description: "description" },
            prepare({ label, description }: { label: string; description: string }) {
              return { title: label, subtitle: description };
            },
          },
        },
      ],
      description: "Optional affiliate product links shown at the bottom of the article",
    }),
  ],
  orderings: [
    {
      title: "Published Date (Newest First)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Title (A–Z)",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "mainImage",
      date: "publishedAt",
      featured: "featured",
    },
    prepare(selection) {
      const { title, category, date, featured } = selection;
      const categoryLabels: Record<string, string> = {
        money: "💰 Money",
        health: "🌿 Health",
        "personal-development": "🚀 Growth",
      };
      return {
        ...selection,
        title: `${featured ? "⭐ " : ""}${title}`,
        subtitle: `${categoryLabels[category] || category} · ${date ? new Date(date).toLocaleDateString() : "Draft"}`,
      };
    },
  },
});
