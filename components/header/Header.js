import Image from "next/image";

import mainLogo from "@/public/images/logos/main-logo.png";
import BurgerIcon from "./BurgerIcon";
import Link from "next/link";
import { Bookmark } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between h-14 w-full py-2 px-4 border-b-2 border-light-gold md:px-20">
      <div>
        <Link href="/" className="flex items-center">
          <Image
            src={mainLogo}
            className="h-auto"
            alt="Eloquent Shelf Logo"
            width={150}
            priority
          />
          <Bookmark className="h-5.25 relative -top-0.5 text-light-gold/50 fill-light-gold " />
        </Link>
      </div>
      <BurgerIcon />
    </div>
  );
};

export default Header;
