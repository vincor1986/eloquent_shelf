import Image from "next/image";

import imageURL from "@/lib/cms/imageURL";
import formatList from "@/lib/helpers/formatList";
import Link from "next/link";
import TagList from "../general/TagList";
import { Book } from "@/types/book";

const Featured = ({
  title,
  subtitle,
  author,
  summary,
  categories,
  cover_image,
  slug,
}: Book) => {
  
  const catCount = categories.length;
  const showCatArr = categories.slice(0, 3);

  if (catCount > 3) {
    showCatArr.push(`+ ${catCount - 3} more`);
  }

  return (
    <div className="col-span-1 row-span-3 rounded-sm p-2 text-primary">
      <div className="flex w-full items-center">
        <h2 className="text-xl">Featured this week</h2>
      </div>
      <div className="h-1 w-full bg-light-gold/50 mb-2 rounded-md" />
      <div className="flex mt-4 items-start">
        <Link href={`/summary/${slug}`}>
          <Image
            src={imageURL(cover_image.asset._ref)}
            width={150}
            height={200}
            className="max-w-[100px] lg:max-w-[200px] h-auto m-2"
            alt={`cover image for ${title}`}
          />
        </Link>
        <div className="ml-2">
          <Link href={`/summary/${slug}`}>
            <h2 className="inline text-lg">
              {title}
              {subtitle ? ":" : null}
            </h2>
            <p className="inline ml-1 text-lg italic text-secondary">
              {subtitle}
            </p>
          </Link>
          <p className="my-4 text-zinc-400">{formatList(author)}</p>
          <TagList
            tags={showCatArr}
          />
        </div>
      </div>
      <div className="mb-3"></div>
      <Link href={`/summary/${slug}`}>
        <p className="text-sm line-clamp-8 text-ellipsis">{summary}</p>
        <p className="mt-2 pr-4 w-full text-gold text-right text-sm bold cursor-pointer">
          More
        </p>
      </Link>
    </div>
  );
};

export default Featured;
