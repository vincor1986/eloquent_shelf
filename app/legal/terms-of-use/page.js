import TermsOfUse from "@/components/legal/TermsOfUse";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const TermsOfUsePage = () => {
  return (
    <section className="p-4">
      <Breadcrumbs
        items={[
          { label: "Legal", href: "/legal" },
          { label: "Terms of use", href: "/legal/terms-of-use" },
        ]}
      />
      <TermsOfUse />
    </section>
  );
};

export default TermsOfUsePage;
