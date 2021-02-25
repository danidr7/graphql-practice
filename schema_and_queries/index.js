const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')

const schema = './schema/index.graphql'
const server = new ApolloServer({
    typeDefs: importSchema(schema),
    resolvers
})

server.listen().then(({url}) => {
    console.log(`listening ${url}`)
})