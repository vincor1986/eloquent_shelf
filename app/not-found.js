import Image from "next/image";

import notFoundImage from "@/public/images/graphics/not-found.png";
import TextLink from "@/components/ui/TextLink";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen text-primary bg-parchment">
      <div className="h-[300px] w-[300px] bg-white rounded-full overflow-hidden border-6 ring-6 ring-secondary border-primary">
        <Image
          src={notFoundImage}
          alt="Searching owl detective"
          className="h-full w-auto object-contain"
        />
      </div>
      <h1 className="my-8 text-2xl">404 | Page Not Found</h1>
      <p className="text-lg text-center">
        Sorry, we couldn't find the page or resource you're looking for. Please
        check the URL or return to the <TextLink href="/">homepage</TextLink>.
      </p>
    </section>
  );
};

export default NotFoundPage;
