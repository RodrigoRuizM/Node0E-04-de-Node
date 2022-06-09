//

const {
  fn31A_CreaTabla_Mult,
  fn31B_CreaTabla_Mult_Promesa,
  fn31C_CreaTabla_Mult_Async,
} = require('../helpers/31.createTable');

console.clear();

// SINCRONICA
fn31A_CreaTabla_Mult();

// PROMESA
fn31B_CreaTabla_Mult_Promesa()
  .then((_Archivo) => console.log(_Archivo, 'Creado'))
  .catch((_err) => console.log(_err));

// ASINCRONICA
fn31C_CreaTabla_Mult_Async()
  .then((_Archivo) => console.log(_Archivo, 'Creado'))
  .catch((_err) => console.log(_err));
