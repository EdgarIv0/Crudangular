const express = require ('express');
const router = express.Router();

const empleados = require('../controllers/empleado.controller');

router.get('/', empleados.getEmpleados);

//Crear empleado
router.post('/', empleados.createEmpleado);

//Obtener empleado
router.get('/:id', empleados.getEmpleado);

//Actualizar empleado
router.put('/:id', empleados.updateEmpleado);

//Eliminar empleado
router.delete('/:id', empleados.deleteEmpleado);

module.exports = router;