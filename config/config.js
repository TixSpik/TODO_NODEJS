const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'

        }
    })
    .command('actualizar', 'actualizar el estado de la tarea', {
        descripcion: {
            demand: true,
            alias: 'a',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'borra una tarea', {
        descripcion: {
            demand: true,
            alias: 'a',
            desc: 'Descripcion de la tarea a borrar'
        }
    })
    .help()
    .argv

module.exports = {
    argv
}