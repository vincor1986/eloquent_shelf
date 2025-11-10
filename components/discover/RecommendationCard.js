import Image from "next/image";

import Rating from "../general/Rating";
import SummaryPanel from "../summary/SummaryPanel";
import BookshopLink from "../general/BookshopLink";
import AmazonLink from "../general/AmazonLink";

const RecommendationCard = ({
  title,
  author,
  cover_image,
  rating,
  ratings_count,
  page_count,
  blurb,
  reading_difficulty,
  read_time_minutes,
  isbn,
}) => {
  const titleText = title.replaceAll("\x19", "'").replaceAll("\x14", "—");

  const blurbTextArr = blurb
    .split("\n")
    .map((text) => text.replaceAll("\x19", "'").replaceAll("\x14", "—"));

  return (
    <div className="text-primary my-4">
      <Image
        src={cover_image}
        alt={`${title} cover`}
        height={200}
        width={125}
        className="float-left mr-4 mb-2"
      />
      <h3 className="text-2xl">{titleText}</h3>
      <p className="italic mb-4 text-secondary">by {author}</p>
      <Rating starRating={rating} count={ratings_count} />
      {blurbTextArr.map((blurb, i) => (
        <p className="mt-3" key={i}>
          {blurb}
        </p>
      ))}
      <br />
      <SummaryPanel
        reading_difficulty={reading_difficulty}
        page_count={page_count}
        read_time_minutes={read_time_minutes}
      />
      <div className="flex w-full gap-2 items-center justify-end">
        <AmazonLink title={title} author={author}>
          via Amazon
        </AmazonLink>
      </div>
    </div>
  );
};
export default RecommendationCard;
