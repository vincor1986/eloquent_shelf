import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionTitle from "@/components/ui/SectionTitle";
import { TrafficCone } from "lucide-react";

export const metadata = {
  title: "Eloquent Shelf | Blog",
  description:
    "Read more about the world of non-fiction, recommendations, and ideas on the Eloquent Shelf blog.",
  metadataBase: new URL("https://www.eloquentshelf.com/blog"),
  alternates: {
    canonical: "/blog",
  },
};

const BlogPage = () => {
  return (
    <section className="lg:p-4 -mt-4">
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
      <SectionTitle title="The Eloquent Shelf Blog" />
      <div className="pt-30 h-full w-full flex flex-col items-center justify-center">
        <TrafficCone className="text-primary fill-light-gold h-22 w-22" />
        <h3 className="text-primary mt-4">
          Blog coming soon. Please check back in a few days.
        </h3>
      </div>
    </section>
  );
};

export default BlogPage;
