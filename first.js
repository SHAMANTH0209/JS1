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

//difference between var , let and const in a table form
/*
| Feature          | var                     | let                     | const                   |
|------------------|-------------------------|-------------------------|-------------------------|      
| Scope            | Function-scoped         | Block-scoped            | Block-scoped            |
| Redeclaration    | Allowed                 | Not allowed             | Not allowed             |
| Redefinition     | Allowed                 | Allowed                 | Not allowed             |
| can be initialized later | Yes                     | Yes                     | No                      |
| Hoisting         | Yes (initialized as undefined) | Yes (not initialized)   | Yes (not initialized)   |
*/

console.log(x); //temperal dead zone
var x;
// temperal dead zone since x is not initialized with a value
