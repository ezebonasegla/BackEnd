const Contenedor = require('./managers/metodos.js');
const express = require('express');
const {
  Router
} = express;
const app = express();
const {
  engine
} = require('express-handlebars');
const router = Router();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on('error', (error) => console.log(`Error en servidor ${error}`));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
app.set('views', './views');
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
  })
);

app.use('/products', router);

let products = new Contenedor("products");


app.get('/form', (req, res) => {
  //sirve form.hbs en index.hbs
  res.render('form', {});
});

router.get('/', async (req, res, next) => {
  try {
    let productsArray = await products.getAll();
    if (productsArray.length > 0) {
      res.render('productslist', {
        products: productsArray,
        productsExist: true
      });
    } else {
      res.render('productslist', {
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