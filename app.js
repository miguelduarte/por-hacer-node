const colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];
console.log(comando);
switch (comando) {
  case 'crear':
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;
  case 'listar':
    let listado = porHacer.getListado();
    console.log(listado);
    for (let tarea of listado) {
      console.log('=======Por Hacer======'.green);
      console.log(tarea.descripcion);
      console.log('Estado: ', tarea.completado);
      console.log('======================'.green);
    }
    break;
  case 'actualizar':
    const actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
    break;

  case 'borrar':
    let borrado = porHacer.borrar(argv.descripcion);
    console.log(borrado);
    break;

  default:
    console.log('Comando no reconocido');
    break;
}
