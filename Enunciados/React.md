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

-> FASE 1: en esta primera etapa vamos a gestionar el alta de matriculacion de los vehículos a traves de una página web con las siguientes caracteristicas:

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

## Ejercico 4

Crear una aplicacion en React que permita gestionar las rutas con react router-dom de la siguiente forma:

- Disponemos de 3 pages que son: Login, Inicio y About
- LOGIN-> Un boton de entrar
- INICIO-> Boton de About y Salir
- ABOUT-> Boton de volver

Para ejemplificar JWT al pulsar en Entrar, generaremos una clave llamada token cuyo valor será una cadena de letras y numeros de 12 digitos y automaticamente accederemos a la pantalla de INICIO. Mientras exista la clave 'token' mi aplicacion accedera directamente a la page de INICIO.
Cuando pulse en Salir, la clave 'token' se borrará y automaticamente me redirigirá a LOGIN.

b. En la version 2.0 haremos lo mismo pero utilizando una clave global.

## Ejercicio 5

Crear una aplicación desarrollada en React en la que nos centraremos en los contextos "Context".

a. Pretendemos ejemplificar el uso de dos contextos globales, el primer contexto "useContext" y el segundo contexto "configContext".

- El contexto "configContext" permite almacenar el color del fondo y la fuente. Al pulsar un boton de rueda dentada ubicada en todas las páginas en la parte superior y izquierda se modificaran los valores guardados y se cambiará el aspecto de la página. 
- El contexto "configContext" permite almacenar una variable para indicar modo claro y modo oscuro, y un tipo de fuente. Dicho contexto se aplicara al pulsar el boton config cambiando de modo claro a modo oscuro y aplicando la fuente robótica, es decir, cuando pulsemos el boton el fondo pasará de color blanco a color gris oscuro y el color de la fuente negra pasará de color negro a color blanco, la fuente pasará a ser roboto y viceversa.
- En el footer aparecerá el rgb actual de la página y este se actualizará cada vez que se cambie el color de la página
- Crearemos un contexto "usecontext" que servirá para almacenar un array de objetos, los cuales cada uno de ellos serán: id, nombre, stock y precio.
- En la página uno, tendremos un componente para insertar productos con sus campos de formulario necesarios. Otro componente llamado contador en el que se mostraran el numero de productos actual. En la cabecera tendremos el boton editar, el cual al pulsarlo, nos enviará a la página dos.
- En la página dos, tendremos un componente buscador el cual tendremos un campo con el nombre del prodcuto y a la hora de darle a buscar, nos mostrará debajo el producto a editar, donde se podrán modificar todos los campos salvo el id. Además, es necesario que todos los campos estén completos.
- Tendremos además otro boton en la cabecera de la pagina uno llamado borrar, el cual al pulsarlo nos moverá a la página numero 3, en la cual se nos mostrarán en una tabla de objetos creados en la que al seleccionar cualquiera de ellos lo podremos eliminar.

b. En la version 2.0 tendremos un boton guardar que guardará toda la información de mis contexto en la base de datos de google.
