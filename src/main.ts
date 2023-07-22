console.log("Hey there!");
// non Primitive types
// Arrays
// Objects
// functions
// Symbols

type phoneNumber = string | number;

type sum = (num1: number, num2: number) => number;

type myTuple = [string, number, boolean];

type sumTuple = [number, sum];

const numbers: number[] = [3, 5, 6, 7, 8];
const names: string[] = ["hamza", "Ameen", "yazib", "taha", "talha"];
const isActives: boolean[] = [
  true,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

const phnNumbers: phoneNumber[] = ["03413108435", 923413108435];
console.log(phnNumbers);

const newTuple: myTuple = ["hamza", 26, true];
const calculations: sumTuple = [43, (num1, num2) => num1 + num2];
