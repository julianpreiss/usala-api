import express from 'express'
import controllerUsers from '../controller/users.controller.js'

//Crear archivo donde se llamen a las contantes para no repetir siempre este paso en todas las rutas
const router = express.Router() //LLamamos al servidor.

//users
router.route('/api/users')
.get(controllerUsers.getAll) //funciona asi localhost:8001/api/users
.post(controllerUsers.create) //funciona asi localhost:8001/api/users - pasar los parametros que se quie
router.route('/api/users/id')
.get(controllerUsers.getOne) //funciona asi localhost:8001/api/users/id?id=xxxxxxx
.delete(controllerUsers.deleteOne) //funciona asi localhost:8001/api/users/id?id=xxxxxxx
.patch(controllerUsers.updateOne) //funciona asi localhost:8001/api/users/id?id=xxxxxxx - pasar los parametros que se quieren modificar por el body del thunder client
.put(controllerUsers.replaceOne) //fufunciona asi localhost:8001/api/users/id?id=xxxxxxx - pasar los parametros que se quieren remplazar por el body del thunder client

router.route('/api/register')
.post(controllerUsers.register)
router.route('/api/login')
.post(controllerUsers.login)

export default router