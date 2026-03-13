import AffiliateDisclosure from "@/components/legal/AffiliateDisclosure";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const AffiliateDisclosurePage = () => {
  return (
    <section className="p-4">
      <Breadcrumbs
        items={[
          { label: "Legal", href: "/legal" },
          {
            label: "Affiliate Disclosure",
            href: "/legal/affiliate-disclosure",
          },
        ]}
      />
      <AffiliateDisclosure />
    </section>
  );
};

export default AffiliateDisclosurePage;
