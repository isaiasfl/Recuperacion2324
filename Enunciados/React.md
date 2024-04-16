# EJERCICIOS DE REACT

<center><img src="https://cdn2.hubspot.net/hubfs/2829524/h_react.jpg" width="50%" alt="react"/></center>

## Ejercicio 1

Crear una aplicación desarrollada en React que permita **Crear tareas con Prioridades**

a. La aplicación valida a través de la ruta **/login** que el usuario esté registrado dentro de firebase. Mostraremos un formulario de Username Y Password, validando que dichos datos estén en una Colecction de Firebase.

b. Crearemos una Page en la ruta **/task** dividida en dos Paneles:

- En el panel izquierdo se mostrará me permitirá introducir tareas, con prioridad (Slider 1-5) . Al pulsar en guardar se almacenará dicha tarea en el LocalStorage
- Debajo de la inserción de Tareas se mostrará un panel con el número de tareas y el número de tareas con mayor prioridad (Que tienen 5 estrellas)
- En la derecha se mostrarán TODAS las tareas que tengamos almacenadas; Debes mostrar el nombre de la tarea y el número de prioridad convertido a estrellas; habrán dos botones para ordenar las tareas por prioridad o por nombre.

## Ejercicio 2

Crear una aplicacion desarrollada en React para la DGT que permita **Alta de vehículos**

a. En esta primera etapa vamos a gestionar el alta de matriculacion de los vehículos a traves de una página web con las siguientes caracteristicas:

- Deseamos registrar de cada vehículo la siguiente informacion: numero de vastidores, marca del vehículo, modelo del vehiculo, tipo(motocicleta, coche y camión), fecha de alta y color. Cuando insertemos un nuevo vehiculo se debe validar que el numero de vastidor no esté repetido y que todos los campos estén rellenos. Cuando le demos a insertar se generará automaticamente una matricula formada por 4 numeros aleatorios y 3 letras aleatorias, no pudiendo repetir la matrícula. Esa información aparecerá en un modal que me permitirá aceptar o cancelar.
- Cada vehículo dado de alta aparecerá en la parte de la derecha a través de una tarjeta con todos los datos. La tarjeta tendra fondo de color gris para una moto, fondo de color azul para un coche y fondo de color marron para un camión. 
- Adicionalmente dispondremos de un desplegable para filtrar por moto, por coche, por camión o por todos(opción por defecto). Ordenaremos por fecha de alta.
- El almacenamiento de esta aplicacion se va a hacer por medio de una api local a través del endpoint /ALTAS usando jsonserver.

## Ejercicio 3

Crear una aplicación desarrollada en React que consista en una Landing Page( ampliacion de la página de la DGT )

a. La Landing Page estará formada por una serie de componentes, los cuales se mostraran en el siguiente orden: un componente con el titulo, un componente con una noticia grande, un componente con una serie de noticias en tarjetas, un componente con una imagen, y un componente con un boton de acceso.

- En el componente con la noticia grande, se nos mostrara la imagen a la izquierda y el texto a la derecha, todo esto centrado en la página.
- En el componente de las tarjetas, se mostrarán de forma aleatoria en horizontal.
- La informacion de todo en la página se guardará en un endpoint llamado /INFO, en el cual estarán guardas la información de las tarjetas aleatorias y el componente con la noticia en grande en el array noticia( compuesto por un idnoticia, titulo, texto, urlimg) y las imagenes(urls de cada imagen).
- En la parte superior de la página, debajo del título se mostrará una de las noticias aleatorias centrada en grande.
- Al final de la página tendremos un boton de acceso de la pagina, el cual nos enviará a otra página la cual sera el formulario de acceso.

b. La pagina de formulario de acceso pedirá los campos username y password, y en ella tendremos las funciones de registrar y acceder.

- El boton de registrar nos enviará a la página de registro.
- El boton de acceder de momento no hace falta programarlo.

c. La página de registro nos mostrarán una serie de campos a rellenar y al final del todo se mostrará un boton de registrar, el cual al pulsarlo y cumplirse las condiciones necesarias se guardará el nuevo usuario en la base de datos.

- El endpoint donde se guardarán los datos será /USUARIOS.
- Los campos de la página, y los campos del endpoint, serán " dni ", " username ", " password " y " fecha nacimiento ".
- Las condiciones necesarias para poder registrarse serán que ni el dni a guardar ni el usuario a guardar esten repetidos en la base de datos.  