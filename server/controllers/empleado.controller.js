const { request } = require('express');
const { response } = require('express');
const Empleados = require('../models/Empleados');

const empleadoController = {}

//Listar todos los empleados
empleadoController.getEmpleados = async (req, res) =>{
    const empleados = await Empleados.find();
    res.json(empleados)
}

//Crear un empleado
empleadoController.createEmpleado = async (req, res) =>{
    //Request.body contiene el empleado
    //console.log(request.body);
    //response.json("Recibido");
    const empleado = new Empleados({
        nombre: req.body.nombre,
        puesto: req.body.puesto,
        departamento: req.body.departamento,
        salario: req.body.salario
    });
    await empleado.save();
    res.json({
        'status': 'Empleado guardado'
    });
}

//Actualizar empleado
empleadoController.updateEmpleado = async (req, res) =>{
    const {id} = req.params;
    const empleado = {
        nombre: req.body.nombre,
        puesto: req.body.puesto,
        departamento: req.body.departamento,
        salario: req.body.salario
    };
    await Empleados.findByIdAndUpdate(id, {$set: empleado}, {new: true} )
    res.json({status: 'Empleado actualizado'});
}

//Consultar empleado
empleadoController.getEmpleado = async (req, res) =>{
    //Obtenemos el id de la petición
    //console.log(req.params);
    const empleado = await Empleados.findById(req.params.id);
    response.json(empleado);
}

//Eliminar empleado
empleadoController.deleteEmpleado = async (req, res) =>{
    const {id} = req.params;
    await Empleados.findByIdAndDelete(id);
    res.json({status: 'Empleado eliminado'});
}

module.exports = empleadoController;