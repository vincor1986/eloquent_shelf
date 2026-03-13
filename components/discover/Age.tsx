import { DiscoverFormData } from "@/types/ai";
import ContinueButton from "./ContinueButton";

type Props = {
  formData: DiscoverFormData;
  setFormData: React.Dispatch<React.SetStateAction<DiscoverFormData>>;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Age = ({ formData, setFormData, setFormIndex }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, forAge: value }));
  };

  const handleContinue = () => {
    setFormIndex(3);
  };

  return (
    <div className="w-full p-4 border border-zinc-200 rounded-md text-primary">
      <h2 className="text-xl font-medium mb-2">
        How old {formData.forMe ? "are you?" : "is the recipient?"}
      </h2>
      <p className="mb-4 italic">
        Providing an age helps our AI system to make better recommendations.
      </p>
      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-2">
          <input
            type="number"
            name="forAge"
            min="0"
            max="120"
            step="1"
            onChange={(e) => handleChange(e)}
            value={formData.forAge}
            autoFocus
            placeholder="Enter age"
            className="border border-zinc-300 rounded-sm px-4 py-2 w-full max-w-[200px]"
          />
        </label>
      </div>
      <ContinueButton onClick={handleContinue} disabled={!formData.forAge} />
    </div>
  );
};

export default Age;
