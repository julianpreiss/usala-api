import bookings from '../model/bookings.dao.js'

//Funciones necesarias para la API
export function getAll(req, res){
    bookings.getAll()
    .then(function(bookings){
        res.status(200).json(bookings)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err })
    })
}

export function getAllByUser(req, res){
    bookings.getAllByUser(req.query.user_id)
    .then(function(bookings){
        res.status(200).json(bookings)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err })
    })
}

export function getOne(req, res){
    bookings.getOne(req.query.id)
    .then(function(bookings){
        res.status(200).json(bookings)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err })
    })
}

export function create(req, res){
    console.log(req.body)
    bookings.create(req.body)
    .then(function(bookings){
        res.status(200).json({msg: "Sala registrada con éxito"})
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: "Error al registrar la sala" })
    })
}

export function updateOne(req, res){
    bookings.updateId(req.query.id, req.body)
    .then(function(bookings){
        res.status(200).json(bookings)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err.message })
    })
}

export function replaceOne(req, res){
    bookings.replaceId(req.query.id, req.body)
    .then(function(bookings){
        res.status(200).json(bookings)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err.message })
    })
}

export function deleteOne(req, res){
    bookings.deleteById(req.query.id)
    .then(function(bookings){
        res.status(200).json(bookings) 
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err })
    })
}


export default {
    getAll,
    getAllByUser,
    getOne,
    create,
    updateOne,
    replaceOne,
    deleteOne,
}