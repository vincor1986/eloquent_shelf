import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductJsonLd, ReviewJsonLd } from "next-seo";

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

const baseBCItems = [{ label: "Topics", href: "/topics" }];

export const generateMetadata = async ({ params }) => {
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
          url: `summary/${slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${mainSummary.title} OG Image`,
        },
      ],
    },
  };
};

const SummaryPage = async ({ params }) => {
  const { slug } = await params;

  const { error, data: mainSummary } = await fetchSummaryWithSlug(slug);

  if (error || !mainSummary) {
    return notFound();
  }

  const mainCat = mainSummary.categories[0].toLowerCase().replaceAll(" ", "-");
  const bcItems = [
    ...baseBCItems,
    { label: mainCat, href: `/topics/${mainCat}` },
    { label: mainSummary.title, href: `#` },
  ];

  const authorName = mainSummary.author[0];
  const { error: authorError, data: authorSummaries } =
    await fetchSummariesByAuthor(authorName);

  const { data: categorySummaries } = await fetchSummariesByCategory(
    mainSummary.categories[0].toLowerCase().replace(/\s+/, "-")
  );

  const useAuthor = authorSummaries.length > 1 && !authorError;

  const othersArr = useAuthor
    ? authorSummaries.filter((i) => i.slug !== slug && i.cover_image)
    : categorySummaries.filter((i) => i.slug !== slug && i.cover_image);

  return (
    <>
      <ProductJsonLd
        productName={mainSummary.title}
        description={mainSummary.description}
        brand={formatStringList(mainSummary.author)}
        images={imageURL(mainSummary.cover_image.asset._ref)}
        sku={mainSummary.isbn_13}
      />
      <ReviewJsonLd
        url={`https://eloquentshelf.com/summary/${slug}`}
        author="Eloquent Shelf"
        reviewBody={mainSummary.summary}
        reviewRating={{
          ratingValue: mainSummary.rating,
          bestRating: 5,
          worstRating: 1,
        }}
        datePublished={mainSummary.published_at}
        itemReviewed={{
          author: {
            name: formatStringList(mainSummary.author),
            sameAs: mainSummary.amazon_UK_link,
          },
          datePublished: mainSummary.published_at,
          appearance: {
            url: `https://eloquentshelf.com/summary/${slug}`,
            headline: mainSummary.title,
            datePublished: mainSummary.published_at,
            author: formatStringList(mainSummary.author),
            publisher: {
              name: mainSummary.publisher,
            },
          },
        }}
      />
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
          description={
            useAuthor
              ? "Explore more works by this author."
              : "Discover more summaries in this category."
          }
        />
      </section>
    </>
  );
};

export default SummaryPage;
