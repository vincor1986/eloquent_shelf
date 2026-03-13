"use client";

import { useContext } from "react";

import { RegionContext } from "./RegionContext";

const useRegionCtx = () => {
  const regionCtx = useContext(RegionContext);
  return regionCtx.region;
};

export default useRegionCtx;
