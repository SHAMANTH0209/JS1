function outer() {
  let name = "Ramesh"; //2
  console.log(name); //3
  function inner() {
    let name2 = "Suresh"; //5
    console.log(name2); //6
    console.log("--------------------------------"); //7
  }
  inner(); //4
}
outer(); //1
outer();
