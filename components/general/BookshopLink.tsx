"use client";

import Link from "next/link";
import Image from "next/image";

import { ShoppingCart } from "lucide-react";

import bookshopLogo from "@/public/images/logos/vendors/bookshop.png";
import useRegionCtx from "@/store/useRegionCtx";

type Props = {
  isbn: string;
  children: React.ReactNode;
}

const BookshopLink = ({ isbn, children }: Props) => {
  const region = useRegionCtx();

  const aID =
    region === "GB" ? "16540" : process.env.NEXT_PUBLIC_BOOKSHOP_US_ID;

  const bookshopURL = `https://${region === "GB" ? "uk." : ""}bookshop.org/a/${aID}/${isbn}`;

  return (
    <Link href={bookshopURL} target="_blank" rel="noopener noreferrer">
      <button className="mt-8 bg-secondary text-white rounded-sm cursor-pointer px-4 py-2 flex items-center hover:bg-purple-900 transition-colors duration-300">
        <ShoppingCart className="mr-2" />
        <Image
          src={bookshopLogo}
          alt="Bookshop.org logo"
          className="h-6 w-6 mr-2"
        />
        <span>{children}</span>
      </button>
    </Link>
  );
};

export default BookshopLink;
