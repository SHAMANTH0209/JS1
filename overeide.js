class Bank {
  bankbalance() {
    console.log("My bank balance");
  }
}
console.log(bankbalance());

class axisbank extends Bank {
  bankbalance() {
    console.log("My axis bank balance");
  }
} // Overriding
console.log(bankbalance());
