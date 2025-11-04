"use client";

import ContinueButton from "./ContinueButton";

const RecipientSelect = ({ formData, setFormData, setFormIndex }) => {
  const handleSelect = (value) => {
    setFormData((prev) => ({ ...prev, forMe: value }));
  };

  return (
    <div className="w-full p-4 border border-zinc-200 rounded-md text-primary">
      <h2 className="text-xl font-medium mb-2">Who are you shopping for?</h2>
      <p className="mb-4 italic">Please select one option:</p>
      <div className="flex gap-4">
        <button
          className={`w-1/2 max-w-[300px] p-2 border border-zinc-300 rounded-sm hover:bg-zinc-100 transition-colors duration-300 cursor-pointer ${formData.forMe === true ? "ring-2 ring-primary" : ""}`}
          onClick={() => handleSelect(true)}
        >
          For me
        </button>

        <button
          className={`w-1/2 max-w-[300px] p-2 border border-zinc-300 rounded-sm hover:bg-zinc-100 transition-colors duration-300 cursor-pointer ${formData.forMe === false ? "ring-2 ring-primary" : ""}`}
          onClick={() => handleSelect(false)}
        >
          For someone else
        </button>
      </div>
      <ContinueButton
        onClick={() => setFormIndex(formData.forMe ? 2 : 1)}
        disabled={formData.forMe === null}
      />
    </div>
  );
};

export default RecipientSelect;
