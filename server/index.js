const { startMongo, client } = require('./mongo')

const server = require('./server')

startMongo(client => server.start(client))