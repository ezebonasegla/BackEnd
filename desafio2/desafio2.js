const fs = require('fs');

class Contenedor {
    constructor(nombre) {
        this.nombre = "./desafio2/" + nombre + ".json";
    }

    async getData() {
        try {
            if (!fs.existsSync(this.nombre)) {
                fs.writeFileSync(this.nombre, '[]');
            }
            return await fs.promises.readFile(this.nombre);
        } catch (error) {
            console.log(error);
        }
    }

    async save(objeto) {
        try {
            let contenido = await this.getData();
            contenido = JSON.parse(contenido);
            let id = contenido.length > 0 ? contenido[contenido.length - 1].id + 1 : 1;
            objeto.id = id;
            contenido.push(objeto);
            await fs.promises.writeFile(this.nombre, JSON.stringify(contenido));
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id) {
        try {
            let contenido = await this.getData();
            contenido = JSON.parse(contenido);
            let result = contenido.find(x => x.id == id);
            if (result != undefined) {
                return console.log(result);
            }
            return console.log(null);
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            let contenido = await this.getData();
            contenido = JSON.parse(contenido);
            return console.log(contenido);
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id) {
        try {
            let contenido = await this.getData();
            contenido = JSON.parse(contenido);
            contenido = contenido.filter(x => x.id != id);
            fs.writeFileSync(this.nombre, JSON.stringify(contenido));
        } catch (error) {
            console.log(error);
        }
    }

    async deleteAll() {
        try {
            fs.writeFileSync(this.nombre, '[]');
        } catch (error) {
            console.log(error);
        }
    }
}

const objetoEj = {
    title: "Mouse",
    price: 250,
    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51ZuHJXqLwL._AC_SX425_.jpg",
    id: ""
}

const contenedor = new Contenedor("productos");


/* contenedor.save(objetoEj); */
/* contenedor.getById(1); */
/* contenedor.getAll(); */
/* contenedor.deleteById(4); */
/* contenedor.deleteAll(); */