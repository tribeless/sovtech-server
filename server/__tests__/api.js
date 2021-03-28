const axios = require("axios");
require("dotenv").config();

const {URL:url} = process.env;

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
