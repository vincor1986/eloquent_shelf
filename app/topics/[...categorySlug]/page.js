import { notFound } from "next/navigation";

import Breadcrumbs from "@/components/ui/Breadcrumbs";
import HorizontalListView from "@/components/list-view/HorizontalListView";
import { fetchSummariesByCategory } from "@/actions/cms";
import ListGrid from "@/components/list-view/ListGrid";
import SectionTitle from "@/components/ui/SectionTitle";
import CategoryImage from "@/components/list-view/CategoryImage";

const baseBCItems = [{ label: "Topics", href: "/topics" }];

const CategoryPage = async ({ params }) => {
  const { categorySlug } = await params;

  console.log("CategorySlug:", categorySlug);

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
      <SectionTitle title={`Non-fiction in ${catName}`} />
      <ListGrid itemsArr={summaries} />
    </section>
  );
};

export default CategoryPage;
