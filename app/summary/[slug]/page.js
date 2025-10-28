import { notFound } from "next/navigation";

import { fetchSummaryWithSlug } from "@/actions/cms";
import SummaryHeader from "@/components/summary/SummaryHeader";
import Image from "next/image";
import imageURL from "@/lib/cms/imageURL";
import SummaryPanel from "@/components/summary/SummaryPanel";
import BuyLinkContainer from "@/components/summary/BuyLinkContainer";
import Rating from "@/components/general/Rating";
import SummaryOverview from "@/components/summary/SummaryOverview";

const SummaryPage = async ({ params }) => {
  const { slug } = await params;

  const { error, data } = await fetchSummaryWithSlug(slug);

  if (error) {
    return notFound();
  }

  return (
    <section className="p-8 ">
      <div className="flex gap-2">
        <div className="flex flex-col items-center justify-center mb-16">
          <Image
            src={imageURL(data.cover_image.asset._ref)}
            alt={data.title}
            priority
            width={200}
            height={800}
            className="w-[120px] h-auto md:w-[200px] rounded-md shadow-lg"
          />
          <div className="mt-4">
            <Rating starRating={data.rating} count={data.ratings_count} />
          </div>
        </div>
        <div className="ml-8 md:ml-16 w-full">
          <SummaryHeader {...data} />
          <div className="hidden mt-8 md:block">
            <SummaryPanel {...data} />
          </div>
          <div className="mt-8">
            <BuyLinkContainer {...data} />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <SummaryPanel {...data} />
      </div>
      <div className="-mt-4 md:-mt-18">
        <SummaryOverview {...data} />
      </div>
    </section>
  );
};

export default SummaryPage;
