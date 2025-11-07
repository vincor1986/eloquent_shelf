import { ArrowUpAZ, ArrowDownAZ, Star, MoveUp, MoveDown } from "lucide-react";

const SortButton = ({ sortFunction, sortMode, name }) => {
  const active = sortMode === name;

  let title, Icon;

  switch (name) {
    case "AZ":
      title = "Sort A to Z";
      Icon = ArrowDownAZ;
      break;
    case "ZA":
      title = "Sort Z to A";
      Icon = ArrowUpAZ;
      break;
    case "Rating Asc":
      title = "Sort by Rating Ascending";
      Icon = (
        <>
          <MoveUp className="w-5 -ml-1" />
          <Star
            className={`-ml-1.5 w-4 ${active ? "fill-white" : "fill-primary"}`}
          />
        </>
      );
      break;
    case "Rating Desc":
      title = "Sort by Rating Descending";
      Icon = (
        <>
          <MoveDown className="w-5 -ml-1" />
          <Star
            className={`-ml-1.5 w-4 ${active ? "fill-white" : "fill-primary"}`}
          />
        </>
      );
      break;
    default:
      return null;
  }

  return (
    <button
      onClick={sortFunction}
      className={`${active ? "bg-primary text-white fill-white" : "text-primary bg-white"} p-1 rounded-md cursor-pointer flex items-center hover:ring hover:ring-gold`}
      title={title}
    >
      <Icon />
    </button>
  );
};

const SortContainer = ({ sortFunctions, sortMode }) => {
  const {
    handleSortAZ,
    handleSortZA,
    handleSortRatingAsc,
    handleSortRatingDesc,
  } = sortFunctions;

  return (
    <div className="absolute top-0 right-0 -translate-y-full flex items-center gap-2">
      <SortButton sortFunction={handleSortAZ} name="AZ" sortMode={sortMode} />
      <SortButton sortFunction={handleSortZA} name="ZA" sortMode={sortMode} />
      <SortButton
        sortFunction={handleSortRatingDesc}
        name="Rating Desc"
        sortMode={sortMode}
      />
      <SortButton
        sortFunction={handleSortRatingAsc}
        name="Rating Asc"
        sortMode={sortMode}
      />
    </div>
  );
};

export default SortContainer;
