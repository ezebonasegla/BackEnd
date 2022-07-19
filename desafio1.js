class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return console.log(`El nombre completo es ${this.nombre} ${this.apellido}`);
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas() {
        return console.log(`Cantidad de mascotas: ${this.mascotas.length}`);
    }

    addBook(book) {
        this.libros.push(book);
    }

    getBookNames() {
        return console.log(this.libros.map(book => book.nombre));
    }
};

let usuario = new Usuario('Juan', 'Perez',
    [{
            nombre: "Don Quijote de la Mancha",
            autor: "Miguel de Cervantes"
        },
        {
            nombre: "El Zarco",
            autor: "Ignacio Altamirano"
        },
    ],
    ["Perro", "Gato"]);

usuario.getFullName();

usuario.addMascota("Tortuga");

usuario.countMascotas();

usuario.addBook({
    nombre: "El señor de los anillos",
    autor: "J.R.R. Tolkien"
});

usuario.getBookNames();