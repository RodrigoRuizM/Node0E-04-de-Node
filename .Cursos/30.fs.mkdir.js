// https://www.geeksforgeeks.org/node-js-fs-mkdir-method/
// Node.js program to demonstrate the    
// fs.mkdir() Method 

const fs = require('fs');
const path = require('path');
const wPathObj = path.parse(__filename);
// 
console.clear();
// 
console.log('Directorio:')
console.log(wPathObj.dir);
console.log(`\n`);

console.log('Directorio Armado:')
const wDir = path.join(__dirname, '/');
console.log(wDir);
console.log(`\n`);


fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Directory created successfully!');
});