// class bank {
//   #amount;
//   constructor(amount) {
//     this.#amount = amount;
//   }
//   addamount() {
//     console.log("amount is: " + this.#amount);
//     console.log("--------------------------------");
//   }
// }
// let value = new bank(1000);
// value.addamount();
// console.log(value.amount);

// Private variable

class bank {
  #amount;
  constructor(amount) {
    this.#amount = amount;
  }
  addamount() {
    console.log("amount is: " + this.#amount);
    console.log("--------------------------------");
  }
}
let value = new bank(1000);
value.addamount();
console.log(value.#amount);
