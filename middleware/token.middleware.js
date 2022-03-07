import jwt from 'jsonwebtoken'
import config from '../config.js'

export function JwtValidateMiddleware(req, res, next) {
    const token = req.header('auth-token')
    
    if (token){
        try{
            const verify = jwt.verify(token, config.jwt.secret)
            req.user = verify
            next()
        }
        catch(err){
            res.status(401).json({error: 401, msg: 'Token inválido'})
        }

    } else {
        res.status(400).json({error: 400, msg: 'No envió el token'})
    }
}

export function createToken(data){
    return jwt.sign(data, config.jwt.secret)
}

export default{
    JwtValidateMiddleware,
    createToken
}