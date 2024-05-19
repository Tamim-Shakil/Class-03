let person = {
  name: "Shakil",
  age: 20,
  profession: "web developer",
  isMarried: false,
};

let car = {
  brand: "BMW",
  model: 2013,
  color: "blue",
  weight: 850,
};

let car2 = {
  brand: "Tesla",
  model: "X",
  color: "Red",
};

// dot notation
console.log(person.name);
console.log(person.age);
console.log(person.profession);

console.log(car.brand);
console.log(car.model);
console.log(car.color);
console.log(car.weight);

console.log(person["age"]); // bracket notation

// console.table(car2);
console.log(car2);
