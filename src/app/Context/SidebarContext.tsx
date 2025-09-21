// app/Context/SidebarContext.tsx
"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";

// Define the context type
type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create the context with proper typing
export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);



export const SidebarProvider = ({ children }: React.PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};


export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("useSidebar must be used within a SidebarProvider");
  return context;
};
