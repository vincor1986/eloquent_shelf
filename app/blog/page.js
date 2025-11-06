import SectionTitle from "@/components/ui/SectionTitle";
import { TrafficCone } from "lucide-react";

const BlogPage = () => {
  return (
    <section className="p-4">
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
