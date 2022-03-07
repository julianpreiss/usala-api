import { ObjectId } from 'mongodb' //
import { dbConection } from './database.js' //Importamos al archivo que realiza la conexión con la base de datos

export async function getAll(){
    return dbConection(async function(db){ //se conecta a traves de la función conexion()
        return await db.collection('bookings').find({}).toArray()  //Devuelve la búsqueda de todos los documentos de la colección bookings en un array
    })
}

export async function getAllByUser(iduser){
    return dbConection(async function(db){
        return await db.collection('bookings').find({user_id: iduser}).toArray()  //Devuelve la búsqueda de todos los documentos de la colección favorites en un array
    })
}

export async function getOne(id){
    return dbConection(async function(db){
        return await db.collection('bookings').findOne({_id: ObjectId(id)}) //Devuelve la búsqueda del documento buscado por id en la colección bookings
    })
}

export async function create(entity){
    return dbConection(async function(db){
        await db.collection('bookings').insertOne(entity)  //Creamos los documentos en la colección insertamos en la base de datos
        return entity
    })
}

export async function updateId(id, body){
    return dbConection(async function(db){
        return await db.collection('bookings').updateOne( 
            { _id: ObjectId(id) },
            { $set: body }
        ) //Modifica la información de un documento en la colección bookings, pasando el id, seteando la información del body
    })
}

export async function replaceId(id, body){
    return dbConection(async function(db){
        return await db.collection('bookings').replaceOne({_id: ObjectId(id)}, body) //Remplaza la información de un documento de la collección bookings, pasamos el id, por la información del body
    })
}

export async function deleteById(id){
    return dbConection(async function(db){
        return await db.collection('bookings').deleteOne({_id: ObjectId(id)}) //Elimina un documento de la collección bookings, pasamos el id
    })
}

export default {
    getAll,
    getAllByUser,
    getOne,
    create,
    updateId,
    replaceId,
    deleteById,
}