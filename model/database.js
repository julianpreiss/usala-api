import mongodb from 'mongodb'
import config from '../config.js'

const client = new mongodb.MongoClient(`mongodb://${config.db.host}:${config.db.port}`)

export async function dbConection(callback){
    await client.connect()
    const result = await callback(client.db(config.db.name))
    client.close()
    return result
}

export default {
    dbConection
}