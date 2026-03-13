import DCMA from "@/components/legal/DCMA";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const DCMAPage = () => {
  return (
    <section className="p-4">
      <Breadcrumbs
        items={[
          { label: "Legal", href: "/legal" },
          {
            label: "DCMA & Takedown Policy",
            href: "/legal/DCMA",
          },
        ]}
      />
      <DCMA />
    </section>
  );
};

export default DCMAPage;
