import { useTheme } from "../context/configContext";

const ThemeButton = () => {
    const { toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="mr-2 m-4 p-2 bg-gray-200 rounded-full">
            Config
        </button>
    );
};

export default ThemeButton;
