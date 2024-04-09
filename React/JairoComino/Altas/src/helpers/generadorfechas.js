    ///generador de fecha
    function obtenerFechaActual() {
        const fechaActual = new Date();
        const year = fechaActual.getFullYear();
        let month = fechaActual.getMonth() + 1; // Los meses van de 0 a 11, por lo que necesitas sumar 1
        let day = fechaActual.getDate();
      
        // Asegúrate de que el mes y el día tengan dos dígitos
        if (month < 10) {
          month = '0' + month;
        }
        if (day < 10) {
          day = '0' + day;
        }
      
        // Devuelve la fecha en formato YYYY-MM-DD
        return `${year}-${month}-${day}`;
      }
      export default obtenerFechaActual;