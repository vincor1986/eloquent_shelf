import { defineField, defineType } from "sanity";

export const summaryType = defineType({
  name: "summary",
  title: "Summary",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      type: "string",
    }),
    defineField({
      name: "author",
      type: "array",
      of: [{ type: "string", name: "author" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "string",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "cover_image",
      title: "cover image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "cover_url",
      type: "string",
    }),
    defineField({
      name: "rating",
      type: "number",
      options: { max: 5, min: 0, step: 0.1 },
    }),
    defineField({
      name: "ratings_count",
      type: "number",
    }),
    defineField({
      name: "amazon_UK_link",
      type: "url",
    }),
    defineField({
      name: "amazon_US_link",
      type: "url",
    }),
    defineField({
      name: "isbn_10",
      type: "string",
    }),
    defineField({
      name: "isbn_13",
      type: "string",
    }),
    defineField({
      name: "BS_UK_isbn_13",
      type: "string",
    }),
    defineField({
      name: "BS_US_isbn_13",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "summary",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "learning_outcomes",
      type: "array",
      of: [{ type: "string", name: "learningOutcome" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "key_takeaways",
      type: "array",
      of: [{ type: "string", name: "keyTakeaway" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publisher",
      type: "string",
    }),
    defineField({
      name: "published_date",
      type: "datetime",
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [{ type: "string", name: "category" }],
    }),
    defineField({
      name: "reading_difficulty",
      type: "string",
      options: { list: ["beginner", "intermediate", "advanced"] },
    }),
    defineField({
      name: "page_count",
      type: "number",
    }),
    defineField({
      name: "read_time_minutes",
      type: "number",
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string", name: "tag" }],
    }),
    defineField({
      name: "homepage_featured",
      type: "boolean",
      initialValue: false,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "published_at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
});
