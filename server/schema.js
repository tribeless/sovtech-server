const {gql} = require("apollo-server-express");

const typeDefs = gql `


type Query{
    people:People!
    person(name:String!):People!
    page(page:Int!):People!
    films(url:String!):FilmResult!
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
    hair_color:String
	skin_color:String
	eye_color:String
	birth_year:String
    films:[String]
}
type FilmResult{
    title:String
    producer:String
    release_date:String
    director:String
}
`;

module.exports = typeDefs;