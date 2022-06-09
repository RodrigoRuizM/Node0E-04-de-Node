// https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback

// NODEJS.... Documentación
const fs = require('fs');
// 
const wBase = 3;
let wOutPut = ''


console.clear();
console.log(`-------------`);
console.log('fs.writeFile(file, data[, options], callback)');
console.log(`----------------------------------------`);
// 
// 

for (let i = 0; i <= 15; i++) {
    wOutPut += `${wBase} x ${i} = ${wBase * i} \n`;

}

console.log(wOutPut);

fs.writeFile(`./Salidas/30.Tabla${wBase}.txt`, wOutPut, (err) => {
    if (err) throw err;
    console.log(`The file: 30.Tabla${wBase}.txt ..Has been saved!`);
});