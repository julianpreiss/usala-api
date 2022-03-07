import user from '../model/users.dao.js'
import {createToken} from '../middleware/token.middleware.js'

//Funciones necesarias para la API
export function getAll(req, res){
    user.getAll()
    .then(function(users){
        res.status(200).json(users)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err })
    })
}

export function getOne(req, res){
    user.getOne(req.query.id)
    .then(function(users){
        res.status(200).json(users)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err })
    })
}

export function create(req, res){
    user.create(req.body)
    .then(function(users){
        res.status(200).json(users)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err })
    })
}

export function updateOne(req, res){
    user.updateId(req.query.id, req.body)
    .then(function(users){
        res.status(200).json(users)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err.message })
    })
}

export function replaceOne(req, res){
    user.replaceId(req.query.id, req.body)
    .then(function(users){
        res.status(200).json(users)
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err.message })
    })
}

export function deleteOne(req, res){
    user.deleteById(req.query.id)
    .then(function(users){
        res.status(200).json(users) 
    })
    .catch(function(err){
        res.status(500).json({ err: 500, msg: err })
    })
}

export function register (req, res) {
    user.create({
        name: req.body.name,
        last_name: req.body.last_name,
        email:req.body.email,
        date_birth: req.body.date_birth,
        phone: req.body.phone,
        user_name: req.body.user_name,
        password: req.body.password,
        type: req.body.type,
        owner: req.body.owner,
    })
    .then(function(){
        res.json({msg: "Usuario creado con éxito"})
    })
    .catch(function(err){
        res.status(400).json({error: 400, msg: err.msg, err: err})
    })
}

export function login (req, res) {
    user.login(req.body.email, req.body.password)
    .then(function(user){
        const status = "ok"
        const token = createToken(user)
        res.json({user, token, status})
    })
    .catch(function(err){
        const status = "error"
        res.json({msg: "Error al iniciar sesión", err: err, status})
    })
}

export default {
    getAll,
    getOne,
    create,
    updateOne,
    replaceOne,
    deleteOne,
    register,
    login
}