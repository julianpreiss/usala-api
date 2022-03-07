import { ObjectId } from 'mongodb' //
import { dbConection } from './database.js' //Importamos al archivo que realiza la conexión con la base de datos

export async function getAll(iduser){
    return dbConection(async function(db){
        return await db.collection('favorites').find({userid: iduser}).toArray()  //Devuelve la búsqueda de todos los documentos de la colección favorites en un array
    })
}

export async function getFavorites(roomid, userid){
    console.log(roomid, userid)
    return dbConection(async function(db){
        return await db.collection('favorites').findOne({roomid: roomid, userid: userid})
    })
}

export async function create(entity){
    return dbConection(async function(db){
        await db.collection('favorites').insertOne(entity)  //Creamos los documentos en la colección insertamos en la base de datos
        return entity
    })
}

export async function deleteById(id){
    return dbConection(async function(db){
        return await db.collection('favorites').deleteOne({_id: ObjectId(id)}) //Elimina un documento de la collección bookings, pasamos el id
    })
}

export default {
    getAll,
    getFavorites,
    create,
    deleteById,
}