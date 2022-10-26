'use strict';
const {
  addMessage: addMessage,
  getMessages: getMessages
} = require('../controllers/messages.controller.js');

module.exports.chat = (socket, io) => {
  //-----------------------------------------------Chat
  //Muestro mensajes al entrar a la chat
  //-----------------------------------------------
  (async function () {
    const chats = await getMessages();
    io.sockets.emit("messages", [chats.normalizedPosts]);
  })();
  //-----------------------------------------------

  //Agrego mensaje y los muetro en el chat
  //-----------------------------------------------
  socket.on("newMessage", (mensajeDelCliente) => {
    const mensajeDelClienteObjet = JSON.parse(mensajeDelCliente);
    (async function (mensajeDelClienteObjet) {
      await addMessage(mensajeDelClienteObjet);
      (async function () {
        const mensajes = await getMessages();
        io.sockets.emit("messages", mensajes);
      })();
    })(mensajeDelClienteObjet);
  });
};
