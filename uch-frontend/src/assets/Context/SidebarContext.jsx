import { createContext, useState } from "react";

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [expanded, setExpanded] = useState(true);

  const handleActiveItem = (item) => {
    setActiveItem(item);
  };

  return (
    <SidebarContext.Provider value={{ activeItem, setActiveItem, expanded, setExpanded, handleActiveItem }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
