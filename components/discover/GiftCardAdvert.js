import Image from "next/image";
import Link from "next/link";

import giftCardImage from "@/public/images/graphics/bookshop-gift-card.webp";

const GiftCardAdvert = () => {
  const url = "https://uk.bookshop.org/a/16540/gift_cards";

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <hr className="my-8 border border-zinc-300" />
      <div className="my-8 p-4 lg:px-6 flex flex-col lg:flex-row gap-4 max-w-[900px] mx-auto cursor-pointer rounded-xl bg-parchment lg:items-center shadow-lg">
        <Image
          src={giftCardImage}
          alt="Bookshop.org Gift Card"
          className="h-[200px] lg:h-[200px] w-auto rounded-sm mx-auto"
        />
        <div className="p-4 text-primary">
          <h3 className="text-xl font-medium">
            Gift Cards | The Gift of Reading
          </h3>
          <div className="bg-secondary/40 h-1 rounded-full mt-px mb-2" />
          <p>
            Can't find the perfect book for your loved one? Or wondering whether
            they already have the book you want to gift?
          </p>
          <br />
          <p className="font-semibold">
            Click to surprise a friend or loved one with a gift card from
            Bookshop.org!
          </p>
        </div>
      </div>
    </Link>
  );
};

export default GiftCardAdvert;
