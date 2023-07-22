console.log("Interface");

// custom type
type Role = "admin" | "employee" | "line-manager";
type Employee = {
  name: string;
  email: string;
  designation: string;
  role: Role;
};

const employee: Employee = {
  name: "Hamza Alvi",
  email: "hamza.ahmed@koderlabs.com",
  designation: "Senior Software Engineer",
  role: "employee",
};

interface Animal {
  name: string;
  species: string;
  color: string;
  age?: number;
  roar(sound: string): string;
}

interface Owner extends Animal {
  ownerName: string;
}

interface Animal {
  favoritesFood: string;
}

interface Vehicle {
  color: string;
  modelName: string;
  modelNumber: string;
  vehicleType: string;
  year: number;
}

const myCat: Owner = {
  ownerName: "Hamza Alvi",
  name: "dodo",
  species: "cat",
  color: "tuxedo",
  age: 2,
  favoritesFood: "fish",
  roar: function (sound: string) {
    return `My ${this.species} ${this.name} says ${sound}`;
  },
};

console.log(myCat.roar("meow meow!"));
