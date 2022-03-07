import express from 'express'
import controllerBookings from '../controller/bookings.controller.js'

//Crear archivo donde se llamen a las contantes para no repetir siempre este paso en todas las rutas
const router = express.Router() //LLamamos al servidor.

//salas - bookings
router.route('/api/bookings')
.get(controllerBookings.getAll) //funciona asi localhost:8001/api/bookings
.post(controllerBookings.create) //funciona asi localhost:8001/api/bookings
router.route('/api/bookings/confirmed')
.get(controllerBookings.getAllByUser)
router.route('/api/bookings/id')
.get(controllerBookings.getOne) //funciona asi localhost:8001/api/bookings/id?id=xxxxxxx
.delete(controllerBookings.deleteOne) //funciona asi localhost:8001/api/bookings/id?id=xxxxxxx
.patch(controllerBookings.updateOne) //funciona asi localhost:8001/api/bookings/id?id=xxxxxxx - pasar los parametros que se quieren modificar por el body del thunder client
.put(controllerBookings.replaceOne) //fufunciona asi localhost:8001/api/bookings/id?id=xxxxxxx - pasar los parametros que se quieren remplazar por el body del thunder client


export default router