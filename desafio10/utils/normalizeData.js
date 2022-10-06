import { schema, normalize, denormalize } from "normalizr";
import util from "util";

//Calculo Compresion
const calcularCompresion = (original, normalized) => {
  const bitOriginal = util.inspect(original, false, 12, true).length;
  const bitNormalized = util.inspect(normalized, true, 7, true).length;
  return (bitNormalized * 100) / bitOriginal;
};

//Mapeo el array de mensajes armar el objeto con el formato que queremos y eliminar el object_id de mongoose
const depurarChat = (msj) => {
  const infodepurada = { id: "999", chats: [] };
  msj.map((item) => {
    infodepurada.chats.push({
      id: item.id,
      author: item.author,
      text: item.text,
      date: item.date,
    });
  });
  return infodepurada;
};

//Normalizo los chat
export const normalizeMensajes = (msj) => {
  //depuro y foramteo el char el chat
  const chatDepurado = depurarChat(msj);
  //Creo las entidades
  const user = new schema.Entity("users");
  const mensajes = new schema.Entity("mensajes", {
    author: user,
  });
  const chats = new schema.Entity("chats", { chats: [mensajes] });
  //
  const normalizedPosts = normalize(chatDepurado, chats);
  const compresion = calcularCompresion(msj, normalizedPosts);

  //Normalizo el chat, Calculo la compresion y retorno respuesta
  const respuesta = {
    normalizedPosts: normalizedPosts,
    compresion: compresion,
  };
  return respuesta;
};
