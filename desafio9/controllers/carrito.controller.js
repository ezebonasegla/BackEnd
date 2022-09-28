import { CarritoModel } from "../models/carritos.model.js";
import { Productos } from "../models/product.model.js";

//0Ver carritos
export const seeCart = async (req, res) => {
  const respuesta = await CarritoModel.getAllCart();
  res.json({ respuesta });
};

//1Crear carrito, devuelve id
export const addCart = async (req, res) => {
  const respuesta = await CarritoModel.createCart();
  res.json({ respuesta });
};

//2eliminar carrito
export const delCart = async (req, res) => {
  const { id } = req.params;
  const respuesta = await CarritoModel.deleteCart(id);
  res.json({ respuesta });
};

//3Ver productos del carrito
export const showProducts = async (req, res) => {
  const { id } = req.params;
  const respuesta = await CarritoModel.showProductsInCart(id);
  res.json({ respuesta });
};

//4Agregar producto al carrito
export const addProducts = async (req, res) => {
  const { id, id_producto } = req.params;
  //busco el producto con el id recibido
  const product = await Productos.findById(id_producto);
  //Verifico si existe el producto
  if (product) {
    //traido el array de productos del carrito indicado
    const productsInCart = await CarritoModel.showProductsInCart(id);
    // pusheo el nuevo producto en el array
    productsInCart.productos.push({
      id: String(product._id),
      nombre: product.nombre,
      precio: product.precio,
      stock: product.stock,
    });
    //Envio el array para actualizar
    const respuesta = await CarritoModel.addProductsToCart(id, productsInCart);
    res.json({ respuesta: respuesta });
  } else {
    res.json({ respuesta: "Producto no encontrado" });
  }
};

//5Eliminar producto del carrito
export const delProduct = async (req, res) => {
  const { id, id_producto } = req.params;

  //busco el carrito con el id recibido
  const productosInCart = await CarritoModel.showProductsInCart(id);
  if (productosInCart.productos.length > 0) {
    const respuesta = await CarritoModel.delProductsToCart(
      id,
      id_producto,
      productosInCart.productos
    );
    res.json({ respuesta: respuesta });
  } else {
    return res.json({ respuesta: "No hay productos en el carrito" });
  }
};
