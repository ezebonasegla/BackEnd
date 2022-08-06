const Contenedor = require('./managers/metodos.js');
const express = require('express');
const {
    Router
} = express;

const app = express();
const router = Router();
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

server.on('error', (err) => {
    console.log(err);
});

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));

app.use('/api/products', router);

let products = new Contenedor("products");

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

router.get('/', async (req, res, next) => {
    try {
        let productsArray = await products.getAll();
        if (productsArray.length === 0) {
            throw new Error("No hay productos");
        } else {
            res.json(productsArray);
        }

    } catch (error) {
        next(error);
    }
}).get('/:id', async (req, res, next) => {
    try {
        let product = await products.getById(req.params.id);
        if (!product) {
            throw new Error("No existe el producto");
        } else {
            res.json(product);
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
            res.json(`${req.body.title} agregado correctamente`);
        });
    } catch (err) {
        next(err);
    }
}).put('/:id', async (req, res, next) => {
    try {
        let product = await products.getById(req.params.id);
        if (!product) {
            throw new Error("No existe el producto");
        } else {
            await products.update(req.params.id, req.body.title, req.body.price, req.body.thumbnail);
            res.json(`Producto ${req.params.id} modificado correctamente`);
        }
    } catch (error) {
        next(error);
    }
}).delete('/:id', async (req, res, next) => {
    try {
        let product = await products.getById(req.params.id);
        if (!product) {
            throw new Error("No existe el producto");
        } else {
            await products.deleteById(req.params.id);
            res.json(`Producto ${req.params.id} eliminado correctamente`);
        }
    } catch (error) {
        next(error);
    }
});