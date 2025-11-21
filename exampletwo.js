function outer() {
  let name = "Ramesh"; //2
  console.log(name); //3
  function inner() {
    let name2 = "Suresh"; //5
    console.log(name2); //6
    console.log("--------------------------------"); //7
  }
  return inner; //4
  // return outer;
}

let value = outer();
value();
value();
outer();
// value();

//this is closure
// closure definition
// closure is a function that has access to the variables of its outer function even after the outer function has returned
