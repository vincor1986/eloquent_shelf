import Image from "next/image";
import { notFound } from "next/navigation";

import { Zap, Lightbulb } from "lucide-react";

import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SummaryHeader from "@/components/summary/SummaryHeader";
import Rating from "@/components/general/Rating";
import SummaryPanel from "@/components/summary/SummaryPanel";
import BuyLinkContainer from "@/components/summary/BuyLinkContainer";
import SummaryOverview from "@/components/summary/SummaryOverview";
import Outcomes from "@/components/summary/Outcomes";
import HorizontalListView from "@/components/list-view/HorizontalListView";
import SummaryTagList from "@/components/summary/SummaryTagList";
import ActionsSection from "@/components/summary/ActionsSection";

import imageURL from "@/lib/cms/imageURL";
import formatStringList from "@/lib/helpers/formatStringList";

import {
  fetchSummariesByAuthor,
  fetchSummariesByCategory,
  fetchSummaryWithSlug,
} from "@/actions/cms";
import { getUserRegion } from "@/actions/general";
import getVendorURL from "@/lib/helpers/vendorURL";

import { Breadcrumb } from "@/types/ui";
import { Metadata } from "@/types/seo";

type Props = {
  params: Promise<{ slug: string}>
}

const baseBCItems : Breadcrumb[] = [{ label: "Topics", href: "/topics" }];

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;

  const { data: mainSummary } = await fetchSummaryWithSlug(slug);

  if (!mainSummary) {
    return { title: "Eloquent Shelf | Summary Not Found" };
  }

  return {
    title: `Eloquent Shelf | ${mainSummary.title}`,
    description: mainSummary.description,
    openGraph: {
      images: [
        {
          url: `https://www.eloquentshelf.com/summary/${slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${mainSummary.title} OG Image`,
        },
      ],
    },
    metadataBase: new URL(`https://www.eloquentshelf.com`),
    alternates: {
      canonical: `https://www.eloquentshelf.com/summary/${slug}`,
    },
  };
};

const SummaryPage = async ({ params }: Props) => {
  const { slug } = await params;

  const region = await getUserRegion();

  const { error, data: mainSummary } = await fetchSummaryWithSlug(slug);

  if (error || !mainSummary) {
    return notFound();
  }

  const mainCat = mainSummary.categories[0].toLowerCase().replaceAll(" ", "-");
  
  const bcItems: Breadcrumb[] = [
    ...baseBCItems,
    { label: mainCat, href: `/topics/${mainCat}` },
    { label: mainSummary.title, href: `#` },
  ];

  const authorName = mainSummary.author[0];
  const { error: authorError, data: authorSummaries } =
    await fetchSummariesByAuthor(authorName);

  const { data: categorySummaries } = await fetchSummariesByCategory(
    mainSummary.categories[0].toLowerCase().replace(/\s+/, "-"),
  );

  const useAuthor = !authorError && authorSummaries && authorSummaries.length > 1;

  const othersArr = useAuthor
    ? authorSummaries.filter((i) => i.slug !== slug && i.cover_image)
    : categorySummaries ? categorySummaries.filter((i) => i.slug !== slug && i.cover_image) : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: `${mainSummary.title}${mainSummary.subtitle ? `: ${mainSummary.subtitle}` : ""}`,
    author: {
      "@type": "Person",
      name: formatStringList(mainSummary.author),
    },
    isbn: mainSummary.BS_UK_isbn_13,
    image: imageURL(mainSummary.cover_image.asset._ref),
    url: `https://eloquentshelf.com/summary/${mainSummary.slug}`,
    description: mainSummary.description,
    sameAs:
      region === "GB"
        ? [
            mainSummary.amazon_UK_link,
            getVendorURL("bookshop", mainSummary.BS_UK_isbn_13, region),
          ]
        : [
            mainSummary.amazon_US_link,
            getVendorURL("bookshop", mainSummary.BS_US_isbn_13, region),
          ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: mainSummary.rating,
      reviewCount: mainSummary.ratings_count,
    },
  };

  return (
    <>
      <section className="lg:p-6 pt-8">
        <Breadcrumbs items={bcItems} />
        <ActionsSection slug={mainSummary.slug} id={mainSummary._id} />
        <div className="flex gap-2">
          <div className="flex flex-col items-center justify-center mb-16 max-w-1/3">
            <Image
              src={imageURL(mainSummary.cover_image.asset._ref)}
              alt={mainSummary.title}
              priority
              width={200}
              height={800}
              className="w-[120px] max-w-full h-auto lg:w-[200px] rounded-xs shadow-md"
            />
            <div className="mt-4">
              <Rating
                starRating={mainSummary.rating}
                count={mainSummary.ratings_count}
              />
            </div>
          </div>
          <div className="ml-2 md:ml-8 lg:ml-16 w-full">
            <SummaryHeader {...mainSummary} />
            <div className="hidden mt-8 lg:block">
              <SummaryPanel {...mainSummary} />
            </div>
            <div className="mt-8">
              <BuyLinkContainer {...mainSummary} />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <SummaryTagList tagsArr={mainSummary.categories} />
        </div>
        <div className="mt-8 lg:hidden">
          <SummaryPanel {...mainSummary} />
        </div>
        <div className="-mt-4 lg:-mt-4">
          <SummaryOverview {...mainSummary} />
        </div>
        <div className="p-4 flex flex-col lg:flex-row gap-8">
          <Outcomes
            title="What You'll Learn"
            learning_outcomes={mainSummary.learning_outcomes}
            Icon={Zap}
          />
          <Outcomes
            title="Key Takeaways"
            learning_outcomes={mainSummary.key_takeaways}
            Icon={Lightbulb}
          />
        </div>
        <div className="flex items-center justify-center mt-8">
          <BuyLinkContainer {...mainSummary} />
        </div>
        <HorizontalListView
          title={
            useAuthor ? `Other Works by ${authorName}` : `More in ${mainCat}`
          }
          items={othersArr}
          desc={
            useAuthor
              ? "Explore more works by this author."
              : "Discover more summaries in this category."
          }
        />
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default SummaryPage;
