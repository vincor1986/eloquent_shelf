import Image from "next/image";

import bookshopLogo from "@/public/images/logos/vendors/bookshop.png";

const VendorButton = ({ vendor, url }) => {
  const logo = vendor === "bookshop" ? bookshopLogo : null;
  const name = vendor === "bookshop" ? "Bookshop.org" : vendor;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button className="w-full md:max-w-[200px] bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-secondary transition-colors duration-300 cursor-pointer">
        <Image src={logo} className="h-6 w-6 " alt={`${vendor} logo`} /> via{" "}
        {name}
      </button>
    </a>
  );
};

export default VendorButton;
