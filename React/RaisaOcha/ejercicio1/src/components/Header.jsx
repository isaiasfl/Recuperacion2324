import { useAuthContext } from "../context/useAuthContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { userFirebase } = useAuthContext();
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img src="vite.svg" alt="Proyecto" className="w-8 h-8 mx-2" />
        <span className="text-2xl">Proprity Tasks FireBase</span>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col mx-10">
          <span>Bienvenido {userFirebase.displayName}</span>
        </div>
        {/* Aquí el botón de cerrar sesión */}
        <SignOutButton />
      </div>
    </header>
  );
};

export default Header;
