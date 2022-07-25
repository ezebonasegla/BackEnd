const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

const nombresProductos = productos.map(producto => producto.nombre).join(', ')

const total = parseFloat(productos.reduce((total, producto) => total + producto.precio, 0).toFixed(2))

const promedio = parseFloat((total / productos.length).toFixed(2))

const productoMasBarato = productos.reduce((productoMasBarato, producto) => {
    if (productoMasBarato.precio > producto.precio) {
        return producto
    } else {
        return productoMasBarato
    }
}
, productos[0])

const productoMasCaro = productos.reduce((productoMasCaro, producto) => {
    if (productoMasCaro.precio < producto.precio) {
        return producto
    } else {
        return productoMasCaro
    }
}
, productos[0])

const productosObj = {
    a: nombresProductos,
    b: total,
    c: promedio,
    d: productoMasBarato,
    e: productoMasCaro
}
console.log(productosObj)