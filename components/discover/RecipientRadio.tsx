import { DiscoverFormData } from "@/types/ai";
import ContinueButton from "./ContinueButton";

type Props = {
  formData: DiscoverFormData;
  setFormData: React.Dispatch<React.SetStateAction<DiscoverFormData>>;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
}

const RecipientRadio = ({ formData, setFormData, setFormIndex }: Props) => {
  const handleSelect = (value: boolean) => {
    setFormData((prev) => ({ ...prev, forMe: value }));
  };

  const handleContinue = () => {
    if (formData.forMe === true) {
      setFormIndex(2);
    } else {
      setFormIndex(1);
    }
  };

  return (
    <div className="w-full p-4 border border-zinc-200 rounded-md text-primary">
      <h2 className="text-xl font-medium mb-4">Who are you shopping for?</h2>
      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="forMe"
            checked={formData.forMe === true}
            onChange={() => handleSelect(true)}
          />
          <span>For me</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="forMe"
            checked={formData.forMe === false}
            onChange={() => handleSelect(false)}
          />
          <span>For someone else</span>
        </label>
      </div>
      <ContinueButton
        onClick={handleContinue}
        disabled={formData.forMe === null}
      />
    </div>
  );
};

export default RecipientRadio;
