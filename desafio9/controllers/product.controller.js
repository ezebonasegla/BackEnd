import { Productos } from "../models/product.model.js";

//Agregar producto
export const getData = async (req, res) => {
  const id = req.params.id;
  if (id) {
    const enviar = await Productos.findById(id);
    res.json({ respuesta: enviar });
  } else {
    const enviar = await Productos.find({});
    res.json({ respuesta: enviar });
  }
};

//Agregar producto
export const addData = async (req, res) => {
  const product = req.body;
  const productoNuevo = new Productos({
    nombre: product.nombre,
    precio: product.precio,
    stock: product.stock,
  });
  const usuarioGuardado = await productoNuevo.save();
  res.json({ usuarioGuardado });
};

export const updateData = async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, stock } = req.body;
  const usuarioModificado = await Productos.updateOne(
    { _id: id },
    {
      $set: {
        nombre: nombre,
        precio: precio,
        stock: stock,
      },
    }
  );
  if (usuarioModificado.modifiedCount == 1) {
    res.json({ respuesta: "Usuario Modificado" });
  } else {
    res.json({ respuesta: "Usuario NO Modificado" });
  }
};

export const delData = async (req, res) => {
  const { id } = req.params;
  const productoBorrar = await Productos.deleteOne({ _id: id });
  if (productoBorrar.deletedCount == 1) {
    res.json({ respuesta: "Producto eliminado" });
  } else {
    res.json({ respuesta: "Producto no encontrado" });
  }
};
