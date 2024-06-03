import { useTheme } from "../hooks/useTheme";

const EjemploContext = () => {

  const {theme, toggleTheme} = useTheme();

  return (
    <>
    <div
        style={{
            color: theme.textColor,
            fontFamily: theme.font,
            backgroundColor: theme.backgroundColor,
        }}
    >
        <h3>Ejemplo de Context </h3>
         <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
    </>

  )
}

export default EjemploContext