import express from 'express'
import controllerRooms from '../controller/rooms.controller.js'

//Crear archivo donde se llamen a las contantes para no repetir siempre este paso en todas las rutas
const router = express.Router() //LLamamos al servidor.

//salas - rooms
router.route('/api/rooms')
.get(controllerRooms.getAll) //funciona asi localhost:8001/api/rooms
.post(controllerRooms.create) //funciona asi localhost:8001/api/rooms - pasar los parametros que se quie
router.route('/api/rooms/district')
.get(controllerRooms.getDistrict) //funciona asi localhost:8001/api/rooms/district?district=Chacarita
router.route('/api/rooms/user_id') //funciona asi localhost:8001/api/rooms/user_id?user_id=xxxxxxx
.get(controllerRooms.getRoomUser)
router.route('/api/rooms/id')
.get(controllerRooms.getOne) //funciona asi localhost:8001/api/rooms/id?id=xxxxxxx
.delete(controllerRooms.deleteOne) //funciona asi localhost:8001/api/rooms/id?id=xxxxxxx
.patch(controllerRooms.updateOne) //funciona asi localhost:8001/api/rooms/id?id=xxxxxxx - pasar los parametros que se quieren modificar por el body del thunder client
.put(controllerRooms.replaceOne) //fufunciona asi localhost:8001/api/rooms/id?id=xxxxxxx - pasar los parametros que se quieren remplazar por el body del thunder client

router.route('/registro/room')
.post(controllerRooms.registerRoom)

export default router