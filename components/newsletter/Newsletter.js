import Image from "next/image";

import SectionTitle from "../ui/SectionTitle";

import newsletterOwl from "@/public/images/graphics/newsletter-owl.png";
import NewsletterForm from "./NewsletterForm";

const Newsletter = () => {
  return (
    <section className="pt-8 w-full" id="newsletter">
      <SectionTitle title="Sign up for our Newsletter" />
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="relative flex items-center justify-center w-full md:w-1/3">
          <span className="absolute top-1/2 left-1/2 -translate-1/2 bg-light-forest h-40 w-40 rounded-full opacity-30 animate-blob animation-delay-2000 -z-10"></span>
          <Image
            src={newsletterOwl}
            alt="Eloquent Shelf Owl delivering a letter via its talons"
            className=""
            width={400}
          />
        </div>
        <div className="flex flex-col w-full items-center justify-center max-w-xl text-center md:text-left">
          <p className="mb-4 text-lg text-primary">
            Join our weekly newsletter to stay updated on the latest non-fiction
            recommendations and insights.
          </p>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
