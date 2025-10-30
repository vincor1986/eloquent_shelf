import { Bookmark, Flag } from "lucide-react";

const ActionsSection = () => {
  const isBookmarked = false;

  return (
    <div className="absolute top-4 right-4 flex gap-2 text-primary">
      <Bookmark
        className={`w-5 h-5 cursor-pointer ${isBookmarked ? "fill-forest" : ""}`}
        title="Add to Bookmarks"
      />
      <Flag className={`w-5 h-5 cursor-pointer`} title="Report Inaccuracy" />
    </div>
  );
};

export default ActionsSection;
