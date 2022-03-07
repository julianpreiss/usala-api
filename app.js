import express from 'express' //Importamos los módulo necesarios de express.
import routerRooms from './router/rooms.router.js' //Importamos el acceso al archivo de los router
import routerUsers from './router/users.router.js' //Importamos el acceso al archivo de los router
import routerBookings from './router/bookings.router.js'
import routerDistricts from './router/districts.router.js'
import routerFavorites from './router/favorites.router.js'
import multer from 'multer'
import cors from 'cors' //intermediario para que no hayas problemas para conectar dos servidores

const app = express() //LLamamos al servidor.

//Descodificamos la información del objeto con midlleware.
app.use(express.json()) //Viene por el body y lo representa en JSON.
app.use(express.urlencoded({ extended: true })) //Información del formulario que viene por el body.
app.use(cors()) //intermediario para conectar ambos servidores express y vue.js

//Ruteamos las llamadas de las colleciones en la api
app.use(routerRooms)
app.use(routerUsers)
app.use(routerBookings)
app.use(routerDistricts)
app.use(routerFavorites)
app.use('/api/img', express.static('img'))

app.get('/', function (req, res) {
    res.send('Estamos mostrando en el browser');
})

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'img')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})

app.post('/upload', upload.single('file'), (req, res) =>{
    res.json({file:'file subida'});
});

//Conexión con el puerto para levantar el servidor.
app.listen(8001, function(){
    console.log("El servidor está conectado.")
})