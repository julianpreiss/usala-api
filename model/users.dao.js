import { ObjectId } from 'mongodb' //
import { dbConection } from './database.js'
import bcrypt from 'bcrypt'

export async function getAll(){ //Paradigma declarativo
    return dbConection(async function(db){ //se conecta a traves de la función conexion()
        return await db.collection('users').find({}).toArray()  //Devuelve la búsqueda de todos los documentos de la colección users en un array
    })
}

export async function getOne(id){
    return dbConection(async function(db){
        return await db.collection('users').findOne({_id: ObjectId(id)}) //Devuelve la búsqueda del documento buscado por id en la colección users
    })
}

/*export async function create(entity){
    return dbConection(async function(db){
        await db.collection('users').insertOne(entity)  //Creamo los documentos en la colección insertamos en la base de datos
        return entity
    })
}*/

export async function createPublic(entity){ 
    return dbConection(async function(db){
        entity.public = false // Marcamos con false para que no se muestren los users creados desde la web
        await db.collection('users').insertOne(entity)
        return entity
    })
}

export async function updateId(id, body){
    return dbConection(async function(db){
        return await db.collection('users').updateOne( 
            { _id: ObjectId(id) },
            { $set: body }
        ) //Modifica la información de un documento en la colección users, pasando el id, seteando la información del body
    })
}

export async function replaceId(id, body){
    return dbConection(async function(db){
        return await db.collection('users').replaceOne({_id: ObjectId(id)}, body) //Remplaza la información de un documento de la collección users, pasamos el id, por la información del body
    })
}

export async function deleteById(id){
    return dbConection(async function(db){
        return await db.collection('users').deleteOne({_id: ObjectId(id)}) //Elimina un documento de la collección users, pasamos el id
    })
}

export async function create(user){
    return dbConection(async function(db) {
        const newUser = {
            name: user.name,
            last_name: user.last_name,
            email: user.email,
            date_birth: user.date_birth,
            phone: user.phone,
            user_name: user.user_name,
            password: user.password,
            type: user.type,
            owner: user.owner,
        }

        const oldUser = await db.collection('users').findOne({email: newUser.email})

        if(!oldUser){

            const salt = await bcrypt.genSalt(10)

            const passwordHash = await bcrypt.hash(newUser.password, salt)

            newUser.password = passwordHash

            await db.collection('users').insertOne(newUser)
            
            return newUser
        }else{
            throw {error: 1000, msg: "El usuario ya existe."}
        }
    })
}

export async function login(email, password){
    return dbConection(async function(db){
        const user = await db.collection('users').findOne({email: email})

        if(user){
            const passwordCorrect = await bcrypt.compare(password, user.password)

            if(passwordCorrect){
                return {...user, password: null}
            }else{ 
                throw {error: 1000, msg: "Contraseña incorrecta."}
            }
        }else{
            throw {error: 1000, msg: "El usuario no existe."}
        }
    })
}

export default {
    getAll,
    getOne,
    //create,
    createPublic,
    updateId,
    replaceId,
    deleteById,
    create,
    login
}