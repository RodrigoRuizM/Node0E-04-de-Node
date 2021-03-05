const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
// 
const colors = require('colors');
// 


const fn31_CreaTabla_Mult = async(_Base = 0) => {

    console.log(`----------------------------------------`);
    console.log('Fn Crea Tabla del', colors.red(_Base));
    console.log(`----------------------------------------`);
    // 
    // 
    let wOutPut = ''

    for (let i = 0; i <= 15; i++) {
        wOutPut += `${_Base} x ${i} = ${_Base * i} \n`;
    }

    console.log(wOutPut);

    fs.writeFile(`./Salidas/30.Tabla-${_Base}.txt`, wOutPut, (err) => {
        if (err) throw err;
        console.log(`The file: Tabla-${_Base}.txt ..Has been saved!`);
    });
};


const fn31_CreaTabla_Mult_Promesa = (_Base = 10) => {

    return wPromesa = new Promise((resolve, reject) => {

        console.log(`----------------------------------------`.yellow);
        console.log('Fn Crea Tabla del', _Base.green);
        console.log(`----------------------------------------`.yellow);

        // 
        let wOutPut = '';
        let wError = true;

        for (let i = 0; i <= 15; i++) {
            wOutPut += `${_Base} x ${i} = ${_Base * i} \n`;
        }

        fs.writeFile(`./Salidas/30.Tabla-${_Base}.txt`, wOutPut, (_err) => { wError = _err });

        console.log(wOutPut);
        wError ?
            resolve(`Tabla-${_Base}.txt`) :
            reject(`ERROR ${wError} al Crear Archivo: Tabla${_Base}.txt.`);
    });

}


const fn31_CreaTabla_Mult_Async = async(_Base = 100) => {

    try {

        console.log(`----------------------------------------`);
        console.log('Fn Crea Tabla del', _Base);
        console.log(`----------------------------------------`);
        // 
        // 
        let wTablaSalida = ''

        for (let i = 0; i <= 15; i++) {
            wTablaSalida += `${_Base} x ${i} = ${_Base * i} \n`;
        }

        console.log(wTablaSalida);

        fs.writeFileSync(`./Salidas/30.Tabla-${_Base}.txt`, wTablaSalida);

        return `Tabla-${_Base}.txt`;

    } catch (_err) {
        throw _err
    };


};


const fn31_CreaTabla_Mult_AsyncList = async(_Base = 100, _Listar) => {

    try {

        // 
        let wTablaSalida = ''

        for (let i = 0; i <= 15; i++) {
            wTablaSalida += `${colors.white(_Base)} ${'x'.yellow} ${colors.underline.red(i)} ${'='.yellow} ${colors.blue(_Base * i)} \n`;
        }
        // Lista en Consola:
        if (_Listar) {
            console.log(`----------------------------------------`.yellow);
            console.log('Fn Crea Tabla del'.red, colors.red(_Base));
            console.log(`----------------------------------------`.yellow);
            console.log(wTablaSalida);
        }
        // 
        fs.writeFileSync(`./Salidas/30.Tabla-${_Base}.txt`, wTablaSalida);

        return `Tabla-${_Base}.txt`;

    } catch (_err) {
        throw _err
    };

};

const fn31_CreaTabla_Mult_AsyncListTo = async(_Base = 100, _Listar = false, _Hasta = 15) => {

    try {

        // 
        let wTablaSalida = '',
            wTablaOut = '';

        for (let i = 0; i <= _Hasta; i++) {
            wTablaSalida += `${colors.white(_Base)} ${'x'.yellow} ${colors.underline.red(i)} ${'='.yellow} ${colors.blue(_Base * i)} \n`;
            wTablaOut += `${_Base} x ${i} = ${_Base * i} \n`;
        }
        // Lista en Consola:
        if (_Listar) {
            console.log(`----------------------------------------`.yellow);
            console.log('Fn Crea Tabla del'.red, colors.red(_Base));
            console.log(`----------------------------------------`.yellow);
            console.log(wTablaSalida);
        }
        // 
        fs.writeFileSync(`./Salidas/30.Tabla-${_Base}.txt`, wTablaOut);

        return `Tabla-${_Base}.txt`;

    } catch (_err) {
        throw _err
    };

};
// 
module.exports = {
    fn31_CreaTabla_Mult,
    fn31_CreaTabla_Mult_Promesa,
    fn31_CreaTabla_Mult_Async,
    fn31_CreaTabla_Mult_AsyncList,
    fn31_CreaTabla_Mult_AsyncListTo
}