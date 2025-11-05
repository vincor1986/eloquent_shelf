import Image from "next/image";
import Link from "next/link";

import socialLinks from "@/data/social";

import logo from "@/public/images/logos/circle-white.png";

const Footer = () => {
  return (
    <div className="w-full p-4 pt-8 bg-primary border-t-8 border-light-gold">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around mb-6 lg:max-w-[900px] lg:mx-auto">
        <div className="hidden lg:flex items-center justify-center w-1/3">
          <div className="hidden lg:block p-3 rounded-full bg-white overflow-hidden">
            <Image
              src={logo}
              alt="Eloquent Shelf logo"
              className="h-24 w-auto"
            />
          </div>
        </div>
        <div className="flex lg:w-1/3 flex-col gap-2 items-center justify-center text-white text-sm mb-8 lg:mb-0">
          <Link
            href="/about"
            className="hover:text-gold transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-gold transition-colors duration-300"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="hover:text-gold transition-colors duration-300"
          >
            Blog
          </Link>
          <Link
            href="https://uk.bookshop.org/a/16540/gift_cards"
            target="blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors duration-300"
          >
            Gift Cards
          </Link>
          <Link
            href="/cookies"
            className="hover:text-gold transition-colors duration-300"
          >
            Manage Cookies
          </Link>
        </div>
        <div className="w-full flex flex-col items-center justify-center lg:w-1/3">
          <div className="mx-auto flex flex-col w-min mb-6">
            <p className="text-white w-full text-center">Follow us</p>
            <div className="flex gap-4 mt-2 mb-4">
              {socialLinks.map((link) => {
                return (
                  <Link
                    href={link.url}
                    key={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center justify-center h-10 w-10 bg-light-gold rounded-full hover:bg-gold transition-colors duration-300 cursor-pointer">
                      <Image
                        src={link.image}
                        alt={`${link.name} logo`}
                        className="stroke-primary h-6 w-6"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="mt-4 flex flex-col gap-2 items-center text-white text-sm">
              <Link
                href="/legal/terms-of-use"
                className="hover:text-gold transition-colors duration-300"
              >
                Terms of Use
              </Link>
              <Link
                href="/legal/privacy-policy"
                className="hover:text-gold transition-colors duration-300"
              >
                Privacy Notice
              </Link>
              <Link
                href="/legal/affiliate-disclosure"
                className="hover:text-gold transition-colors duration-300"
              >
                Affiliate Disclosure
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center text-center text-light-gold">
        <p className="w-full text-xs">
          &copy; 2025 Eloquent Shelf. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
