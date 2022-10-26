'use strict';
const {
  crearProductos: crearProductos
} = require('../utils/createFakeProducts.js');

let productsToSend;

//generador de productos Mocks
const fakeProductGenerator = () => {
  productsToSend = [];
  for (let i = 0; i < 5; i++) {
    productsToSend.push(crearProductos());
  }
};

//Enviar porductos mocks
module.exports.getData = (req, res) => {
  fakeProductGenerator();
  res.json(productsToSend);
};
