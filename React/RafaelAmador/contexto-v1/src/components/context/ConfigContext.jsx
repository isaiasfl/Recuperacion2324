import { createContext, useContext, useState } from "react";


const ConfigContext = createContext();

export const useConfig = () => useContext(ConfigContext);

export const ConfigProvider = ({ children }) => {
  const [theme, setTheme] = useState([{
    color: "#000",
    backgroundColor: '#fff',
    fuente : "Arial",
  }])

  const toggleTheme = () => {
    setTheme(prevTheme => ({
      ...prevTheme,
      color: prevTheme.color === "#000" ? "#fff" : "#000",
      backgroundColor: prevTheme.backgroundColor === "#fff" ? "#000" : "#fff",
    }));
  }

  return (
    <ConfigContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ConfigContext.Provider>
  );
};
