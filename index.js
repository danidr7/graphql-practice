const { ApolliServer, gql, ApolloServer } = require('apollo-server')

const typeDefs = gql`

    ## API entrypoint
    type Query {
        hello: String
        timeNow: String
    }
`

const resolvers = {
    Query: {
        hello() {
            return 'Hello world!'
        },
        timeNow(){
            return new Date().toString()
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url}) => {
    console.log(`listening ${url}`)
})