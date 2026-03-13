import Image from "next/image";

import { Clock } from "lucide-react";

import imageURL from "@/lib/cms/imageURL";
import Link from "next/link";
import { Blog } from "@/types/blog";

type Props = {
  blog: Blog;
}

const BlogListItem = ({ blog }: Props) => {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="grid grid-cols-1  grid-rows-5 lg:grid-rows-8 p-4 border border-zinc-200 rounded-md hover:shadow-lg hover:bg-secondary/10 transition-all duration-300">
        <h1 className="text-primary text-xl row-span-1 lg:row-span-2 line-clamp-3 text-ellipsis">
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
          className="rounded-md mb-4 row-span-3 lg:row-span-4 object-cover"
        />
        <div className="flex flex-col gap-1 row-span-1 lg:row-span-2">
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
      </div>
    </Link>
  );
};

export default BlogListItem;
