let obj = {
  name: "David",
  sayhello: function () {
    console.log(`My name is ${this.name}`);
  },
};
obj.sayhello();
// this keyword is used to refer the obj context value
