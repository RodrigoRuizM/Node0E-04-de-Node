// CADA UNA DE ESTAS FUNCIONES SE EJECUTAN PARA MOSTRAR
// DISTINTAS FORMAS DE HACER UNA TAREA
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
//
const colors = require('colors');
//

// UBICACION DE ARCHIVOS DE SALIDA
const fileSalida = './Salidas';

// TABLA MULTIPLICAR SIMPLE
// ASYNC
const fn31A_CreaTabla_Mult = async(_Base = 0) => {
    //
    console.log(`----------------------------------------`);
    console.log('Fn Crea Tabla del', colors.red(_Base));
    console.log(`----------------------------------------`);
    //
    //
    let wOutPut = '';

    for (let i = 0; i <= 15; i++) {
        wOutPut += `${_Base} x ${i} = ${_Base * i} \n`;
    }

    console.log(wOutPut);

    fs.writeFile(`./Salidas/31A.Tabla-${_Base}.txt`, wOutPut, (err) => {
        if (err) throw err;
        console.log(`The file: 31A-Tabla-${_Base}.txt ..Has been saved!`);
    });
};

// TABLA. MULT. con PROMESA
const fn31B_CreaTabla_Mult_Promesa = async(_Base = 10) => {
    //
    return (wPromesa = new Promise((resolve, reject) => {
        console.log(`----------------------------------------`.yellow);
        console.log('Fn Crea Tabla del', colors.red(_Base));
        console.log(`----------------------------------------`.yellow);

        //
        let wOutPut = '';
        let wError = true;

        for (let i = 0; i <= 15; i++) {
            wOutPut += `${_Base} x ${i} = ${_Base * i} \n`;
        }

        fs.writeFile(`./Salidas/31B.Tabla-${_Base}.txt`, wOutPut, (_err) => {
            wError = false;
            console.log('Error al crear archivo. ', _err);
        });

        console.log(wOutPut);
        //
        if (wError) {
            resolve(`31B.Tabla-${_Base}.txt`);
        } else {
            reject(`ERROR ${wError} al Crear Archivo: Tabla${_Base}.txt.`);
        }
    }));
};

// TABLA MULT. ASYNC + TRY-CATCH

const fn31C_CreaTabla_Mult_Async = async(_Base = 100) => {
    try {
        console.log(`----------------------------------------`);
        console.log('Fn Crea Tabla del', _Base);
        console.log(`----------------------------------------`);
        //
        //
        let wTablaSalida = '';

        for (let i = 0; i <= 15; i++) {
            wTablaSalida += `${_Base} x ${i} = ${_Base * i} \n`;
        }

        console.log(wTablaSalida);

        fs.writeFileSync(`./Salidas/31C.Tabla-${_Base}.txt`, wTablaSalida);

        return `Tabla-${_Base}.txt`;
        //
    } catch (_err) {
        throw _err;
    }
};

const fn31D_CreaTabla_Mult_AsyncList = async(_Base = 100, _Listar = false) => {
    //
    console.log('f31D', _Base, _Listar);
    //
    try {
        //
        let wTablaSalida_File = '';
        let wTablaSalida = '';
        //
        for (let i = 0; i <= 15; i++) {
            wTablaSalida += `${colors.white(_Base)} ${'x'.yellow} ${colors.underline.red(i)} ${
        '='.yellow
      } ${colors.blue(_Base * i)} \n`;
            //
            wTablaSalida_File += `${_Base} x ${i} = ${_Base * i} \n`;
        }

        // Lista en Consola:
        if (_Listar) {
            console.log(`----------------------------------------`.yellow);
            console.log('Fn Crea Tabla del'.red, colors.red(_Base));
            console.log(`----------------------------------------`.yellow);
            console.log(wTablaSalida);
        }

        //Save-Txt
        fs.writeFileSync(`./Salidas/31D.Tabla-${_Base}.txt`, wTablaSalida_File);

        return `Tabla-${_Base}.txt`;
    } catch (_err) {
        throw _err;
    }
};

const fn31E_CreaTabla_Mult_AsyncListTo = async(_Base = 100, _Listar = false, _Hasta = 20) => {
    try {
        //
        let wTablaSalida = '',
            wTablaOut = '';

        for (let i = 0; i <= _Hasta; i++) {
            wTablaSalida += `${colors.white(_Base)} ${'x'.yellow} ${colors.underline.red(i)} ${
        '='.yellow
      } ${colors.blue(_Base * i)} \n`;
            //
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
        fs.writeFileSync(`./Salidas/31E.Tabla-${_Base}.txt`, wTablaOut);

        return `Tabla-${_Base}.txt`;
    } catch (_err) {
        throw _err;
    }
};
//
module.exports = {
    fn31A_CreaTabla_Mult,
    fn31B_CreaTabla_Mult_Promesa,
    fn31C_CreaTabla_Mult_Async,
    fn31D_CreaTabla_Mult_AsyncList,
    fn31E_CreaTabla_Mult_AsyncListTo,
};