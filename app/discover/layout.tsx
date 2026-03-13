import { Metadata } from "@/types/seo";

export const metadata: Metadata = {
  title: "Eloquent Shelf | Discover",
  description:
    "Find your next great read with Eloquent Shelf's AI-powered book recommendation tool. Ideal to find your next favourite book or a thoughtful gift for someone special.",
  openGraph: {
    images: [
      {
        url: `/discover/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `Discover tool OG Image`,
      },
    ],
  },
  metadataBase: new URL(`https://www.eloquentshelf.com`),
  alternates: {
    canonical: "https://www.eloquentshelf.com/discover",
  },
};

const DiscoverLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default DiscoverLayout;
