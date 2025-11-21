// set of rules to access data in java script
//lexical scope
//global scope
//local scope
//nested scope
//block scope

// let name = "Sam"; //global scope throught my file
// function outer() {
//   console.log(name);// can access global scope
//   let name1 = "Ram"; // local scope
//   console.log(name1);
// }
// console.log(name);
// // console.log(name1); // cannot access local scope
// outer();

// let name = "Sam";
// function outer() {
//   console.log(name); // can access global scope
//   let name1 = "Ram"; // local scope
//   console.log(name1);
//   function inner() {
//     // nested function
//     let name2 = "Anil";
//     console.log(name2); // nested scope and also block scope
//   }
//   inner();
// }
// console.log(name);
// // inner(); // cannot access local scope outside the class
// outer();

// let name = "Sam";
// function outer() {
//   //   console.log(name); // can access global scope
//   let name1 = "Ram"; // local scope
//   function inner() {
//     // nested function
//     let name2 = "Anil";
//     console.log(name); // can access global scope
//     console.log(name1); // can access local scope
//     console.log(name2); // nested scope
//   }
//   inner();
// }
// outer();

let name1 = "Amar";
function outer() {
  let name2 = "Akbar";
  function inner() {
    let name3 = "Anthony";
    console.log(name1);
    console.log(name2);
    console.log(name3);
  }
  inner();
}
outer();
