import ContinueButton from "./ContinueButton";

const RecipientName = ({ formData, setFormData, setFormIndex }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, forName: value }));
  };

  const handleContinue = () => {
    setFormIndex(2);
  };

  return (
    <div className="w-full p-4 border border-zinc-200 rounded-md text-primary">
      <h2 className="text-xl font-medium mb-4">
        Who are you looking to buy for?
      </h2>
      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-2">
          <input
            type="text"
            name="forName"
            onChange={(e) => handleChange(e)}
            value={formData.forName}
            autoFocus
            placeholder="Enter their name or relationship to you"
            className="border border-zinc-300 rounded-sm px-4 py-2 w-full max-w-[500px]"
          />
        </label>
      </div>
      <ContinueButton
        onClick={handleContinue}
        disabled={formData.forName.trim() === ""}
      />
    </div>
  );
};

export default RecipientName;
