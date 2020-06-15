const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de comando crear'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado

    })
    .command('listar', 'Listar tareas por hacer', {
        descripcion,
        completado

    })
    .command('borrar', 'Elimina una tarea', {
        descripcion

    })
    .help()
    .argv;

module.exports = {
    argv
};