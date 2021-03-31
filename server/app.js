const express = require("express");
const {ApolloServer} = require("apollo-server-express");
const cors = require("cors");
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const PeoplesApi = require("./routes/People/People");
const app = express();
require("dotenv").config();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
       return { 
           peoplesApi: new PeoplesApi(),
        }
    },
    formatError:(err)=>({
        message:err.message
    })
});

app.use(cors());
server.applyMiddleware({app,cors:false});

app.listen(process.env.PORT, () => console.log(`🚀 App running on http://localhost:${process.env.PORT}/graphql`));
module.exports = app;