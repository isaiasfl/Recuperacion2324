import { useTheme } from "../hooks/useTheme";

const Footer = () => {

     const {theme} = useTheme();

return (
      <footer className="text-white p-5 flex justify-between font-sans mb-10"
      style={{
            color: "white",
            fontFamily: theme.font,
            backgroundColor: "black",
        }}>

            <h3>Raisa J Ochoa Domínguez</h3>
            <p>Color actual: {theme.backgroundColor}</p>
            <p>Fuente actual: {theme.fontFamily}</p> {/* no cambia */}
            <p>Color de la fuente actual: {theme.textColor}</p> 
      </footer>
  );
};


export default Footer