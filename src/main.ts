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

// objects

type User = {
  readonly _id: string;
  name: string;
  email: string;
  phnNumber: number | string;
  address: string;
  isEmailVerified?: boolean;
  hobbies?: string[];
};

type Qualification = {
  isGraduated: boolean;
  degreeName: string;
  division: number | string;
};

let user1: User & Qualification = {
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

// functions
type Student = { name: string; rollNo?: number; batch?: number };
type studentFunc = (student: Student) => string;

const getStudent: studentFunc = (student: Student) => `${student.name}`;
console.log(getStudent({ name: "Hamza Alvi" }));

const showError = (message: string): never => {
  throw new Error(message);
};

showError("bad request");
