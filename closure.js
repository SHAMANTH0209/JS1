function bank() {
  let amount = 1000; //2
  console.log(amount); //3
  function addamount(value) {
    amount = amount + value;
    console.log("amount is: " + amount); //6
    console.log("--------------------------------"); //7
  }
  return addamount; //4
  // return outer;
}
let value = bank();
value(1000);
value(1000);
