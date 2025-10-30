import GridItem from "./GridItem";

const ListGrid = ({ itemsArr }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {itemsArr.map((item) => (
        <GridItem key={item.slug} {...item} />
      ))}
    </div>
  );
};

export default ListGrid;
