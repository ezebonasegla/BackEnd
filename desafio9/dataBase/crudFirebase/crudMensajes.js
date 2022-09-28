export class Contenedor {
    constructor(queryMensajes) {
        this.queryMensajes = queryMensajes;
    }

    async save(mensaje) {
        try {
            await this.queryMensajes.add(mensaje);
        } catch (error) {
            console.log("Error al guardar el mensaje: ", error);
        }
    }

    async getAll() {
        try {
            const querySnapshot = await this.queryMensajes.get();
            const mensajes = querySnapshot.docs.map((doc) => doc.data());
            return mensajes;
        } catch (error) {
            console.log("Error al obtener los mensajes: ", error);
        }
    }
}
