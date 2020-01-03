const fs = require('fs')
const colors = require('colors')

let listadoporhacer = []

const GuardarDB = () => {
    let data = JSON.stringify(listadoporhacer)

    fs.writeFile('./bd/data.json', data, function (err) {
        return err ? false : true
    })
}

const CargarDB = () => {
    try {
        listadoporhacer = require('../bd/data.json')
    } catch (error) {
        listadoporhacer = []
    }
    return listadoporhacer
}

const crear = (descripcion) => {
    CargarDB()
    let TODO = {
        descripcion,
        completado: false
    }

    listadoporhacer.push(TODO)
    GuardarDB()
    return TODO
}

const getListado = () => {
    let datos = CargarDB()

    for (const tarea of datos) {
        console.log('=================='.green)
        console.log(tarea.descripcion)
        console.log(tarea.completado)
        console.log('=================='.green)
        console.log('')

    }
}

const ActualizarTarea = (descripcion, completado) => {
    CargarDB()

    let index = listadoporhacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoporhacer[index].completado = completado
        GuardarDB()
        return true
    } else {
        return false
    }
}

const BorrarTarea = (descripcion) => {
    CargarDB()

    let nuevoListado = listadoporhacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    })
    if (listadoporhacer.length === nuevoListado.length) {
        return false
    } else {
        listadoporhacer = nuevoListado
        GuardarDB()
        return true
    }
}

module.exports = {
    crear,
    GuardarDB,
    getListado,
    ActualizarTarea,
    BorrarTarea
}