/**
 * ## Ejercicio 6: Sistema de Comentarios de un Blog
 * Crea un sistema de comentarios para un blog que permita agregar comentarios, responder a comentarios, dar "me gusta" a comentarios,
 *  y listar comentarios por número de "me gusta". Debes utilizar Map y Set para gestionar la información a través de la
 * función createSystemComment() con las siguientes opciones:
 *
 * 1. Añadir un nuevo comentario.
 * 2. Responder a un comentario existente.
 * 3. Obtener todas las respuestas de un comentario específico.
 * 4. Obtener todos los comentarios ordenados por fecha de creación.
 */
class CommentSystem {
  /**
   * Constructor para inicializar el sistema de comentarios.
   * Inicializa mapas para comentarios, respuestas y "me gusta".
   */
  constructor() {
    this.comments = new Map();
    this.replies = new Map();
    this.likes = new Map();
  }

  /**
   * Añade un nuevo comentario al sistema.
   * @param {*} id - Identificador del comentario.
   * @param {*} message - Mensaje del comentario.
   */
  addComment(id, message) {
    const date = new Date();
    this.comments.set(id, { message, date, likes: 0 });
    this.replies.set(id, []);
  }

  /**
   * Responde a un comentario existente.
   * @param {*} commentId - Identificador del comentario al que se responde.
   * @param {*} replyMessage - Mensaje de la respuesta.
   */
  replyToComment(commentId, replyMessage) {
    if (this.comments.has(commentId)) {
      const date = new Date();
      this.replies.get(commentId).push({ replyMessage, date });
    }
  }

  /**
   * Da "me gusta" a un comentario.
   * @param {*} commentId - Identificador del comentario al que se da "me gusta".
   */
  likeComment(commentId) {
    if (this.comments.has(commentId)) {
      this.comments.get(commentId).likes += 1;
    }
  }

  /**
   * Obtiene todas las respuestas a un comentario específico.
   * @param {*} commentId - Identificador del comentario del que se obtienen las respuestas.
   * @returns - Todas las respuestas al comentario especificado.
   */
  getRepliesToComment(commentId) {
    return this.replies.get(commentId) || [];
  }

  /**
   * Obtiene todos los comentarios ordenados por fecha de creación.
   * @returns - Todos los comentarios ordenados por fecha de creación.
   */
  getAllCommentsSortedByDate() {
    return Array.from(this.comments.values()).sort((a, b) => a.date - b.date);
  }

  /**
   * Obtiene todos los comentarios ordenados por número de "me gusta".
   * @returns - Todos los comentarios ordenados por número de "me gusta".
   */
  getAllCommentsSortedByLikes() {
    return Array.from(this.comments.values()).sort((a, b) => b.likes - a.likes);
  }
}

// Ejemplo de uso
const commentSystem = new CommentSystem();
commentSystem.addComment(1, "This is the first comment");
commentSystem.addComment(2, "This is the second comment");
commentSystem.replyToComment(1, "This is a reply to the first comment");
commentSystem.likeComment(1);
commentSystem.likeComment(1);
commentSystem.likeComment(2);
console.log(commentSystem.getRepliesToComment(1));
console.log(commentSystem.getAllCommentsSortedByDate());
console.log(commentSystem.getAllCommentsSortedByLikes());
