// Operators in javascript
let a = 10;
let b = 3;
console.log("Values: a = " + a + ", b = " + b);
// Arithmetic Operators
let add = a + b; // addition
let subtract = a - b; // subtraction
let multiply = a * b; // multiplication
let divide = a / b; // division
let modulo = a % b; // modulus

console.log("Addition: " + add);
console.log("Subtraction: " + subtract);
console.log("Multiplication: " + multiply);
console.log("Division: " + divide);
console.log("Modulus: " + modulo);

console.log("--------------------------------------------------");

// Assignment Operators
let x = 10; // assignment
x += 5; // x = x + 5
x -= 3; // x = x - 3
x *= 2; // x = x * 2
x /= 4; // x = x / 4
x %= 3; // x = x % 3
console.log("Value of x after assignment operations: " + x);
console.log("--------------------------------------------------");

// Comparison Operators
let isEqual = a == b; // equal to
let isNotEqual = a != b; // not equal to
let isStrictEqual = a === b; // strictly equal to
let isStrictNotEqual = a !== b; // strictly not equal to
let isGreater = a > b; // greater than
let isLess = a < b; // less than
let isGreaterOrEqual = a >= b; // greater than or equal to
let isLessOrEqual = a <= b; // less than or equal to
console.log("Is Equal: " + isEqual);
console.log("Is Not Equal: " + isNotEqual);
console.log("Is Strictly Equal: " + isStrictEqual);
console.log("Is Strictly Not Equal: " + isStrictNotEqual);
console.log("Is Greater: " + isGreater);
console.log("Is Less: " + isLess);
console.log("Is Greater Or Equal: " + isGreaterOrEqual);
console.log("Is Less Or Equal: " + isLessOrEqual);
console.log("--------------------------------------------------");

// Logical Operators
let andOperator = a > 5 && b < 10; // logical AND
let orOperator = a > 5 || b < 10; // logical OR
let notOperator = !(a > 5); // logical NOT
console.log("Logical AND: " + andOperator);
console.log("Logical OR: " + orOperator);
console.log("Logical NOT: " + notOperator);
console.log("--------------------------------------------------");

// Increment and Decrement Operators
let increment = ++a; // pre-increment
let decrement = --b; // pre-decrement
let postIncrement = a++; // post-increment
let postDecrement = b--; // post-decrement
console.log("Pre-Increment: " + increment);
console.log("Pre-Decrement: " + decrement);
console.log("Post-Increment: " + postIncrement);
console.log("Post-Decrement: " + postDecrement);
console.log("--------------------------------------------------");

// Ternary Operator
let result = a > b ? "a is greater" : "b is greater or equal";
console.log(result);
console.log("--------------------------------------------------");

// Typeof Operator
console.log(typeof a); // returns the type of variable a
console.log(typeof b); // returns the type of variable b
console.log("--------------------------------------------------");

// instanceof Operator
let date = new Date();
console.log(date instanceof Date); // returns true if date is an instance of Date
console.log(date instanceof Object); // returns true if date is an instance of Object
console.log("--------------------------------------------------");
// Bitwise Operators
let bitwiseAnd = a & b;
let bitwiseOr = a | b;
let bitwiseXor = a ^ b;
let bitwiseNotA = ~a;
let leftShift = a << 1;
let rightShift = a >> 1;
console.log("Bitwise AND: " + bitwiseAnd);
console.log("Bitwise OR: " + bitwiseOr);
console.log("Bitwise XOR: " + bitwiseXor);
console.log("Bitwise NOT of a: " + bitwiseNotA);
console.log("Left Shift a by 1: " + leftShift);
console.log("Right Shift a by 1: " + rightShift);
console.log("--------------------------------------------------");
