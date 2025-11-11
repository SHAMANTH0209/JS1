//conditional statements in javascript
let age = 20;
//if statement
if (age < 18) {
  console.log("You are a minor.");
  console.log("Simple if Statement");
}

//if-else statement
if (age < 18) {
  console.log("You are a minor.");
} else {
  console.log("You are an adult.");
  console.log("if-else Statement");
}

//if-else if-else statement
if (age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age < 20) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
  console.log("if-else if-else Statement");
}

//switch statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
    break;
}
console.log("Switch Statement");
