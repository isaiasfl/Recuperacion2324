# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Enunciado
Se pretende identificar el uso de contextos globales, para ello partimos de tres páginas. Los contextos son los siguientes:
        - ConfigContext: permite almacenar el modo o tema de color claro u oscuro. Dicho contexto tendra una función dentro que permita cmabiar de un modo a otro (claro: fondo claro, fuente verdana, letra negra ; orcuro: fuente blanca, fondo gris oscuro fuente roboto).
        - ProductContext: contexto global que almacenará un array de objetos donde cada uno de los objetos producto será {id,nombre,stock,precio}.
    El ejercicio comineza con la ruta / que llama a la page1, donde tendremos un formulario para añadir productos. Tendrá otro componente Piezas Almacenadas, cada vez que añadamos una pieza rsta se almacenarará en el contexto global UseContext y lo veremos en el componente Piezas Almacenadas.
    Cada página dispondra de una cabecera (con un icono, que cada vez que hagamos click usaremos el contexto ConfigContext para cambiar de tema; botón de buscar que nos llevará a la page2; botoón delete que irá a page3) y de un footer (nombre, código de los colores, fuentes, etc del tema del tema actual). 
    En la page2 en la ruta /buscar aparecerá un formulario buscador donde tendremos el nombre de la pieza y botón de  buscar. En un segundo componente aparecerá toda la información de la pieza.
    En la page3 en la ruta /eliminar en la que aparecerá en un componente todos los productos almacenados (con toda la información) y un icoono de papelera para poder borrar el producto deseado del contexto .

    v2.0:
    Añadiremos a la cabecera un botón de salvar que guardará mis contextos en firebase. 