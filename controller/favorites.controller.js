import favorites from '../model/favorites.dao.js'

export function getAll(req, res){
    favorites.getAll(req.query.id)
    .then(function(favorites){
        res.status(200).json(favorites)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err })
    })
}

export function getFavorites(req, res){
    favorites.getFavorites(req.query.roomid, req.query.userid)
    .then(function(favorites){
        res.status(200).json(favorites)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err })
    })
}

export function create(req, res){
    favorites.create({
        roomid: req.body.roomid,
        userid: req.body.userid,
    })
    .then(function(favorites){
        res.status(200).json({msg: "Sala agregada a favoritos"})
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: "Error al guardar en favoritos" })
    })
}

export function deleteById(req, res){
    favorites.deleteById(req.query.id)
    .then(function(favorites){
        res.status(200).json(favorites) 
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err })
    })
}

export default {
    getAll,
    getFavorites,
    create,
    deleteById,
}