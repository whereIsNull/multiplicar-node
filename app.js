//node.org/eng/docs <- todas las apis incluidas en node


//const fs = require('express'); //<- no nativo de node, instalado
//const fs = require('./fs'); //<- creados por nosotros

// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Crea archivo con la tabla', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;

// equivalente al código comentado
const argv = require('./config/yargs').argv;
const colors = require('colors');


const multiplicar = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        multiplicar.listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        multiplicar.crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${colors.green(archivo)}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
        break;
}

// multiplicar.crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado ${archivo}`))
//     .catch(e => console.log(e));


// si no se quiere acceder al objeto multiplicar, hacer el require con desestructuración:
//const {crearArchivo} = require('./multiplicar/multiplicar');