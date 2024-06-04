/* Crea un sistema de comentarios para un blog que permita agregar comentarios, 
responder a comentarios, dar "me gusta" a comentarios, 
y listar comentarios por número de "me gusta".
Debes utilizar Map y Set para gestionar la información a través de la función 
CommentSystem() con las siguientes opciones:
Añadir un nuevo comentario.
Responder a un comentario existente.
Obtener todas las respuestas de un comentario específico.
Obtener todos los comentarios ordenados por fecha de creación.*/
function CommentSystem() {
  comments = new Map();
  // comment = {text, date, likes, pointer}
  function addComment(text) {
    const comment = { text, date: new Date(), likes: 0, pointer: 0 };
    comments.set(getLastId(), comment);
  }
  function getLastId() {
    return comments.size + 1;
  }
  function responder(id, text) {
    const comment = comments.get(id);
    if (comment) {
      comments.set(getLastId(), { text, date: new Date(), likes: 0, pointer: id });
    } else { throw new Error('Comment not found'); }
  }
  function getRespuestas(id) {
    let respuestas = new Map();
    for (let [key, value] of comments) {
      if (value.pointer === id) {
        respuestas.set(key, value);
      }
    }
    return respuestas;
  }
  function getRespuestasRecursivas(id) {
    let respuestas = getRespuestas(id);
    // console.log(respuestas);
    for (let [key, value] of respuestas) {
      let subRespuestas = getRespuestasRecursivas(key);
      for (let [subKey, subValue] of subRespuestas) {
        respuestas.set(subKey, subValue);
      }
    }
    return respuestas;
  }
  function print() {
    for (let [key, value] of comments) {
      console.log(key, value);
    }
  }
  function getOrdenados() {
    let sorted = new Map([...comments.entries()].sort((a, b) => a[1].date - b[1].date));
    return sorted;
  }
  function getOrdenadosReversed() {
    let sorted = new Map([...comments.entries()].sort((a, b) => b[1].date - a[1].date));
    return sorted;
  }
  function darLike(id) {
    const comment = comments.get(id);
    if (comment) {
      comment.likes++;
    } else { throw new Error('Comment not found'); }
  }
  function ordenadosPorLikes() {
    let sorted = new Map([...comments.entries()].sort((a, b) => b[1].likes - a[1].likes));
    return sorted;
  }
  return {
    addComment,
    responder,
    getRespuestas,
    getRespuestasRecursivas,
    print,
    getOrdenados,
    getOrdenadosReversed,
    darLike,
    ordenadosPorLikes
  };
}

/* tests 
let cs = new CommentSystem();
cs.addComment('Hola');
setTimeout(() => {
  cs.addComment('Hola2');
  cs.addComment('Hola3');
  setTimeout(
    () => {


      cs.responder(1, 'Hola Respuesta test');
      cs.responder(1, 'Hola Respuesta');
      cs.responder(2, 'Hola Respuesta2');
      cs.responder(2, 'Hola Respuesta2');
      setTimeout(() => {


        cs.responder(3, 'Hola Respuesta recursiva');
        cs.responder(4, 'Hola Respuesta recursiva 2');
        cs.responder(9, 'Hola Respuesta recursiva 3');
        //       console.log("Respuestas de 1");
        //        console.log(cs.getRespuestas(1));
        //        console.log("Respuestas de 2");
        //       console.log(cs.getRespuestas(2));
        console.log("Print");
        cs.print();

        console.log("Respuestas recursivas");
        console.log(cs.getRespuestasRecursivas(1));
        console.log("Ordenados");
        console.log(cs.getOrdenados());
        console.log("Ordenados Reversed");
        console.log(cs.getOrdenadosReversed());



      }, 1000);

    }, 1000);

}, 1000);

// */

// test likes
let cs = new CommentSystem();
cs.addComment('Hola');
cs.addComment('Hola2');
cs.addComment('HolaSinLikes');
cs.darLike(1);
cs.darLike(1);
cs.darLike(2);
cs.darLike(2);
cs.darLike(2);
console.log(cs.ordenadosPorLikes());