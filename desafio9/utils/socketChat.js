import { MessagesController } from "../controllers/messages.controller.js";

export const chat = (socket, io) => {
  //-----------------------------------------------Chat
  const messages = new MessagesController();
  //Muestro mensajes al entrar a la chat
  //-----------------------------------------------
  (async function () {
    const chats = await messages.getAll();
    io.sockets.emit("messages", [chats.normalizedPosts, chats.compresion]);
  })();
  //-----------------------------------------------

  //Agrego mensaje y los muetro en el chat
  //-----------------------------------------------
  socket.on("newMessage", (mensajeDelCliente) => {
    const mensajeDelClienteObjet = JSON.parse(mensajeDelCliente);
    (async function (mensajeDelClienteObjet) {
      await messages.addMessage(mensajeDelClienteObjet);
      (async function () {
        const mensajes = await messages.getAll();
        io.sockets.emit("messages", mensajes);
      })();
    })(mensajeDelClienteObjet);
  });
};
