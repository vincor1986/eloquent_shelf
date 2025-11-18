import Image from "next/image";

import TextLink from "../ui/TextLink";

import imageURL from "@/lib/cms/imageURL";

const components = {
  types: {
    image: ({ value }) => (
      <figure className="mx-auto my-6 w-full max-w-[800px] flex items-center flex-col">
        <Image
          src={imageURL(value.asset._ref)}
          alt={value.alt || "Blog image"}
          className="rounded-md"
          width={600}
          height={400}
        />
        {value.caption && (
          <figcaption className="text-sm text-gray-500 mt-2">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <TextLink href={value.href}>{children}</TextLink>
    ),
  },
  block: {
    h5: ({ children }) => (
      <div className="w-full">
        <h5 className="text-lg lg:text-xl text-primary mt-8">{children}</h5>
        <div className="h-1 bg-light-gold/70 mb-4" />
      </div>
    ),
    normal: ({ children }) => (
      <p className="leading-7 mb-4 text-primary lg:text-lg">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-400 pl-4 italic text-secondary my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6">{children}</ol>,
  },
};

export default components;
