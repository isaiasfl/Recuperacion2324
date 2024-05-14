import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        textcolor: "#000",
        backgroundcolor: "#fff",
        fontfamily: "Arial, sans-serif"
    });

    const toggleTheme = () => {
        setTheme((prevTheme) => ({
            textcolor: prevTheme.textcolor === "#000" ? "#fff" : "#000",
            backgroundcolor: prevTheme.backgroundcolor === "#fff" ? "#000" : "#fff",
            fontfamily: prevTheme.fontfamily === "Arial, sans-serif" ? "Verdana, sans-serif" : "Arial, sans-serif"
        }));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);