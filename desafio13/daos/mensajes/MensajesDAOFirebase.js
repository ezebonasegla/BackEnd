const {
    dbFirebase: dbFirebase
} = require('../../config/configDB.js');

const {
    Contenedor: Contenedor
} = require('../../dataBase/crudFirebase/crudMensajes.js');

const queryMensajes = dbFirebase.collection('mensajes');

class MensajesDAOFirebase extends Contenedor {
    constructor() {
        super(queryMensajes);
    }
}

module.exports.MensajesDAOFirebase = MensajesDAOFirebase;

