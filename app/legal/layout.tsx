import { Metadata } from "@/types/seo";

export const metadata: Metadata = {
  title: "Eloquent Shelf | Legal",
  description:
    "Understand the legal terms and conditions of using Eloquent Shelf.",
  metadataBase: new URL(`https://www.eloquentshelf.com`),
  alternates: {
    canonical: "https://www.eloquentshelf.com/legal",
  },
};

const LegalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default LegalLayout;
