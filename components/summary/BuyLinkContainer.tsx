import { Book } from "@/types/book";
import VendorButton from "./VendorButton";

const VENDORS: ["bookshop", "amazon"] = ["bookshop", "amazon"];
 
const BuyLinkContainer = ({
  BS_UK_isbn_13,
  BS_US_isbn_13,
  amazon_UK_link,
  amazon_US_link,
}: Book) => {
  return (
    <div className="flex flex-col mb-4 md:mb-0 items-end md:flex-row gap-3 md:items-center">
      {VENDORS.map((vendor) => (
        <VendorButton
          key={vendor}
          vendor={vendor}
          uk_isbn={BS_UK_isbn_13}
          us_isbn={BS_US_isbn_13}
          amazon_UK_link={amazon_UK_link}
          amazon_US_link={amazon_US_link}
        />
      ))}
    </div>
  );
};

export default BuyLinkContainer;
