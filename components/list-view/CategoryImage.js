import topics from "@/data/topics";
import Image from "next/image";

const CategoryImage = ({ categorySlug }) => {
  const topicImage = topics.find((topic) => topic.slug === categorySlug)?.image;

  if (!topicImage) {
    return null; // or a default image
  }

  return (
    <Image
      src={topicImage}
      alt={`icon for ${categorySlug}`}
      className="absolute top-8 right-4 opacity-10 h-[100px] w-auto invert"
    />
  );
};

export default CategoryImage;
