"use client";

import { Check } from "lucide-react";

type Props = {
  checked: boolean;
  onChange: () => void;
}

const Tickbox = ({ checked, onChange }: Props) => {
  return (
    <div className="flex items-center" onClick={onChange}>
      <label className="text-sm text-primary pr-1 select-none text-left mr-2"></label>
      <div
        className={`flex items-center justify-center col-span-1 h-4 w-4 rounded-sm border-2 border-primary ${checked ? "bg-primary" : "bg-white"}`}
      >
        {checked ? <Check className="w-3 h-3 text-white" /> : null}
      </div>
    </div>
  );
};

export default Tickbox;
