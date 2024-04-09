## Ejercicio 1

Se desea realizar una aplicacion para la DGT. De esta primera etapa vamos a gestionar el alta de matriculacion de los vehiculos atraves de una pagina web con las siguientes caractetisticas: 

1- Deseamos registrar de cada vehiculo la siguiente información:
    - Numero de bastidor
    - Marca del vehiculo
    - Modelo del vehiculo
    - Tipo de vehiculo ( Motocicleta, Coche, Camion )
    - Color
    - Fecha de alta
  

Cuando insertemos un nuevo vehiculo se debe validar que el numero de bastidor no este repetido, que todos los campos esten rellenos.
Cuando le de a insertar/guardar me generara una matricula formada por 4 numeros y 3 letras.

Cada vehiculo dado de alta aparecera en la parte de la derecha atraves de una tarjeta con todos los datos.
Esa informacion aparecera en un modal que me permita aceptar o cancelar. La tarjeta tendra fondo de color: 
    - Coche : "Azul"
    - Camion : "Marron"
    - Moto : "Gris"

Adicionalmente dispondremos de un desplegable para filtrar por moto, coche, camion, o todos.

El almacenamiento de esta aplicacion se va a hacer en una API local atraves del endpoint/ ALTAS 