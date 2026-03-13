import { Metadata } from "@/types/seo";

export const metadata: Metadata = {
  title: "Eloquent Shelf | Manage Cookies",
  description:
    "Manage your cookie preferences for a personalized browsing experience.",
  metadataBase: new URL(`https://www.eloquentshelf.com`),
  alternates: {
    canonical: "https://www.eloquentshelf.com/manage-cookies",
  },
};

const CookiesLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default CookiesLayout;
