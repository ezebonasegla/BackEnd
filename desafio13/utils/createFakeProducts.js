'use strict';
const {
  faker: faker
} = require('@faker-js/faker');
faker.locale = "es";

//Genera un producto mock
module.exports.crearProductos = () => ({
  id: faker.datatype.uuid(),
  nombre: faker.commerce.product(),
  precio: faker.commerce.price(),
  stock: faker.datatype.number({ min: 10, max: 100 }),
  foto: faker.image.image(75, 75)
});
