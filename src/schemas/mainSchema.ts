import { GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLSchema } from "graphql"

const users = [
    { id: '1', firstName: 'Doobs', age: 6},
    { id: '2', firstName: 'Felix', age: 10 }
]

type User = {
    id: string,
    firstName: string,
    age: number
}

const UserType = new GraphQLObjectType<User>({
    name: 'User',
    fields: {
        id: {
            type: GraphQLString
        },
        firstName: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return users.find((user: User) => user.id === args.id)
            }
        }
    }
})

export default new GraphQLSchema({
    query: RootQuery
})