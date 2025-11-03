const ContinueButton = ({ onClick, disabled }) => {
  return (
    <button
      className="px-4 py-2 mt-6 bg-primary text-white rounded-sm cursor-pointer hover:bg-secondary transition-colors duration-300"
      onClick={onClick}
      disabled={disabled}
    >
      Continue
    </button>
  );
};

export default ContinueButton;
