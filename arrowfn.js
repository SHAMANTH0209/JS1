// arrow function
const abc = () => {
  console.log("function");
};
abc();

const sum = (a, b) => a + b;
//   {return a + b;
// };
let value = sum(5, 10);
console.log(value);

//Synchronous programming
console.log("value one");
console.log("value two");
console.log("value three");

// asynchronous programming
setTimeout(() => {
  console.log("value one");
}, 3000);

setTimeout(() => {
  console.log("value two");
}, 2000);
setTimeout(() => {
  console.log("value three");
}, 1000);
