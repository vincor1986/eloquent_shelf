import Image from "next/image";
import Link from "next/link";

import imageURL from "@/lib/cms/imageURL";
import formatList from "@/lib/helpers/formatList";
import Rating from "../general/Rating";

const GridItem = ({
  title,
  subtitle,
  author,
  rating,
  ratings_count,
  slug,
  description,
  cover_image,
}) => {
  if (!cover_image) return null;

  return (
    <div className="col-span-1 row-span-1 min-h-[260px] flex border border-light-gold/50 shadow-lg rounded-md overflow-hidden p-4 text-primary">
      <Link href={`/summary/${slug}`}>
        <div className="h-full flex items-center justify-center">
          <Image
            src={imageURL(cover_image.asset._ref)}
            alt={`Cover image for ${title}`}
            width={140}
            height={250}
            className="h-auto w-[100px]"
          />
        </div>
      </Link>
      <div className="relative flex flex-col ml-4 flex-2 pb-10">
        <Link href={`/summary/${slug}`}>
          <h2 className="text-lg">{title}</h2>
          <h3 className="text-secondary text-sm line-clamp-3 text-ellipsis">
            {subtitle}
          </h3>
        </Link>
        <p className="text-sm text-zinc-600">{formatList(author)}</p>
        <p className="my-2 text-primary text-xs line-clamp-2 text-ellipsis">
          {description}
        </p>
        <div className="flex items-center mt-2">
          <Rating starRating={rating} count={ratings_count} />
        </div>
        <Link href={`/summary/${slug}`}>
          <button className="absolute flex bottom-0 right-0 py-1 text-gold cursor-pointer text-xs hover:bg-light-gold hover:text-white transition-colors duration-300 rounded-sm px-2">
            More info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GridItem;
