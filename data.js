//Primitive data types in JavaScript
//1. String
let name = "John Doe";
console.log("Name:", name);

//2. Number
let age = 30;
console.log("Age:", age);

//3. Boolean
let isStudent = false;
console.log("Is Student:", isStudent);

//4. Undefined
let address;
console.log("Address:", address);
//5. Null
let phoneNumber = null;
console.log("Phone Number:", phoneNumber);
//6. Symbol
let uniqueId = Symbol("id");
console.log("Unique ID:", uniqueId.toString());
//7. BigInt
let bigNumber = BigInt(9007199254740991);
console.log("Big Number:", bigNumber);
//Non-primitive data types in JavaScript
//1. Object
let person = {
  name: "Jane Doe",
  age: 25,
};
console.log("Person Object:", person);
//2. Array
let colors = ["Red", "Green", "Blue"];
console.log("Colors Array:", colors);
//3. Function
function greet() {
  return "Hello, World!";
}
console.log("Greet Function:", greet());
console.log(greet());
