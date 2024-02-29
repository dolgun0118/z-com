"use client";

import { createContext, useState } from "react";

export const TabContext = createContext({
  tab: "rec",
  setTab: (value: "rec" | "fol"): void => {},
});

const TabProvider = ({ children }: { children: React.ReactNode }) => {
  const [tab, setTab] = useState("rec");
  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};

export default TabProvider;
