import { ObjectId } from 'mongodb' //
import { dbConection } from './database.js' //Importamos al archivo que realiza la conexión con la base de datos

export async function getAll(){ //Paradigma declarativo
    return dbConection(async function(db){ //se conecta a traves de la función conexion()
        return await db.collection('districts').find({}).toArray()  //Devuelve la búsqueda de todos los documentos de la colección districts en un array
    })
}

export async function getOne(id){
    return dbConection(async function(db){
        return await db.collection('districts').findOne({_id: ObjectId(id)}) //Devuelve la búsqueda del documento buscado por id en la colección districts
    })
}

export async function create(entity){
    return dbConection(async function(db){
        await db.collection('districts').insertOne(entity)  //Creamo los documentos en la colección insertamos en la base de datos
        return entity
    })
}

export async function createPublic(entity){ 
    return dbConection(async function(db){
        entity.public = false // Marcamos con false para que no se muestren los districts creados desde la web
        await db.collection('districts').insertOne(entity)
        return entity
    })
}

export async function updateId(id, body){
    return dbConection(async function(db){
        return await db.collection('districts').updateOne( 
            { _id: ObjectId(id) },
            { $set: body }
        ) //Modifica la información de un documento en la colección districts, pasando el id, seteando la información del body
    })
}

export async function replaceId(id, body){
    return dbConection(async function(db){
        return await db.collection('districts').replaceOne({_id: ObjectId(id)}, body) //Remplaza la información de un documento de la collección districts, pasamos el id, por la información del body
    })
}

export async function deleteById(id){
    return dbConection(async function(db){
        return await db.collection('districts').deleteOne({_id: ObjectId(id)}) //Elimina un documento de la collección districts, pasamos el id
    })
}

export default {
    getAll,
    getOne,
    create,
    createPublic,
    updateId,
    replaceId,
    deleteById
}