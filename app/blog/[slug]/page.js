import Image from "next/image";
import { notFound } from "next/navigation";

import { Clock } from "lucide-react";
import { PortableText } from "@portabletext/react";

import Breadcrumbs from "@/components/ui/Breadcrumbs";
import HorizontalListView from "@/components/list-view/HorizontalListView";
import Newsletter from "@/components/newsletter/Newsletter";

import { fetchBlogPostBySlug } from "@/actions/blog";
import { fetchByBookmarks } from "@/actions/cms";

import imageURL from "@/lib/cms/imageURL";
import components from "@/components/blog/components";

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const { success, data: blogPost } = await fetchBlogPostBySlug(slug);

  if (!success || !blogPost) {
    return notFound();
  }

  return {
    title: "Eloquent Shelf Blog | " + blogPost.title,
    description: blogPost.subtitle,
    metadataBase: new URL(`https://www.eloquentshelf.com`),
    alternates: {
      canonical: `https://www.eloquentshelf.com/blog/${blogPost.slug}`,
    },
    keywords: blogPost.tags || [],
    openGraph: {
      images: [
        {
          url: `/blog/${slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${blogPost.title} OG Image`,
        },
      ],
    },
  };
};

const BlogPostPage = async ({ params }) => {
  const { slug } = await params;

  const { success, data: blogPost } = await fetchBlogPostBySlug(slug);

  if (!success) {
    return notFound();
  }

  const { data: relatedSummaries } = await fetchByBookmarks(
    blogPost.related_summaries?.map((item) => item._ref) || []
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.eloquentshelf.com/blog/${blogPost.slug}`,
    },
    headline: blogPost.title,
    description: blogPost.subtitle,
    image: imageURL(blogPost.main_image.asset._ref),
    author: {
      "@type": "Person",
      name: "Eloquent Shelf",
      url: "https://www.eloquentshelf.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Eloquent Shelf",
      logo: {
        "@type": "ImageObject",
        url: "https://www.eloquentshelf.com/images/logos/circle-white.png",
      },
    },
    datePublished: blogPost.published_at,
    dateModified: blogPost.updated_at || blogPost.published_at,
  };

  return (
    <>
      <section className="lg:p-4">
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog" },
            { label: blogPost.title, href: `/blog/${slug}` },
          ]}
        />

        <h1 className="mt-8 mb-4 text-primary text-2xl lg:text-3xl">
          {blogPost.title}
          <span className="text-secondary">: {blogPost.subtitle}</span>
        </h1>
        <p className="text-primary">By {blogPost.author}</p>
        <p className="text-primary">
          Published:{" "}
          {new Date(blogPost.published_at).toLocaleDateString("en-US", {
            day: "numeric",
            year: "numeric",
            month: "long",
          })}
        </p>
        <p className="mb-6 text-primary flex items-center gap-1">
          <Clock className="text-primary h-4 w-4" />
          {blogPost.read_time_minutes} mins
        </p>
        <Image
          src={imageURL(blogPost.main_image.asset._ref)}
          alt={blogPost.main_image.alt || "Blog Image"}
          width={1200}
          height={800}
          className="w-full h-auto object-cover mb-8 max-h-[400px]"
        />
        <PortableText
          value={blogPost.content}
          className="leading-7 text-primary mt-6 mb-10 prose lg:prose-lg"
          components={components}
        />
        {relatedSummaries?.length ? (
          <HorizontalListView
            title="Related Summaries"
            items={relatedSummaries || []}
          />
        ) : null}
        <Newsletter />
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default BlogPostPage;
