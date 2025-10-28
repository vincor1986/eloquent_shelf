import Image from "next/image";
import { notFound } from "next/navigation";

import { Zap, Lightbulb } from "lucide-react";

import SummaryHeader from "@/components/summary/SummaryHeader";
import SummaryPanel from "@/components/summary/SummaryPanel";
import BuyLinkContainer from "@/components/summary/BuyLinkContainer";
import Rating from "@/components/general/Rating";
import SummaryOverview from "@/components/summary/SummaryOverview";
import Outcomes from "@/components/summary/Outcomes";

import imageURL from "@/lib/cms/imageURL";
import { fetchSummaryWithSlug } from "@/actions/cms";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const baseBCItems = [
  { label: "Home", href: "/" },
  { label: "Topics", href: "/topics" },
];

const SummaryPage = async ({ params }) => {
  const { slug } = await params;

  const { error, data } = await fetchSummaryWithSlug(slug);

  if (error) {
    return notFound();
  }

  const mainCat = data.categories[0].toLowerCase().replaceAll(" ", "-");
  const bcItems = [
    ...baseBCItems,
    { label: mainCat, href: `/topics/${mainCat}` },
  ];

  return (
    <section className="p-8">
      <Breadcrumbs items={bcItems} />
      <div className="flex gap-2">
        <div className="flex flex-col items-center justify-center mb-16">
          <Image
            src={imageURL(data.cover_image.asset._ref)}
            alt={data.title}
            priority
            width={200}
            height={800}
            className="w-[120px] h-auto lg:w-[200px] rounded-xs shadow-md"
          />
          <div className="mt-4">
            <Rating starRating={data.rating} count={data.ratings_count} />
          </div>
        </div>
        <div className="ml-8 lg:ml-16 w-full">
          <SummaryHeader {...data} />
          <div className="hidden mt-8 lg:block">
            <SummaryPanel {...data} />
          </div>
          <div className="mt-8">
            <BuyLinkContainer {...data} />
          </div>
        </div>
      </div>
      <div className="mt-8 lg:hidden">
        <SummaryPanel {...data} />
      </div>
      <div className="-mt-4 lg:-mt-4">
        <SummaryOverview {...data} />
      </div>
      <div className="p-4 flex flex-col lg:flex-row gap-8">
        <Outcomes
          title="What You'll Learn"
          learning_outcomes={data.learning_outcomes}
          Icon={Zap}
        />
        <Outcomes
          title="Key Takeaways"
          learning_outcomes={data.key_takeaways}
          Icon={Lightbulb}
        />
      </div>
      <div className="flex items-center justify-center mt-8">
        <BuyLinkContainer {...data} />
      </div>
    </section>
  );
};

export default SummaryPage;
