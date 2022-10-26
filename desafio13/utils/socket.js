'use strict';
const {
  chat: chat
} = require('./socketChat.js');

module.exports.socketModule = (io) => {
  io.on("connection", socket => {
    chat(socket, io);
  });
};
