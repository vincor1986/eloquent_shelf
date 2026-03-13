import PrivacyPolicy from "@/components/legal/PrivacyPolicy";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const PrivacyPolicyPage = () => {
  return (
    <section className="p-4">
      <Breadcrumbs
        items={[
          { label: "Legal", href: "/legal" },
          { label: "Privacy Policy", href: "/legal/privacy-policy" },
        ]}
      />
      <PrivacyPolicy />
    </section>
  );
};

export default PrivacyPolicyPage;
