class dl {
  isEligible(name, age) {
    if (age == undefined || age < 18) {
      console.log(`${name} is not eligible for voting`);
    } else {
      console.log(`${name} is eligible for voting`);
    }
  }
}
let value = new dl();
value.isEligible("David");
value.isEligible("sam", 20); //overloading
