import room from '../model/rooms.dao.js'

//Funciones necesarias para la API
export function getAll(req, res){
    room.getAll()
    .then(function(rooms){
        res.status(200).json(rooms)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err })
    })
}

export function getOne(req, res){
    room.getOne(req.query.id)
    .then(function(rooms){
        res.status(200).json(rooms)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err })
    })
}

export function getDistrict(req, res){
    room.getDistrict(req.query.district)
    .then(function(rooms){
        res.status(200).json(rooms)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err })
    })
}

export function create(req, res){
    room.create(req.body)
    .then(function(rooms){
        res.status(200).json({msg: "Sala registrada con éxito"})
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: "Error al registrar la sala" })
    })
}

export function updateOne(req, res){
    room.updateId(req.query.id, req.body)
    .then(function(rooms){
        res.status(200).json(rooms)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err.message })
    })
}

export function replaceOne(req, res){
    room.replaceId(req.query.id, req.body)
    .then(function(rooms){
        res.status(200).json(rooms)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err.message })
    })
}

export function deleteOne(req, res){
    room.deleteById(req.query.id)
    .then(function(rooms){
        res.status(200).json(rooms) 
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err })
    })
}

export function registerRoom(req, res){
    room.create({
        name: req.body.name,
        description: req.body.description,
        address: req.body.address,
        city: req.body.city,
        img: req.body.img,
        price: req.body.price,
        meters: req.body.meters,
        type: req.body.type,
        services: req.body.services,
        opening: req.body.opening,
        closing: req.body.closing,
        services: req.body.services,
    })
    .then(function(){
        res.status(200).json({msg: "Sala registrada con éxito"})
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: "error al registrar la sala" })
    })
}

export function getRoomUser(req, res){
    room.getRoomUser(req.query.user_id)
    .then(function(rooms){
        res.status(200).json(rooms)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err })
    })
}

export default {
    getAll,
    getOne,
    getDistrict,
    getRoomUser,
    create,
    updateOne,
    replaceOne,
    deleteOne,
    registerRoom
}