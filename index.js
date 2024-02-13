// console.log("Hello world");

// const { invalid } = require("joi");

// const tempConverter = () => {
//   const temp = Number(document.getElementById("temp").value);
//   const tempIn = document.querySelector('input[name="type"]:checked').value;

//   if (tempIn == "f") {
//     const fahrenheit = (9 * temp) / 5 + 32;
//     console.log(`The temp is ${fahrenheit}`);
//     document.getElementById("tempresult").innerHTML = fahrenheit;
//   } else {
//     const celsius = ((temp - 32) * 5) / 9;
//     console.log(`The temp is ${celsius}`);
//     document.getElementById("tempresult").innerHTML = celsius;
//   }
// };
// const gender = prompt("Enter your gender"); //to alert gender
// if (gender === "male") {
//   alert("gender is male");
// } else {
//   alert("gender is female");
// }

const time = 5;
if (time > 4 && time < 5.5) {
  console.log("MERN class is running");
} else {
  console.log("MERN class is over");
}
/*
=assign
==type check
=== type check + value check(comparison)
*/
// const gender = "Female";//using ternary operator
// const result = gender === "male" ? console.log("Male") : console.log("FeMale");

const expression = new Date().getMonth();

switch (expression) {
  case 0:
    console.log("Janaury");
    break;
  case 1:
    console.log("Febrary");
    break;
  case 2:
    console.log("March");
    break;
  default:
    console.log("Invalid month");
}

//Logical Operator
//AND(&&)all condition satisfy
//OR(||)any one condition satisfy
//NOT(!)Negative of current value

//math operaor
//==
//<>
//% + - / *
//++(urinary operator)using only one operands

let num = 2; //2
num++; //3
num += 1; //4
num = num + 1; //5
console.log({ num });

//LOOPS(repetative work)

//for()
//do{}while()
//while()

// print from 0 to 9;
for (let i = 0; i <= 10; i++) {
  //for loop
  console.log(i);
}

// do {
//   let i=0
//   console.log(i);
//   i++;
// } while (let i <= 10);

// while (let i <= 10);
// {
//   let i=0;
//   console.log(i);
//   i++;
// }

//FUNCTION

function sum(a, b) {
  //ES5 Normal function
  return a + b;
}
const result = sum(1, 2);
console.log({ result });

const add = (a, b) => {
  return a + b;
};
const res = add(5, 5);
console.log({ res });

//Write a function that checks if the user is ur name or not

const checkUser = (name) => {
  return name === "rojal";
};
const ress = checkUser("ronash");
console.log(ress);

const checkUsers = (user, systemUser) => {
  if (user != systemUser) return false;
  return true;
};
const resul = checkUsers("rojal", "rojal");
console.log(resul);
//write a functions that checks if the user is baby,teen,adult or old

const checkAge = (age) => {
  switch (age) {
    case age >= 18 && age < 60:
      return "adult";
      break;
    case (age = 5):
      return "baby";
      break;
    case age < 18 && age > 10:
      return "teen";
      break;
    default:
      return "invalid";
  }
};

const resss = checkAge(18);
console.log(resss);
