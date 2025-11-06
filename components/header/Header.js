"use client";

import Image from "next/image";
import { useState } from "react";

import mainLogo from "@/public/images/logos/main-logo.png";
import Link from "next/link";

import { Bookmark, MenuIcon } from "lucide-react";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative flex items-center justify-between h-14 w-full py-2 px-4 border-b-2 border-light-gold md:px-20 z-40">
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
      <Navigation />
      {/* <BurgerIcon setShowMenu={setShowMenu} /> */}
      <MenuIcon
        className="text-primary mr-2 cursor-pointer h-10 w-10 lg:hidden"
        onClick={() => setShowMenu(true)}
      />
      {showMenu ? <MobileMenu closeMenu={() => setShowMenu(false)} /> : null}
    </div>
  );
};

export default Header;
