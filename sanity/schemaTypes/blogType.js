import { defineField, defineType } from "sanity";

export const blogType = defineType({
  name: "blog",
  title: "Blog Post",
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
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "string",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "meta_description",
      type: "string",
      title: "Meta Description",
      description: "Description for SEO purposes",
      validation: (rule) =>
        rule.max(160).warning("Should be under 160 characters"),
    }),
    defineField({
      name: "main_image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "related_summaries",
      type: "array",
      of: [{ type: "reference", to: [{ type: "summary" }] }],
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt text",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string", name: "tag" }],
    }),
    defineField({
      name: "read_time_minutes",
      type: "number",
    }),
    defineField({
      name: "published_at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
});
