import Image from "next/image";
import Link from "next/link";

import { MoveRight } from "lucide-react";

const TopicCard = ({ topic, description, bg, image, invert = false }) => {
  const topicUrl = topic.toLowerCase().replace(/ /g, "-");
  const headerTextColor = invert ? "text-white" : "text-primary";
  const textColor = invert ? "text-zinc-200" : "text-primary";
  const lineColor = invert ? "bg-white/20" : "bg-primary/80";

  return (
    <Link href={`/topics/${topicUrl}`} className="group">
      <div
        className={`relative rounded-sm shadow-md col-span-1 flex flex-col p-4 h-70 md:h-60 pt-16 pb-5 ${bg} hover:scale-105 hover:z-20 cursor-pointer transition-all duration-500 `}
      >
        <Image
          src={image}
          alt={`${topic} topic image`}
          className="absolute top-4 right-4 h-1/4 w-auto opacity-25"
        />
        <h1 className={`relative z-10 text-2xl ${headerTextColor}`}>{topic}</h1>
        <div className={`w-full h-0.75 relative z-10 ${lineColor}`} />
        <p className={`${textColor} italic relative z-10 mt-2`}>
          {description}
        </p>
        <MoveRight
          className={`absolute bottom-4 right-6 h-10 w-10 ${textColor} opacity-0 translate-y-1 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:${textColor}`}
        />
      </div>
    </Link>
  );
};

export default TopicCard;
