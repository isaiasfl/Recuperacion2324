const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.
            </p>
        </footer>
    );
};

export default Footer;
