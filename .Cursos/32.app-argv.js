// EXTRACCION DE ARGUMENTOS DESDE CONSOLA

const {
    fn31A_CreaTabla_Mult,
    fn31B_CreaTabla_Mult_Promesa,
    fn31C_CreaTabla_Mult_Async,
} = require('../helpers/31.createTable');

console.clear();

// DETALLE DE ARGUMENTOS  [vnode, vlocate, arg1, arg2,,,,]
// PATH UBICACION DE EJECUCION Y PARAMETROS ENTREGADOS
console.log(process.argv);

// Esta es una manera muy volatil de capturar la información de consola
// esta no es la forma optima de rescatar valores de parámetros
// al final la mejor opción

const [vNode, vLocate, vArg1 = 'base=0'] = process.argv;
console.log(vNode);
console.log(vLocate);
console.log(vArg1);

const [vTxt, vBase = 0] = vArg1.split('='); // separamos argumento1, sino tiene valor = 0
console.log(vTxt);
console.log(vBase);

// ASINCRONICA - ejecución con base de parámetro
fn31C_CreaTabla_Mult_Async(vBase)
    .then((_Archivo) => console.log(_Archivo, 'Creado'))
    .catch((_err) => console.log(_err));

// MEJOR OPCION: UTILIZAR UN PAQUETE QUE AYUDE A ENTENDER COMO
// DEBEN SER CARGADOS LOS PARAMETROS DE LA APP
// QUE ES LO MISMO DE COMO UTILIZAR NUESTRA APP CON PARAMETROS
// ejemplo: node --help : SOLUCION: YARGS video 33 y 34