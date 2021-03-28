const {gql} = require("apollo-server-express");

const typeDefs = gql `


type Query{
    people:People!
    person(name:String!):People!
    page(page:Int!):People!
}
type People{
    next:String
    results:[PeopleDetails]!
}
type PeopleDetails{
    name:String!
    height:Int
    mass:String
    gender:String!
    homeworld:String!
}
`;

module.exports = typeDefs;