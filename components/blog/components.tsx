import Image from "next/image";

import TextLink from "../ui/TextLink";

import imageURL from "@/lib/cms/imageURL";

const components = {
  types: {
    image: ({ value }: { value: any }) => (
      <figure className="mx-auto my-12 w-max max-w-full flex flex-col items-center">
        <Image
          src={imageURL(value.asset._ref)}
          alt={value.alt || "Blog image"}
          className="rounded-md w-auto max-w-full"
          width={800}
          height={550}
        />
        {value.caption && (
          <figcaption className="text-sm text-gray-500 mt-2 text-left">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => <em className="italic">{children}</em>,
    link: ({ value, children }: { value: any; children: React.ReactNode }) => (
      <TextLink href={value.href}>{children}</TextLink>
    ),
  },
  block: {
    h5: ({ children }: { children: React.ReactNode }) => (
      <div className="w-full">
        <h5 className="text-lg lg:text-xl text-primary mt-8">{children}</h5>
        <div className="h-1 bg-light-gold/70 mb-4" />
      </div>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="leading-7 mb-4 text-primary lg:text-lg">{children}</p>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="border-l-4 border-gray-400 pl-4 italic text-secondary my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => <ul className="list-disc ml-6">{children}</ul>,
    number: ({ children }: { children: React.ReactNode }) => <ol className="list-decimal ml-6">{children}</ol>,
  },
};

export default components;
