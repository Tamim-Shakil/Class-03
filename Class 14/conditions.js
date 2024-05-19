let userName = "Rony"; // string
let age = 34; // number
let isMarried = false; // yes or no - boolean

// if (isMarried == true) {
//   cionsole.log(userName, "is married");
// }

// if (isMarried == false) {
//   console.log(userName, "is unmarried");
// }

let password = "python01235";

// if (password == "python012345") {
//   console.log("user Looged in Successfully");
// } else {
//   console.log("Invalid Password");
// }

let isDarkMode = false;

// if (isDarkMode == true) {
//   console.log("Darkmode is enabeld");
// } else {
//   console.log("Darkmode is disabeld");
// }

age = 40; // assigning a value

age < 40; // less than
age > 40; // greater than
age == 40; // equality
age === 40; // strict equality
age !== 40; // not equal
age <= 40; // less than equal
age >= 40; // greater than equal

let personAge = 20;

// if age is greater than 40 => "old"
// if age is greater than 30 => "mature"
// if age is greater than 20 => "adult"

if (personAge >= 40) {
  console.log("he is an old guy");
} else if (personAge >= 30) {
  console.log("he is a mature guy");
} else if (personAge >= 20) {
  console.log("he is an adult guy");
} else {
  console.log("children");
}

let temperature = 35;

if (temperature >= 40) {
  console.log("Weather is extreme hot!");
} else if (temperature >= 36) {
  console.log("Weather is too hot!");
} else if (temperature >= 30) {
  console.log("Weather is hot!");
} else if (temperature >= 25) {
  console.log("Weather is normal!");
} else if (temperature >= 20) {
  console.log("Winter is coming");
} else {
  console.log("Winter is here...!");
}
