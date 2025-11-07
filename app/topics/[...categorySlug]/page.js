import { notFound } from "next/navigation";

import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ListGrid from "@/components/list-view/ListGrid";
import SectionTitle from "@/components/ui/SectionTitle";
import CategoryImage from "@/components/list-view/CategoryImage";

import { fetchSummariesByCategory } from "@/actions/cms";

const baseBCItems = [{ label: "Topics", href: "/topics" }];

export const generateMetadata = async ({ params }) => {
  const { categorySlug } = await params;

  const { data, catName } = await fetchSummariesByCategory(categorySlug);

  if (!catName || data.length === 0) {
    return { title: "Eloquent Shelf | Category Not Found" };
  }

  return {
    title: `Eloquent Shelf | ${data.length} book${data.length > 1 ? "s" : ""} about ${catName}`,
    description: `Explore ${data.length} curated non-fiction book summaries and recommendations about ${catName} on Eloquent Shelf.`,
  };
};

const CategoryPage = async ({ params }) => {
  const { categorySlug } = await params;

  const {
    error,
    data: summaries,
    catName,
  } = await fetchSummariesByCategory(categorySlug);

  if (error || summaries.length === 0) {
    return notFound();
  }

  const bcItems = [
    ...baseBCItems,
    { label: categorySlug.toString(), href: `#` },
  ];

  return (
    <section className="p-4">
      <Breadcrumbs items={bcItems} />
      <CategoryImage categorySlug={categorySlug.toString()} />
      <SectionTitle
        title={`Non-fiction in ${catName}`}
        desc={`${summaries.length} wonderful book${summaries.length > 1 ? "s" : ""} about ${catName}.`}
      />
      <ListGrid itemsArr={summaries} />
    </section>
  );
};

export default CategoryPage;
