const moment = require('moment');

const diaNacimiento = moment('26/02/2001', 'dd/mm/yyyy');

const diaHoy = moment();

const diferenciaAños = diaHoy.diff(diaNacimiento, 'years');
const diferenciaDias = diaHoy.diff(diaNacimiento, 'days');

console.log(`Hoy es ${diaHoy.format('dddd/mm/yyyy')} y yo nací el ${diaNacimiento.format('dddd/mm/yyyy')}`);
console.log(`La diferencia entre años es ${diferenciaAños} y la diferencia entre días es ${diferenciaDias}`);
