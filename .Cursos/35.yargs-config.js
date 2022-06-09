//
//  CONFIGURANDO YARGS  http://yargs.js.org/
//
const { fn31D_CreaTabla_Mult_AsyncList } = require('../helpers/31.createTable');
//
// YARGS
const rq_Argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
    })
    .check((argv, options) => {
        console.log('yargs:', argv);
        if (isNaN(argv.b)) {
            throw 'La base requiere ser numérica, ej: --base=1';
        }
        return true;
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        demandOption: true,
        default: false,
    }).argv;

// -------------------------------
console.clear();

console.log(rq_Argv);

// ASINCRONICA
fn31D_CreaTabla_Mult_AsyncList(rq_Argv.base, rq_Argv.list)
    .then((_Archivo) => console.log(_Archivo, 'Creado'))
    .catch((_err) => console.log(_err));