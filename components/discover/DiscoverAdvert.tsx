import Link from "next/link";
import Image from "next/image";

import { Telescope } from "lucide-react";

import aiSymbol from "@/public/images/icons/ai.png";

const DiscoverAdvert = () => {
  return (
    <Link href="/discover">
      <div className="relative flex items-center flex-col gap-4 w-full p-6 mt-12 lg:mt-0 rounded-lg overflow-hidden text-primary">
        <div className="bg-secondary/10 absolute -top-10 -left-10 w-[150%] h-25 rotate-5" />
        <div className="bg-forest/30 absolute -bottom-10 -left-10 w-[150%] h-25 rotate-5" />
        <div className="w-min rounded-full mx-auto p-3 flex items-center justify-center">
          <Telescope className="relative z-15 w-10 h-10 text-primary fill-white" />
          <div className="relative z-10 -ml-3.75 -top-4 bg-primary w-13 h-13 rounded-full ">
            <Image
              src={aiSymbol}
              alt="Stars in sky"
              className="absolute top-1.5 right-1.5 h-8 w-8"
            />
          </div>
        </div>
        <h2 className="text-xl mb-2 text-primary text-center">
          Discover Your New Favourite Book!
        </h2>
        <p className="text-primary text-center">
          Answer 5 questions and let our AI discovery tool recommend your next
          read. It's free, takes less than a minute and could change your life.
        </p>
        <p className="text-secondary text-center">
          Perfect for you or a gift for someone thoughtful.
        </p>
        <button className="relative bg-gold hover:bg-light-gold text-white px-4 py-2 rounded-md mt-4 block mx-auto cursor-pointer z-15 mb-6">
          Try It Now
        </button>
      </div>
    </Link>
  );
};

export default DiscoverAdvert;
