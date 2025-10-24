import CTAs from "./CTAs";
import IntroSection from "./IntroSection";

const Hero = () => {
  return (
    <div className="mx-auto max-w-full grid gap-4 grid-cols-1 md:grid-cols-3 grid-rows-3">
      <IntroSection />
      <CTAs />
      <div className="border border-primary row-span-2 col-span-1 w-full h-full flex items-center justify-center">
        <p className="text-center">Feature book</p>
      </div>
      <div className="border border-primary row-span-1 col-span-1 w-full h-full flex items-center justify-center">
        <p className="text-center">WOTD</p>
      </div>
    </div>
  );
};

export default Hero;
