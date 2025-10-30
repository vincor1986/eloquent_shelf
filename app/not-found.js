import Image from "next/image";

import notFoundImage from "@/public/images/graphics/not-found.png";
import TextLink from "@/components/ui/TextLink";

const NotFoundPage = () => {
  return (
    <section className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center justify-center h-full w-full text-primary bg-parchment p-6">
      <div className="h-[200px] w-[200px] bg-white rounded-full overflow-hidden border-6 ring-6 ring-secondary border-primary">
        <Image
          src={notFoundImage}
          alt="Searching owl detective"
          className="h-full w-auto object-contain"
        />
      </div>
      <h1 className="my-8 text-2xl">404 | Page Not Found</h1>
      <p className="text-lg text-center max-w-[600px]">
        Sorry, we couldn't find the page or resource you're looking for. Please
        check the URL or return to the <TextLink href="/">homepage</TextLink>.
      </p>
    </section>
  );
};

export default NotFoundPage;
