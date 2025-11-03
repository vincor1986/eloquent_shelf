import Image from "next/image";
import Link from "next/link";

import formatList from "@/lib/helpers/formatList";
import Rating from "../general/Rating";
import imageURL from "@/lib/cms/imageURL";

const SummaryCard = ({
  title,
  author,
  subtitle,
  rating,
  ratings_count,
  slug,
  cover_image,
}) => {
  if (!cover_image) return null;

  return (
    <div className="p-4 min-w-[200px] max-w-[250px] min-h-[550px] border-zinc-300 border rounded-md shadow-md flex flex-col justify-between hover:bg-zinc-100 hover:border-light-gold transition-colors duration-300">
      <div>
        <Link href={`/summary/${slug}`} className="cursor-pointer">
          <div className="flex items-center justify-center my-2 mb-4">
            <Image
              src={imageURL(cover_image.asset._ref)}
              alt={`Cover image for ${title}`}
              width={150}
              height={225}
            />
          </div>
        </Link>
        <div className="mb-4">
          <Link href={`/summary/${slug}`}>
            <h2 className="text-primary">
              <span className="font-semibold">
                {title}
                {subtitle ? ":" : null}
              </span>
              {subtitle ? (
                <span className="italic text-ellipsis line-clamp-3">
                  {subtitle}
                </span>
              ) : null}
            </h2>
          </Link>
          <p className="text-secondary text-sm">{formatList(author)}</p>
        </div>
        <div className="flex justify-center">
          <Rating starRating={rating} count={ratings_count} />
        </div>
      </div>
      <Link href={`/summary/${slug}`}>
        <button className="w-full mt-6 bg-primary text-white rounded-sm px-4 py-2 cursor-pointer hover:bg-primary/80 transition-colors duration-300 place-self-end">
          Read more
        </button>
      </Link>
    </div>
  );
};

export default SummaryCard;
