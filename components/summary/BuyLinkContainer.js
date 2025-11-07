import VendorButton from "./VendorButton";

const VENDORS = ["bookshop"];

const BuyLinkContainer = ({ BS_UK_isbn_13, BS_US_isbn_13 }) => {
  return (
    <div className="flex gap-3 items-center">
      {VENDORS.map((vendor) => (
        <VendorButton
          key={vendor}
          vendor={vendor}
          uk_isbn={BS_UK_isbn_13}
          us_isbn={BS_US_isbn_13}
        />
      ))}
    </div>
  );
};

export default BuyLinkContainer;
