const PanelCard = ({ title, value, Icon }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center p-4 bg-white rounded-md shadow-md">
      <div className="bg-light-gold/50 p-2 rounded-full flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-zinc-700 text-xs">{title}</h3>
        <p className="text-primary">{value}</p>
      </div>
    </div>
  );
};

export default PanelCard;
