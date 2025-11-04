import VendorButton from "./VendorButton";

const BuyLinkContainer = ({ buy_links }) => {
  const vendors = Object.keys(buy_links);
  const activeVendors = vendors.filter((vendor) => buy_links[vendor]);
  const isbn = buy_links.bookshop.split("/").pop();

  return (
    <div className="flex gap-3 items-center">
      {activeVendors.map((vendor) => (
        <VendorButton key={vendor} vendor={vendor} isbn={isbn} />
      ))}
    </div>
  );
};

export default BuyLinkContainer;
