const argv = require('./config/config').argv
const TODO = require('./TODO/todo')

let comando = argv._[0]

switch (comando) {
    case 'crear':
        let tarea = TODO.crear(argv.descripcion)
        console.log(tarea)
        console.log('tarea guardada')
        break

    case 'listar':
        let listar = TODO.getListado()
        break

    case 'actualizar':
        let actualizado = TODO.ActualizarTarea(argv.descripcion, argv.completado)
        console.log(actualizado)
        console.log('tarea actualizada')
        break

    case 'borrar':
        let borrar = TODO.BorrarTarea(argv.descripcion)
        console.log(borrar)
        console.log('tarea eliminada')
        break

    default:
        console.log('comando no reconocido')
}