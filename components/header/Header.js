import Image from "next/image";

import mainLogo from "@/public/images/logos/main-logo.png";
import BurgerIcon from "./BurgerIcon";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between h-14 w-full py-2 px-4 border-b-2 border-light-gold md:px-20">
      <div>
        <Link href="/">
          <Image
            src={mainLogo}
            className="h-auto"
            alt="Eloquent Shelf Logo"
            width={150}
            priority
          />
        </Link>
      </div>
      <BurgerIcon />
    </div>
  );
};

export default Header;
