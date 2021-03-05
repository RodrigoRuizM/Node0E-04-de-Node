// CONFIGURACION INDEPENDIENTE DE YARGS
// 
const mod_Argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de Tabla de Multiplicar'
    })
    .check((argv, options) => {
        console.log('yargs:', argv)
        if (isNaN(argv.b)) {
            throw 'La base requiere ser numérica, ej: --base=1'
        }
        return true;
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: '[Opcional] Listar tabla creada'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Multiplicador Final, valores: 1 a n'
    })
    .check((argv, options) => {
        console.log('yargs:', argv)
        if (isNaN(argv.h)) {
            throw 'Multiplicador requiere ser numérico, ej: --hasta=10'
        }
        return true;
    })
    .argv;

// 

module.exports = mod_Argv;