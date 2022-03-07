import express from 'express'
import controllerDistricts from '../controller/districts.controller.js'

//Crear archivo donde se llamen a las contantes para no repetir siempre este paso en todas las rutas
const router = express.Router() //LLamamos al servidor.

router.route('/api/districts')
.get(controllerDistricts.getAll)
.post(controllerDistricts.create)
router.route('api/districts/id')
.get(controllerDistricts.getOne) //funciona asi localhost:8001/api/districts/id?id=xxxxxxx
.delete(controllerDistricts.deleteOne) //funciona asi localhost:8001/api/districts/id?id=xxxxxxx
.patch(controllerDistricts.updateOne) //funciona asi localhost:8001/api/districts/id?id=xxxxxxx - pasar los parametros que se quieren modificar por el body del thunder client
.put(controllerDistricts.replaceOne) //fufunciona asi localhost:8001/api/districts/id?id=xxxxxxx - pasar los parametros que se quieren remplazar por el body del thunder client

export default router