// class house {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
// }
// let value = new house("david", "blue");
// console.log(value);
// let final = new house("layla", "white");
// console.log(final);

class house {
  constructor(name) {
    this.name = name;
  }
  myhouse() {
    console.log(`My name is ${this.name}`);
  }
}
let value = new house("Sam");
value.myhouse();
//Classes are blueprint of an object
//instance of a class is called an object
//objects in javascripts are key value pairs

//------------------------------------Inheritance--------------------------------------------
class myhouse extends house {}
let value1 = new myhouse("david");
value1.myhouse();

//------------------------------------Polymorphism--------------------------------------------
class mobile {
  buy() {
    console.log("I bought a product");
  }
}
class apple extends mobile {
  buy() {
    console.log("I bought an iphone");
  }
}
class samsung extends mobile {
  buy() {
    console.log("I bought a samsung phone");
  }
}
let value2 = new mobile();
value2.buy();
let value3 = new apple();
value3.buy();
let value4 = new samsung();
value4.buy();
