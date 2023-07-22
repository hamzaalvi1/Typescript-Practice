"use strict";
console.log("Hey there!");
const numbers = [3, 5, 6, 7, 8];
const names = ["hamza", "Ameen", "yazib", "taha", "talha"];
const isActives = [
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
];
const phnNumbers = ["03413108435", 923413108435];
console.log(phnNumbers);
const newTuple = ["hamza", 26, true];
const calculations = [43, (num1, num2) => num1 + num2];
let user1 = {
    _id: "15091997",
    name: "John Doe",
    email: "john@doemailinator.com",
    phnNumber: "+9231111111111",
    address: "some address",
    isGraduated: true,
    degreeName: "Bachelor in Computer Science",
    division: 3.5,
};
user1.name = "Jane Doe";
const getStudent = (student) => `${student.name}`;
console.log(getStudent({ name: "Hamza Alvi" }));
const showError = (message) => {
    throw new Error(message);
};
showError("bad request");
