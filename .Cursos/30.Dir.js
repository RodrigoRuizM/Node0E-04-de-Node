// READ-DIR https://www.youtube.com/watch?v=7taS_EGdKIk

// 
// https://www.hektorprofe.net/curso/nodejs-para-principiantes/modulo-path
// 
const fs = require('fs');
const path = require('path');
const wPathObj = path.parse(__filename);
// 
console.clear();
//

console.log('Datos del Archivo Actual')
console.log(wPathObj);
console.log(`\n`)

console.log('Ubicación del Archivo Actual: ');
console.log(__filename);
console.log(`\n`)

console.log('Directorio:')
console.log(wPathObj.dir);
console.log(__dirname);
console.log(`\n`);

console.log('Directorio Armado:')
const wDir = path.join(__dirname, '/');
console.log(wDir);
console.log(`\n`);

console.log('Archivos del Directorio: SINCRONO');
const wFiles = fs.readdirSync(wDir);
console.log(wFiles);

console.log(`\n`);
fs.readdir(wDir, (err, xFiles) => {
    if (err) {
        throw err
    }
    console.log('ASINCRONO: Archivos del Directorio');
    console.log(xFiles);
});


console.log(`\n`);
console.log('...fin...');