import Image from "next/image";

import { Clock } from "lucide-react";

import imageURL from "@/lib/cms/imageURL";
import Link from "next/link";

const BlogListItem = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="flex flex-col p-4 border border-zinc-200 rounded-md hover:shadow-lg hover:bg-secondary/10 transition-all duration-300">
        <h1 className="text-primary text-xl mb-2">
          {blog.title}
          <span className="text-secondary">
            {blog.subtitle ? ": " + blog.subtitle : ""}
          </span>
        </h1>
        <Image
          src={imageURL(blog.main_image.asset._ref)}
          alt={blog.title}
          width={600}
          height={400}
          className="rounded-md mb-4"
        />
        <p className="text-primary">By {blog.author}</p>
        <p className="text-primary">
          Published:{" "}
          {new Date(blog.published_at).toLocaleDateString("en-US", {
            day: "numeric",
            year: "numeric",
            month: "long",
          })}
        </p>
        <p className="mb-6 text-primary flex items-center gap-1">
          <Clock className="text-primary h-4 w-4" />
          {blog.read_time_minutes} mins
        </p>
      </div>
    </Link>
  );
};

export default BlogListItem;
