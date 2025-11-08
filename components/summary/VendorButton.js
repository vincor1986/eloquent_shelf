import Image from "next/image";

import { ShoppingCart } from "lucide-react";

import getVendorURL from "@/lib/helpers/vendorURL";

import bookshopLogo from "@/public/images/logos/vendors/bookshop.png";
import amazonLogo from "@/public/images/logos/vendors/amazon.png";

import { getUserRegion } from "@/actions/general";

const VendorButton = async ({
  vendor,
  uk_isbn,
  us_isbn,
  amazon_UK_link,
  amazon_US_link,
}) => {
  const logo = vendor === "bookshop" ? bookshopLogo : amazonLogo;
  let name = vendor === "bookshop" ? "Bookshop.org" : "Amazon";

  const region = await getUserRegion();
  let url = getVendorURL(vendor, region === "GB" ? uk_isbn : us_isbn, region);

  if (vendor === "amazon") {
    url = region === "GB" ? amazon_UK_link : amazon_US_link;
    name = region === "GB" ? "Amazon UK" : "Amazon";
  }

  const bg = vendor === "bookshop" ? "bg-primary" : "bg-[#d0871b]";

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button
        className={`w-full md:max-w-[250px] ${bg} text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-secondary transition-colors duration-300 cursor-pointer`}
      >
        <ShoppingCart className="w-6 h-6 text-white" />
        <Image src={logo} className="h-6 w-6" alt={`${vendor} logo`} /> via{" "}
        {name}
      </button>
    </a>
  );
};

export default VendorButton;
