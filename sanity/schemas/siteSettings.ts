import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      initialValue: "Positorial",
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "readerCount",
      title: "Reader Count (for stats bar)",
      type: "string",
      description: 'e.g. "10K+"',
    }),
    defineField({
      name: "articleCount",
      title: "Article Count (for stats bar)",
      type: "string",
      description: 'e.g. "60+"',
    }),
    defineField({
      name: "readerRating",
      title: "Reader Rating (for stats bar)",
      type: "string",
      description: 'e.g. "4.9"',
    }),
    defineField({
      name: "newsletterHeading",
      title: "Newsletter Heading",
      type: "string",
    }),
    defineField({
      name: "newsletterDescription",
      title: "Newsletter Description",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
