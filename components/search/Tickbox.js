"use client";

import { Check } from "lucide-react";

const Tickbox = ({ label, checked, onChange, count }) => {
  return (
    <div className="grid grid-cols-8 items-center" onClick={onChange}>
      <label className="col-span-7 text-sm text-primary pr-1 select-none text-left">
        {label} <span className="italic">({count})</span>
      </label>
      <div
        className={`flex items-center justify-center col-span-1 h-4 w-4 rounded-sm border-2 border-primary ${checked ? "bg-primary" : "bg-white"}`}
      >
        {checked ? <Check className="w-3 h-3 text-white" /> : null}
      </div>
    </div>
  );
};

export default Tickbox;
