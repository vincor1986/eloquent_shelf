import NewsletterTerms from "@/components/legal/NewletterTerms";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const NewsletterTermsPage = () => {
  return (
    <section className="p-4">
      <Breadcrumbs
        items={[
          { label: "Legal", href: "/legal" },
          {
            label: "Newsletter Terms",
            href: "/legal/newsletter-terms",
          },
        ]}
      />
      <NewsletterTerms />
    </section>
  );
};

export default NewsletterTermsPage;
