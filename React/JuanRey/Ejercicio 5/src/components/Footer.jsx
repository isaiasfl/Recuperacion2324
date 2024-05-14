import { useContext } from 'react';
import { ConfigContext } from '../context/configContext';

const Footer = () => {
    const { bgColor } = useContext(ConfigContext);

    return (
        <footer className="fixed bottom-0 left-0 w-full p-2 bg-gray-100 dark:bg-gray-900 text-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">Color actual: {bgColor}</p>
        </footer>
    );
};

export default Footer;