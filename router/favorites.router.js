import express from 'express'
import controllerFavorites from '../controller/favorites.controller.js'

//Crear archivo donde se llamen a las contantes para no repetir siempre este paso en todas las rutas
const router = express.Router() //LLamamos al servidor.

router.route('/api/favorites')
.post(controllerFavorites.create)
router.route('/api/favorites/check')
.get(controllerFavorites.getFavorites)
router.route('/api/favorites/id')
.get(controllerFavorites.getAll)
.delete(controllerFavorites.deleteById) //funciona asi localhost:8001/api/favorites/id?id=xxxxxxx

export default router