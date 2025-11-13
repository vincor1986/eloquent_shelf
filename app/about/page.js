import Image from "next/image";

import bookshelfImage from "@/public/images/graphics/bookshelf.jpg";
import SectionTitle from "@/components/ui/SectionTitle";
import TextLink from "@/components/ui/TextLink";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata = {
  title: "Eloquent Shelf | About",
  description:
    "About Eloquent Shelf, our mission, and how we aim to connect curious minds with curated non-fiction books.",
  metadataBase: new URL("https://www.eloquentshelf.com/about"),
  alternates: {
    canonical: "/about",
  },
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
          create a haven for thoughtful readers — for those who believe that
          what we read shapes who we become.
        </p>
        <p>
          Books have the power to change how we see, think, and feel about the
          world, and our purpose is to curate those that do.
        </p>
        <p>
          Whether you&apos;re seeking a new favourite read or simply wish to
          broaden your horizons, Eloquent Shelf helps you explore the finest
          works of insight and imagination.
        </p>
        <p>
          Our <TextLink href="/topics">curated collections</TextLink> are
          arranged by theme to guide your learning journey — offering a clear
          path to understanding each field more deeply. Our{" "}
          <TextLink href="/discover">AI recommendation tool</TextLink> invites
          you to share your interests and then searches the literary world to
          find titles that align with your curiosity and aspirations.
        </p>
        <p>
          Every feature is designed to help you navigate the vast landscape of
          non-fiction with confidence — so that you can spend less time
          searching, and more time discovering.
        </p>
        <p>
          Journey with us, and rediscover the quiet power of books to transform
          lives, minds, and the future.
        </p>
        <br />
        <p className="text-center">
          If you&apos;d like to reach out, we&apos;d love to hear from you —
          simply fill out our <TextLink href="/contact">contact form</TextLink>.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
