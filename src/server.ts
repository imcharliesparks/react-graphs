import express from 'express'

const port: string = process.env.PORT || '3001'
const server = express()
server.use(express.json())

server.listen(port, () => console.log(`the server is listening on port ${port}`))