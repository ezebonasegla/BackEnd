'use strict';
const {
  desnormalizar: desnormalizar
} = require('./funciones.js');

const socket = io();

//-------------------------------------------------------------------------------
//--------------------------------------Chat-------------------------------------
//-------------------------------------------------------------------------------

//Socket Chat
socket.on("messages", (chats) => {
  const chatDesnormalizado = desnormalizar(chats[0]);
  const divMsj = document.getElementById("messages");
  divMsj.innerHTML = chatDesnormalizado.chats
    .map((chat) => {
      return `
    <p>
    <span style="color: blue;">${chat.author.id}</span>
    <span style="color: brown;">[${chat.date}]: </span>
    <span style="color: green;">${chat.text}</span>
    <img class='avatar' src='${chat.author.avatar}'></img>
    </p>
    `;
    })
    .join(" ");
});

//Boton send msg
const boton = document.getElementById("send");
boton.addEventListener("click", () => {
  const id = document.getElementById("id").value;
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;
  const alias = document.getElementById("alias").value;
  const avatar = document.getElementById("avatar").value;
  const text = document.getElementById("text").value;
  const date =
    new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();

  const msjToSend = {
    author: {
      id,
      nombre,
      apellido,
      edad,
      alias,
      avatar,
    },
    text,
    date,
  };
  // message.value = "";
  socket.emit("newMessage", JSON.stringify(msjToSend));
});

//-------------------------------------------------------------------------------
//--------------------------------Tabla Productos--------------------------------
//-------------------------------------------------------------------------------

const tabla = document.getElementById("tablaProductos");

fetch("http://localhost:8080/api/productos-test")
  .then((res) => {
    return res.json();
  })
  .then((datos) => {
  tabla.innerHTML = datos
    .map((dato) => {
      return `<tr>
  <td>${dato.nombre}</td>
  <td>${dato.precio}</td>
  <td>${dato.stock}</td>
  <td><img src=${dato.foto} alt=${dato.nombre}></td>
</tr>`;
    })
    .join(" ");
});
