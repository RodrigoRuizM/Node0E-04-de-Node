//
// What's Yargs?
// Yargs helps you build interactive command line tools by parsing arguments and generating an elegant user interface.

// Yargs gives you:

// commands and (grouped) options (like module run -n --force),
// a dynamically generated help menu based on your arguments,
// bash-completion shortcuts for commands and options,
// and much more.
// With these features, and many more, yargs allows you to focus on building your program without worrying about your args.

//
const { fn31_CreaTabla_Mult_Async } = require('../helpers/31.createTable');

//
const imp_Argv = require('yargs').argv; // .argv = sólo la parte de argumentos

console.clear();
// Node
console.log('Node: ', process.argv);
// Yargs
console.log('Yargs: ', imp_Argv);

console.log('base: yargs', imp_Argv.base);