const BurgerIcon = ({}) => {
  return (
    <div className="relative flex flex-col h-6 w-8 mr-4 cursor-pointer md:hidden">
      <div className="absolute top-0 h-1 w-full bg-primary rounded" />
      <div className="absolute top-1/2 -translate-y-1/2 h-1 w-full bg-primary rounded" />
      <div className="absolute bottom-0 h-1 w-full bg-primary rounded" />
    </div>
  );
};

export default BurgerIcon;
