const axios = require("axios");

const url = "http://localhost:3005/graphql";
const peopleDetails = async variables =>
    await axios.post(url, {
        query: `
            query{
                people{
                    next
                    results {
                        name
                        height
                        gender
                        mass
                        homeworld
                    }
                }
            }
    `,
        variables
    });

const personDetails = async variables =>
    await axios.post(url,{
        query:`
            query person($name:String!){
                person(name:$name){
                    results{
                        name
                        height
                        gender
                        mass
                        homeworld
                    }
                }
            }
        `,
        variables
    });
module.exports = {
    peopleDetails,
    personDetails
}
