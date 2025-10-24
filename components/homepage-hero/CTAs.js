import Link from "next/link";
import Image from "next/image";

import baroquePattern from "@/public/images/graphics/baroque.jpg";

const CTAs = () => {
  return (
    <div className="row-span-3 col-span-1 mx-auto max-w-[350px] flex flex-col items-center gap-2">
      <div className="relative bg-forest py-8 px-4">
        <Image
          src={baroquePattern}
          alt="Baroque pattern"
          className="absolute inset-0 w-full h-full object-cover opacity-5"
        />
        <p className="text-white text-center text-lg">
          Discover the world&apos;s most insightful books — curated, summarized,
          and connected by theme, idea, and relevance.
        </p>
        <br />
        <p className="text-white text-center text-lg">
          Learn better, think deeper, and read eloquently.
        </p>
      </div>
      <Link href="/topics" className="mt-8">
        <button className="bg-primary text-white rounded-sm px-4 py-2 cursor-pointer hover:bg-primary/80 transition-colors duration-300">
          Explore the shelves
        </button>
      </Link>
      <div className="relative my-4 w-5/6 h-1 rounded-full bg-secondary/20">
        <p className="px-3 py-1 bg-white absolute top-0 left-1/2 -translate-1/2 text-primary text-2xl">
          &
        </p>
      </div>
      <Link href="/newsletter">
        <button className="bg-light-gold text-primary rounded-sm px-4 py-2 cursor-pointer hover:bg-gold transition-colors duration-300">
          Subscribe to our newsletter
        </button>
      </Link>
      <p className="text-zinc-500 italic text-sm mb-6">
        Free. Thought-provoking. Delivered weekly.
      </p>
    </div>
  );
};

export default CTAs;
