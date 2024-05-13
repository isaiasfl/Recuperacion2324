import { createContext, useContext, useState } from "react";


const ConfigContext = createContext();

export const useConfig = () => useContext(ConfigContext);

export const ConfigProvider = ({ children }) => {
  const [modo, setModo] = useState('claro');
  const [tipoDeFuente, setTipoDeFuente] = useState('Arial');

  return (
    <ConfigContext.Provider value={{ modo, tipoDeFuente, setModo, setTipoDeFuente }}>
      {children}
    </ConfigContext.Provider>
  );
};
