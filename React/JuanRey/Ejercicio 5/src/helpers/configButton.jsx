import { useContext } from 'react';
import { ConfigContext } from '../context/configContext';

const ConfigButton = () => {
    const { toggleTheme, toggleFont } = useContext(ConfigContext);

    const handleConfigClick = () => {
        toggleTheme();
        toggleFont();
    };

    return (
        <button onClick={handleConfigClick} className="fixed top-4 left-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            Config
        </button>
    );
};

export default ConfigButton;