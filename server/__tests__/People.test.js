const chai = require("chai");
const expect = chai.expect;

const {
    peopleDetails,
    personDetails
} = require("./api");

describe("Peoples Api", () => {
    it("should return a list of people in star wars", async () => {
        const response = await peopleDetails();
        expect(response.data.data.people.results).to.have.lengthOf(10);
    });

    it("should return an array containing the persons details", async () => {
        const expectedResults = [{
            name: "Anakin Skywalker",
            height: 188,
            gender: "male",
            mass: "84",
            homeworld: "http://swapi.dev/api/planets/1/",
            hair_color:"blond",
            skin_color:"fair",
            eye_color:"blue",
            birth_year:"41.9BBY",
            films: [
                "http://swapi.dev/api/films/4/",
                "http://swapi.dev/api/films/5/",
                "http://swapi.dev/api/films/6/" 
            ]

        }]
        const response = await personDetails({
            name: "Anakin Skywalker"
        });
        expect(response.data.data.person.results).to.eql(expectedResults);
    });
});