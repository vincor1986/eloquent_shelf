"use client";

import Link from "next/link";
import Image from "next/image";

import { ShoppingCart } from "lucide-react";

import amazonLogo from "@/public/images/logos/vendors/amazon.png";
import useRegionCtx from "@/store/useRegionCtx";

type Props = {
  title: string;
  author: string;
  children: React.ReactNode;
}

const AmazonLink = ({ title, author, children }: Props) => {
  const region = useRegionCtx();

  const aID =
    region === "GB"
      ? process.env.NEXT_PUBLIC_UK_AMAZON_AID
      : process.env.NEXT_PUBLIC_US_AMAZON_AID;

  const titleUrlEncoded = encodeURIComponent(title);
  const authorUrlEncoded = encodeURIComponent(author);
  const id = `${titleUrlEncoded}+${authorUrlEncoded}`;

  const amazonURL = `https://www.amazon.${region === "GB" ? "co.uk" : "com"}/s?k=${id}&tag=${aID}`;

  return (
    <Link href={amazonURL} target="_blank" rel="noopener noreferrer">
      <button className="mt-8 bg-amber-500 text-white rounded-sm cursor-pointer px-4 py-2 flex items-center hover:bg-primary transition-colors duration-300">
        <ShoppingCart className="mr-2" />
        <Image src={amazonLogo} alt="Amazon logo" className="h-6 w-6 mr-2" />
        <span>{children}</span>
      </button>
    </Link>
  );
};

export default AmazonLink;
