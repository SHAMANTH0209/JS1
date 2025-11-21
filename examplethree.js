// function outer() {
//   let name = "Ramesh";
//   console.log(name);
//   function inner() {
//     let name2 = "Suresh";
//     console.log(name2);
//     console.log("--------------------------------");
//   }
//   return inner;
// }
// let value = outer();
// value();
// value();
// value();

function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log("Have counter: " + count);
    console.log("--------------------------------");
  }
  inner();
}
outer();
outer();
outer();
