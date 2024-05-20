import { createContext, useContext, useState } from "react";


const ConfigContext = createContext();

export const useConfig = () => useContext(ConfigContext);

export const ConfigProvider = ({ children }) => {
  const [theme, setTheme] = useState([{
    color: "#e8e8ed",
    backgroundColor: '#fff',
    fuente : "Arial",
  }])

  const toggleTheme = () => {
    setTheme(prevTheme => ({
      ...prevTheme,
      color: prevTheme.color === "#e8e8ed" ? "#1f1f1f" : "#e8e8ed",
      backgroundColor: prevTheme.backgroundColor === "#1f1f1f" ? "#e8e8ed" : "#1f1f1f",
    }));
  }

  return (
    <ConfigContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ConfigContext.Provider>
  );
};
