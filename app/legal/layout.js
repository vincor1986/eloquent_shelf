export const metadata = {
  title: "Eloquent Shelf | Legal",
  description:
    "Understand the legal terms and conditions of using Eloquent Shelf.",
  metadataBase: new URL(`https://www.eloquentshelf.com`),
  alternates: {
    canonical: "/legal",
  },
};

const LegalLayout = ({ children }) => {
  return <>{children}</>;
};

export default LegalLayout;
