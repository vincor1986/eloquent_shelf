export const metadata = {
  title: "Eloquent Shelf | Bookmarks",
  description:
    "View your saved book summaries and recommendations on Eloquent Shelf.",
  metadataBase: new URL(`https://www.eloquentshelf.com`),
  alternates: {
    canonical: "/bookmarks",
  },
};

const BookmarksLayout = ({ children }) => {
  return <>{children}</>;
};

export default BookmarksLayout;
