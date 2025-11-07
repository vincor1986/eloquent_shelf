import Image from "next/image";

import bookshelfImage from "@/public/images/graphics/bookshelf.jpg";
import SectionTitle from "@/components/ui/SectionTitle";
import TextLink from "@/components/ui/TextLink";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata = {
  title: "Eloquent Shelf | About",
  description:
    "About Eloquent Shelf, our mission, and how we aim to connect curious minds with curated non-fiction books.",
};

const AboutPage = () => {
  return (
    <section className="lg:p4 pb-16">
      <Breadcrumbs items={[{ label: "about", href: "/about" }]} />
      <SectionTitle title="About Eloquent Shelf" />
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={bookshelfImage}
          alt="Bookshelf"
          className="min-h-full min-w-full object-cover"
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-primary to-light-gold/0" />
        <div className="absolute bottom-6 left-0 w-1/2 p-4 lg:left-6">
          <p className="text-white text-xl lg:text-4xl">
            An <span className="italic">eloquent shelf</span>
          </p>
          <p className="text-white text-xl lg:text-4xl">
            is an <span className="italic">eloquent self</span>.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full mt-6 gap-4 text-primary">
        <p>
          <span className="text-2xl">O</span>ur ambition at Eloquent Shelf is to
          create a haven for introspective readers who believe that what we read
          shapes who we become. A book can change the way we think and feel
          about the world around us - and we aim to collate such non-fiction for
          the curious and reflective mind.
        </p>
        <p>
          Books have the power to spark creativity and inspire growth. Whether
          you&apos;re searching for a new favourite read or just want to broaden
          your horizons, Eloquent Shelf is here to facilitate that journey.
        </p>
        <p>
          Our <TextLink href="/topics">curated lists</TextLink> are categorised
          by topic and subject to provide a recommended reading path to develop
          a solid overview of a given field. Our{" "}
          <TextLink href="/discover">AI recommendation tool</TextLink> asks you
          for your preferences, and then searches the world of non-fiction to
          find the perfect book for you or a loved one. These features are
          designed to help you navigate the vast landscape of non-fiction
          literature with ease and confidence, and to ensure that you always
          find books that resonate with your interests and aspirations.
        </p>
        <p>
          Journey with us, and discover the power of non-fiction to transform
          lives, minds and the future.
        </p>
        <br />
        <p className="text-center">
          If you&apos;d like to get in touch with us about anything at all -
          please don&apos;t hesitate to do so by completing{" "}
          <TextLink href="/contact">this form</TextLink>.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
