"use strict";
console.log("Interface");
const employee = {
    name: "Hamza Alvi",
    email: "hamza.ahmed@koderlabs.com",
    designation: "Senior Software Engineer",
    role: "employee",
};
const myCat = {
    ownerName: "Hamza Alvi",
    name: "dodo",
    species: "cat",
    color: "tuxedo",
    age: 2,
    favoritesFood: "fish",
    roar: function (sound) {
        return `My ${this.species} ${this.name} says ${sound}`;
    },
};
console.log(myCat.roar("meow meow!"));
