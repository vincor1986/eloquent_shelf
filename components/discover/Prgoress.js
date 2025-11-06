const Progress = ({ formIndex }) => {
  if (formIndex === 5) return null;

  return (
    <div className="mt-4 max-w-[600px] mx-auto h-4 bg-white border border-primary rounded-full overflow-hidden flex justify-start">
      <div
        className="bg-primary h-full transiton-all duration-500"
        style={{ width: `${(formIndex / 5) * 100}%` }}
      />
    </div>
  );
};

export default Progress;
