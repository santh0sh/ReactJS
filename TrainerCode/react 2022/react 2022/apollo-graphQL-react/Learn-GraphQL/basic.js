/*
create grapql - server folder

    in this folder, > npm init - y

$ npm install express express - graphql graphql 

$ npm i nodemon--save - dev

add server.js and write code.
*/

const express = require('express')
const expressGraphQL = require('express-graphql')

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString     //list,Int,
} = require('graphql')

const app = express()
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'greet',
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => 'Welcome to Graphql'
            }
        })
    }),
})


app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))

app.listen(5000, () => console.log("server running"))

//localhost:5000/graphql
/*
 query{
    message
}
*/