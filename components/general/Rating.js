import Image from "next/image";

import ratingStar from "@/public/images/icons/rating-star.png";

const StarImage = () => (
  <Image
    src={ratingStar}
    alt="Rating Star"
    className="relative z-5 rounded-xs"
    width={24}
    height={24}
  />
);

const StarFill = (percent, key) => (
  <div className="relative h-6 w-6" key={key}>
    <div
      className="absolute top-0 left-0 h-6 bg-light-gold"
      style={{ width: `${percent}%` }}
    ></div>
    <StarImage />
  </div>
);

const Rating = ({ starRating = 4.6 }) => {
  const starArray = Array.from({ length: 5 }, (_, index) =>
    index < Math.floor(starRating)
      ? StarFill(100, index)
      : index === Math.floor(starRating)
      ? StarFill((starRating % 1) * 100, index)
      : StarFill(0, index)
  );

  return (
    <div className="flex items-center gap-0.5">
      {starArray}{" "}
      <span className="relative top-1 ml-1 text-sm text-zinc-500">
        ({starRating.toFixed(1)} / 5)
      </span>
    </div>
  );
};

export default Rating;
