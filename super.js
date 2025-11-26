class bank {
  constructor(name) {
    this.name = name;
    this.city = city;
  }
}
class axisbank extends bank {
  constructor(name, city) {
    super(name, city);
  }
}
let value = new axisbank("david", "banglore");
console.log(value);
