export default {
    db: {
        host: process.env.NODE_MONGO_HOST || 'localhost',
        port: process.env.NODE_MONGO_PORT || '27017',
        name: process.env.NODE_MONGO_DB_NAME || 'Usala'
    },
    jwt: {
        secret: process.env.NODE_JWT_SECRET || 'secret'
    }
}