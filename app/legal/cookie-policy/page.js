import CookiePolicy from "@/components/legal/CookiePolicy";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const CookiePolicyPage = () => {
  return (
    <section className="p-4">
      <Breadcrumbs
        items={[
          { label: "Legal", href: "/legal" },
          { label: "Cookie Policy", href: "/legal/cookie-policy" },
        ]}
      />
      <CookiePolicy />
    </section>
  );
};

export default CookiePolicyPage;
