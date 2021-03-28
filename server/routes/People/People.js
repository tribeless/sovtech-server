const axios = require("axios");

class PeoplesApi {
    async retrievePeople(){
        try{
            const response = await axios.get("https://swapi.dev/api/people/");
            const {next,results:oldResults} = response.data;
            const results = oldResults.map(item=>PeoplesApi.reducedResults(item));
            return {
                next,
                results
            };
        }
        catch(e){
            throw new Error("Could not retrieve people data");
        }
    }

    async retrievePerson(args){
        const {name} = args;
        try{
            const response = await axios.get(`https://swapi.dev/api/people/?search=${name}`);
            const {next,results:oldResults} = response.data;
            const results = oldResults.map(item=>PeoplesApi.reducedResults(item));
            return {
                results
            };
        }
        catch(e){
            throw new Error("Could not retrieve person data");
        }
    }

    async paginatedResponse(args){
        const {page} = args;
        try{
            const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
            const {next,results:oldResults} = response.data;
            const results = oldResults.map(item=>PeoplesApi.reducedResults(item));
            return {
                next,
                results
            };
        }
        catch(e){
            throw new Error("Could not retrieve data from page requested");
        }
    }

    static reducedResults(item){
        const {name,gender,mass,height,homeworld} = item;
        return {
            name,
            height,
            gender,
            homeworld,
            mass:mass.toString()
        }
    }
}

module.exports = PeoplesApi;