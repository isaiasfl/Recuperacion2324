# EJERCICIOS DE REACT

<center><img src="https://cdn2.hubspot.net/hubfs/2829524/h_react.jpg" width="50%" alt="react"/></center>

## Ejercicio 1

Crear una aplicación desarrollada en React que permita **Crear tareas con Prioridades**

a. La aplicación valida a través de la ruta **/login** que el usuario esté registrado dentro de firebase. Mostraremos un formulario de Username Y Password, validando que dichos datos estén en una Colecction de Firebase.

b. Crearemos una Page en la ruta **/task** dividida en dos Paneles:

- En el panel izquierdo se mostrará me permitirá introducir tareas, con prioridad (Slider 1-5) . Al pulsar en guardar se almacenará dicha tarea en el LocalStorage
- Debajo de la inserción de Tareas se mostrará un panel con el número de tareas y el número de tareas con mayor prioridad (Que tienen 5 estrellas)
<<<<<<< HEAD
- En la derecha se mostrarán TODAS las tareas que tengamos almacenadas; Debes mostrar el nombre de la tarea y el número de prioridad convertido a estrellas; habrán dos botones para ordenar las tareas por prioridad o por nombre


## EJERCICIO 1 - JAVASCRIPT

Crear una funcion llamada filtrarPrimos() que tome un array como argumento y me devuelva un nuevo array solo con los numeros primos (sin repeticion). Como test le pasaré un array con texto y numeros.

## EJERCICIO 2

Calcular una funcion llamada numeroMasFrecuente() que le pasemos un array de numeros (obligotorio) y me devuelva que numero se repite mas

## EJERCICIO 3

Crear una funcion llamada ordenarPorPropiedad() que tome por argumento un array de objetos y como segundo argumento el nombre de una propiedad y me devuelva un array con los datos de esa propiedad ordenados. Si es texto alfabeticamente y si es numero de mayor a menor.

## EJERCICIO 4



Crear una aplicacion en React que permita gestionar las rutas ocn react router-dom de la siguiente forma:
    -Disponemos de 3 pages que son: Login, Inicio y About
    - LOGIN-> Un boton de entrar
    - INICIO-> Boton de About y Salir
    - ABOUT-> Boton de volver

Para ejemplificar JWT al pulsar en Entrar, generaremos una clave llamada token cuyo valor será una cadena de letras y numeros de 12 digitos y automaticamente accederemos a la pantalla de INICIO. Mientras exista la clave 'token' mi aplicacion accedera directamente a la page de INICIO.
Cuando pulse en Salir, la clave 'token' se borrará y automaticamente me redirigirá a LOGIN.

Version 2 --> Lo mismo utilizando un estado global
=======
- En la derecha se mostrarán TODAS las tareas que tengamos almacenadas; Debes mostrar el nombre de la tarea y el número de prioridad convertido a estrellas; habrán dos botones para ordenar las tareas por prioridad o por nombre.

## Ejercicio 2

Crear una aplicacion desarrollada en React para la DGT que permita **Alta de vehículos**

-> FASE 1: en esta primera etapa vamos a gestionar el alta de matriculacion de los vehículos a traves de una página web con las siguientes caracteristicas:

- Deseamos registrar de cada vehículo la siguiente informacion: numero de vastidores, marca del vehículo, modelo del vehiculo, tipo(motocicleta, coche y camión), fecha de alta y color. Cuando insertemos un nuevo vehiculo se debe validar que el numero de vastidor no esté repetido y que todos los campos estén rellenos. Cuando le demos a insertar se generará automaticamente una matricula formada por 4 numeros aleatorios y 3 letras aleatorias, no pudiendo repetir la matrícula. Esa información aparecerá en un modal que me permitirá aceptar o cancelar.
- Cada vehículo dado de alta aparecerá en la parte de la derecha a través de una tarjeta con todos los datos. La tarjeta tendra fondo de color gris para una moto, fondo de color azul para un coche y fondo de color marron para un camión. 
- Adicionalmente dispondremos de un desplegable para filtrar por moto, por coche, por camión o por todos(opción por defecto). Ordenaremos por fecha de alta.
- El almacenamiento de esta aplicacion se va a hacer por medio de una api local a través del endpoint /ALTAS usando jsonserver.
>>>>>>> 57f7134cf12891540dfe8284aa3fa8807737baf2
