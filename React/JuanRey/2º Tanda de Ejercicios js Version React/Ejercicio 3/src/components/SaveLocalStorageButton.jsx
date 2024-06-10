import { useBiblioteca } from '../context/BibliotecaContext';

const SaveLocalStorageButton = () => {
    const { dispatch } = useBiblioteca();

    const handleGuardarEnLocalStorage = () => {
        dispatch({ type: 'GUARDAR_EN_LOCALSTORAGE' });
    };

    return (
        <button onClick={handleGuardarEnLocalStorage}>Guardar en LocalStorage</button>
    );
};

export default SaveLocalStorageButton;