import room from '../model/districts.dao.js'

//Funciones necesarias para la API
export function getAll(req, res){
    room.getAll()
    .then(function(districts){
        res.status(200).json(districts)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err })
    })
}

export function getOne(req, res){
    room.getOne(req.query.id)
    .then(function(districts){
        res.status(200).json(districts)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err })
    })
}

export function create(req, res){
    room.create(req.body)
    .then(function(districts){
        res.status(200).json({msg: "Barrio registrado con éxito"})
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: "Error al registrar el barrio" })
    })
}

export function updateOne(req, res){
    room.updateId(req.query.id, req.body)
    .then(function(districts){
        res.status(200).json(districts)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err.message })
    })
}

export function replaceOne(req, res){
    room.replaceId(req.query.id, req.body)
    .then(function(districts){
        res.status(200).json(districts)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err.message })
    })
}

export function deleteOne(req, res){
    room.deleteById(req.query.id)
    .then(function(districts){
        res.status(200).json(districts) 
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err })
    })
}

export default {
    getAll,
    getOne,
    create,
    updateOne,
    replaceOne,
    deleteOne
}