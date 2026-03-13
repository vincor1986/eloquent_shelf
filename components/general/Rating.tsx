import Image from "next/image";

import ratingStar from "@/public/images/icons/rating-star-white.png";
import formatNumber from "@/lib/helpers/formatNumber";
import { JSX } from "react";

const StarImage: React.FC<{ className?: string }> = ({ className }) => (
  <Image
    src={ratingStar}
    alt="Rating Star"
    className={`relative z-5 ${className}`}
    width={24}
    height={24}
  />
);

const StarFill = (percent: number, key: string | number) => (
  <div className="relative h-6 w-6" key={key}>
    <div
      className="absolute border border-white top-0 left-0 h-6 bg-light-gold/90"
      style={{ width: `${percent}%` }}
    ></div>
    <StarImage className="rounded-xs" />
  </div>
);

type RatingProps = {
  starRating: number | undefined;
  count: number;
}

const fallBackStarArr = [
  StarFill(100, 0),
  StarFill(100, 1),
  StarFill(50, 2),
  StarFill(0, 3),
  StarFill(0, 4),
]

const Rating = ({ starRating, count } : RatingProps) => {
  let starArr: JSX.Element[] = [];

  if (!starRating) {
    starArr = fallBackStarArr;
  } else {
    starArr = Array.from({ length: 5 }, (_, index) =>
      index < Math.floor(starRating)
        ? StarFill(100, index)
        : index === Math.floor(starRating)
          ? StarFill((starRating % 1) * 100, index)
          : StarFill(0, index)
    );
  }


  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="flex gap-0.5">{starArr}</div>
      <span className="relative top-1 w-full text-center text-xs text-zinc-500">
        {starRating} | ({formatNumber(count)} reviews)
      </span>
    </div>
  );
};

export default Rating;
