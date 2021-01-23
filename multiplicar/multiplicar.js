const fs = require('fs');
const colors = require('colors');

let data = '';

let listarTabla = (base, limite) => {
    console.log("===============".green);
    console.log(`=========tabla de ${base}======`.green);
    console.log("===============".green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
};

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}_limite-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}_limite-${limite}.txt`);
        });
    });
}

//console.log(module);

module.exports = {
    crearArchivo, // en ECMA6 no necesario crearArchivo: crearArchivo (mismo nombre)
    listarTabla
}