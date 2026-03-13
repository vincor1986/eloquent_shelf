import { Metadata } from "@/types/seo";

export const metadata: Metadata = {
  title: "Eloquent Shelf | Bookmarks",
  description:
    "View your saved book summaries and recommendations on Eloquent Shelf.",
  metadataBase: new URL(`https://www.eloquentshelf.com`),
  alternates: {
    canonical: "https://www.eloquentshelf.com/bookmarks",
  },
};

const BookmarksLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default BookmarksLayout;
