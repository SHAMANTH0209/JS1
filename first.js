// Demonstrating var, let, and const

// 'var' can be redeclared and redefined
var name = "David";
var name = "Daniel"; // Redeclared and redefined
console.log(name); // Output: Daniel

// 'let' can be redefined but NOT redeclared in the same scope
let city = "Bangalore";
city = "Mysore"; // Redefinition allowed
console.log("Hello, " + city + "!");

// 'const' cannot be redeclared or redefined
const country = "India";
console.log("Hello, " + country + "!");

// Function example
function greet() {
  let name = "Alice";
  console.log("Hello, " + name + " from inside the function!");
}

// Calling the function
greet();
