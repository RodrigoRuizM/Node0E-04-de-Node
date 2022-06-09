// https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback

// NODEJS.... Documentación
const fs = require('fs');
//
console.clear();
//

// console.log('LISTAS DE ARCHIVOS DEL DIRECTORIO');

// async function print(path) {
//     const dir = await fs.promises.opendir(path);
//      console.log(dir);
//     for await (const dirent of dir) {
//         console.log(dirent.name);
//     }
// }
// print('./').catch(console.error);

console.log('ES UN DIRECTORIO?');
// https://www.geeksforgeeks.org/node-js-fs-dirent-isdirectory-method/

// Initiating asyn function
async function fn_isDirectory(path) {
  // Creating and initiating directory's
  const dir = await fs.promises.opendir(path);

  for await (const xFile of dir) {
    console.log(xFile.name);
    const wRead = xFile.isDirectory();
    console.log(wRead);
  }
}

// Catching error
fn_isDirectory('./').catch(console.error);
