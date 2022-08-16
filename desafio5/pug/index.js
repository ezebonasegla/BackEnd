const Contenedor = require('./managers/metodos.js');
const express = require('express');
const {
  Router
} = express;
const router = Router();
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on('error', (error) => console.log(`Error en servidor ${error}`));
app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/products', router);

let products = new Contenedor("products");

app.get('/form', (req, res) => {
  res.render('form.pug', {});
});


router.get('/', async (req, res, next) => {
  try {
    let productsArray = await products.getAll();
    if (productsArray.length > 0) {
      res.render('products.pug', {
        title: 'listado de productos',
        products: productsArray,
        productsExist: true
      });
    } else {
      res.render('products.pug', {
        productsExist: false
      });
    }
  } catch (error) {
    next(error);
  }
}).post('/', async (req, res, next) => {
  try {
    if (!req.body.title || !req.body.price || !req.body.thumbnail) {
      throw new Error("El producto no tiene todos los campos");
    }
    await products.save(req.body).then(() => {
      res.redirect('/products');
    });
  } catch (err) {
    next(err);
  }
})