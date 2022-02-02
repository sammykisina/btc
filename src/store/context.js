import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebarModal = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebarModal = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, openSidebarModal, closeSidebarModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
