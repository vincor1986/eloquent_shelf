import Image from "next/image";
import Link from "next/link";
import Rating from "../general/Rating";

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
  isbn13,
}) => {
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
      <h3 className="text-2xl">{title}</h3>
      <p className="italic mb-4 text-secondary">by {author}</p>
      <Rating starRating={rating} count={ratings_count} />
      {blurbTextArr.map((blurb, i) => (
        <p className="mt-3" key={i}>
          {blurb}
        </p>
      ))}
      <p className="mt-3">
        Page count: <span className="font-bold ml-2">{page_count}</span>
      </p>
      <p>
        Reading difficulty:{" "}
        <span className="font-bold ml-2">{reading_difficulty}</span>
      </p>
      <p>
        Est. reading time:{" "}
        <span className="font-bold ml-2">{read_time_minutes} minutes</span>
      </p>
      <Link
        href={`https://uk.bookshop.org/a/16540/${isbn13}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mt-8 bg-primary text-white rounded-sm cursor-pointer px-4 py-2 hover:bg-secondary transition-colors duration-300">
          Buy this book
        </button>
      </Link>
    </div>
  );
};
export default RecommendationCard;
