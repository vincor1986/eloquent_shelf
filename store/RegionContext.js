"use client";

import { useState, createContext, useEffect } from "react";
import { getUserRegion } from "@/actions/general";

export const RegionContext = createContext("");

const RegionProvider = ({ children }) => {
  const [region, setRegion] = useState("");

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
