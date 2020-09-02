const descripcion = {
  alias: 'd',
  demand: true,
  desc: 'Descripción tarea por crear'
};
const completado = {
  alias: 'c',
  default: true,
  desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
  .command('actualizar', 'Actualiza el estado completado de una tarea', {
    descripcion,
    completado
  })
  .command('crear', 'Crear un elemento por hacer', {
    descripcion
  })
  .command('borrar', 'Borrar tarea por hacer', {
    descripcion
  })
  .help().argv;

module.exports = {
  argv
};
