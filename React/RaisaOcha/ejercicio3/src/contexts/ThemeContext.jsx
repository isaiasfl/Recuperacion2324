// importación de createContext para la creación de contexto.
import { createContext, useState } from "react";

// creaciñon y exportación del contexto
export const ThemeContext = createContext();


// proveedor (provider) del contexto y exportación
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState({
        textColor: "#000",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ffff"
    })

    const toggleTheme = () => {
        setTheme(previusTheme => ({
            ...previusTheme,
            textColor: theme.textColor === "#000" ? "#fff" : "#000",
            fontFamily: theme.font ===  "Arial, sans-serif" ? "Verdana, sans-serif" : "Arial, sans-serif",
            backgroundColor: theme.backgroundColor === "#ffff"? "#808080" : "#ffff",
        }))
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}