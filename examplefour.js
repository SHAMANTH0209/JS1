function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log("Have counter: " + count);
    console.log("--------------------------------");
  }
  return inner;
}
outer();
let value = outer();
value();
value();
value();
outer();
// closure is a function that will retain outer variables even after the outer function is closed
