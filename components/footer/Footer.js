import Image from "next/image";

import footerLogo from "@/public/images/logos/logo-white.png";

const Footer = () => {
  return (
    <div className="w-full p-4 bg-gold">
      <div className="bg-white p-2 max-w-1/3 rounded-md flex items-center justify-center">
        <Image
          src={footerLogo}
          alt="Eloquent Shelf Logo"
          width={200}
          className="h-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
