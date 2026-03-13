"use client";

import React, { useState, createContext, useEffect } from "react";
import { getUserRegion } from "@/actions/general";

import { RegionContextType } from "@/types/context";

export const RegionContext = createContext<RegionContextType>({ region: "" });

type Props = {
  children: React.ReactNode;
}

const RegionProvider: React.FC<Props> = ({ children }) => {
  const [region, setRegion] = useState<string>("");

  useEffect(() => {
    (async () => {
      const userRegion = await getUserRegion();
      setRegion(userRegion);
    })();
  }, []);

  return (
    <RegionContext.Provider value={{ region }}>
      {children}
    </RegionContext.Provider>
  );
};

export default RegionProvider;
