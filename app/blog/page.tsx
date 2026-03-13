import { notFound } from "next/navigation";

import BlogListItem from "@/components/blog/ListItem";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionTitle from "@/components/ui/SectionTitle";

import { fetchAllBlogPosts } from "@/actions/blog";

import { Metadata } from "@/types/seo";

export const metadata: Metadata = {
  title: "Eloquent Shelf | Blog",
  description:
    "Read more about the world of non-fiction, recommendations, and ideas on the Eloquent Shelf blog.",
  metadataBase: new URL(`https://www.eloquentshelf.com`),
  alternates: {
    canonical: "https://www.eloquentshelf.com/blog",
  },
};

const BlogPage = async () => {
  const { data: blogPosts } = await fetchAllBlogPosts();

  if (!blogPosts) {
    notFound();
  }

  return (
    <section className="lg:p-4 -mt-4">
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
      <SectionTitle
        title="The Eloquent Shelf Blog"
        desc="Read more about the world of non-fiction, recommendations, and ideas on the Eloquent Shelf blog."
      />
      <div className="pt-8 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogListItem blog={post} key={post._id} />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
