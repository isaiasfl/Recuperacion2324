
import { useTheme } from '../context/configContext';

const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer style={{ backgroundColor: theme.backgroundcolor, color: theme.textcolor, fontFamily: theme.fontfamily }} className="fixed bottom-0 w-full p-4">
            <p>RGB Actual: Fondo - {theme.backgroundcolor}, Texto - {theme.textcolor}</p>
        </footer>
    );
};

export default Footer;