// function hello() {
//   console.log("Hello, World!");
// }
// hello();
//-------------------
// var hello = function () {
//   console.log("Hello, World!");
// };
// hello(); //fuction expression
// --------------------difference between function declaration and function expression------------------
// function declaration | function expression
// ---------------------|---------------------
// hoisted              | not hoisted
// can be called       | cannot be called
// before definition   | before definition
//------------------------------------------
// function hello(value) {
//   console.log("my name is " + value);
// }
// hello("sam"); //function with parameter. arguments can be passed to the function.

// --------------------function with return statement------------------
// function hello(value) {
//   return "My name is " + value;
// }
// let name = hello(" Daniel"); //function with return statement
// console.log(name);

// --------------------function with multiple parameters------------------
// function add(a, b) {
//   return "adding " + a + "and " + b + "=" + (a + b);
// }
// let sum = add(5, 10);
// console.log(sum);

// function subtract(c, d) {
//   return "subtracting two variables = " + c - d;
// }
// let difference = subtract(15, 7);
// console.log(difference);

// function multiply(x, y) {
//   return "mutilplying two variables = " + x * y;
// }
// let product = multiply(4, 6);
// console.log(product);

// function divide(m, n) {
//   return "dividing two variables = " + m / n;
// }
// let quotient = divide(20, 4);
// console.log(quotient);

// function modeulo(p, q) {
//   return "mod of two numbers = " + (p % q);
// }
// let remainder = modeulo(10, 3);
// console.log(remainder);

//java program to print the possibility of a person climibing 5 steps
function climbStairs(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
}
let steps = climbStairs(5);
console.log(steps);
