export const metadata = {
  title: "Eloquent Shelf | Manage Cookies",
  description:
    "Manage your cookie preferences for a personalized browsing experience.",
  metadataBase: new URL(`https://www.eloquentshelf.com`),
  alternates: {
    canonical: "/manage-cookies",
  },
};

const CookiesLayout = ({ children }) => {
  return <>{children}</>;
};

export default CookiesLayout;
