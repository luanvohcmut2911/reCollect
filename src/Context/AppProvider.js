import React, {useState} from 'react'

export const AppContext = React.createContext();

export default function AppProvider({children}) {
  const [addModalVisible, setAddModalVisible] = useState(false);
  return (
    <AppContext.Provider value={{
      addModalVisible,
      setAddModalVisible
    }} >
      {children}
    </AppContext.Provider>
  )
};
