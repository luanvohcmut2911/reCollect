import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  return (
    <AppContext.Provider
      value={{
        addModalVisible,
        setAddModalVisible,
        openSuccessModal,
        setOpenSuccessModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
