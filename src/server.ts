import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import userSchema from './schemas/mainSchema'

const port: string = process.env.PORT || '3001'
const server: express.Application = express()

server.use(express.json())
server.use('/graphql', graphqlHTTP({
    schema: userSchema,
    graphiql: true
}))

server.listen(port, () => console.log(`the server is listening on port ${port}`))