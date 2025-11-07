"use client";

import { useState } from "react";
import { Plus, Trash } from "lucide-react";

import ContinueButton from "./ContinueButton";

const Interests = ({ formData, setFormData, setFormIndex }) => {
  const [interestArr, setInterestArr] = useState(formData.forInterests || [""]);

  const handleEditInterest = (value, index) => {
    const updatedArr = [...interestArr];
    updatedArr[index] = value;
    setInterestArr(updatedArr);
  };

  const addNewInterest = () => setInterestArr((prev) => [...prev, ""]);
  const removeInterest = (index) =>
    setInterestArr((prev) => prev.filter((_, i) => i !== index));

  const handleSaveInterests = () => {
    const filteredInterests = interestArr
      .map((interest) => interest.trim())
      .filter((interest) => interest !== "");
    setFormData((prev) => ({ ...prev, forInterests: filteredInterests }));
  };

  const handleContinue = () => {
    handleSaveInterests();
    setFormIndex(4);
  };

  return (
    <div className="w-full p-4 border border-zinc-200 rounded-md text-primary">
      <h2 className="text-xl font-medium mb-2">
        What are {formData.forMe ? "your" : "their"} interests?
      </h2>
      <p className="mb-4 italic">
        Providing interests gives context to our AI system, enabling more
        accurate, tailored results. Try to add at least 3 interests if you can.
      </p>
      <div className="flex flex-col gap-4 w-full">
        {interestArr.map((interest, index, arr) => (
          <div key={index} className="flex gap-2">
            <label className="flex items-center gap-2 w-full max-w-[500px]">
              <input
                key={index}
                type="text"
                name={`forInterests[${index}]`}
                value={interest}
                onChange={(e) => handleEditInterest(e.target.value, index)}
                className="border border-zinc-300 rounded-sm px-4 py-2 w-full"
                placeholder="Enter an interest"
              />
            </label>
            {interest !== "" ? (
              <button
                className="text-sm bg-red-800 text-white p-2 rounded-md cursor-pointer hover:bg-red-700 transition-colors duration-300"
                disabled={arr.length < 2}
                onClick={() => removeInterest(index)}
                title="Delete interest"
              >
                <Trash />
              </button>
            ) : null}
            {index === arr.length - 1 ? (
              <button
                className="text-sm bg-primary text-white p-2 rounded-md cursor-pointer hover:bg-primary/80 transition-colors duration-300"
                disabled={interest.trim().length === 0}
                onClick={addNewInterest}
                title="Add new interest"
              >
                <Plus />
              </button>
            ) : null}
          </div>
        ))}
      </div>
      <ContinueButton onClick={handleContinue} disabled={!formData.forAge} />
    </div>
  );
};

export default Interests;
