import Image from "next/image";

import bookTree from "@/public/images/graphics/book-tree.png";

const IntroSection = () => {
  return (
    <div className="mx-auto col-span-1 row-span-3 flex flex-col max-w-[350px] md:max-w-full">
      <div className="flex">
        <div className="relative flex flex-col w-full">
          <div className="bg-primary p-4 w-full">
            <h1 className="text-2xl text-white text-center">
              Curated Non-Fiction for <span className="italic">Curious</span>{" "}
              Minds
            </h1>
          </div>
          <Image
            src={bookTree}
            alt="Illustration of a tree with books for leaves"
            className="w-full h-auto mx-auto md:mx-0 md:mr-10"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
