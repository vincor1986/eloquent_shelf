import { Book } from "@/types/book";
import CTAs from "./CTAs";
import Featured from "./Featured";
import IntroSection from "./IntroSection";

type Props = {
  featuredSummary: Book | null;
}

const Hero = ({ featuredSummary }: Props) => {
  return (
    <div className="mx-auto max-w-full grid gap-4 grid-cols-1 lg:grid-cols-3 grid-rows-3 lg:mt-18">
      <IntroSection />
      <CTAs />
      {featuredSummary && <Featured {...featuredSummary} />}
    </div>
  );
};

export default Hero;
