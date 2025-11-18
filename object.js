// objects in javascript
// let a = { name: "david", city: "banglore", age: "24" };
// console.log(a.name, a.city, a.age);

//non primitive data types
// used to store the collective data that has key pair values

// // syntax of object
// let obj{};
// let obj=new Object();

// let mobile = {
//   brand: "apple",
//   model: "iphone 14",
//   color: ["black", "white", "red"],
//   price: "100000",
// };
// console.log(mobile);
// mobile.descriptionl = "i have a new mobile";
// console.log(mobile);

// let arr = [1, 2, 3, 4, 5];
// let final = 5;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] + arr[j] === final) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// }

// Initial 10 spaces
//

// function plantTree(n) {
//   // Initial 10 spaces (index 3,4,8 are already trees)
//   let spaces = [0, 0, 0, 1, 1, 0, 0, 0, 1, 0];

//   // If user enters 2, it's not allowed
//   if (n === 2) {
//     console.log("Two trees cannot be planted");
//     console.log(false);
//     return false;
//   }

//   // If n is 0 → do nothing
//   if (n === 0) {
//     console.log(spaces.join(" "));
//     console.log(true);
//     return true;
//   }

//   // If n is 1 → plant one tree in the first empty space (0)
//   if (n === 1) {
//     for (let i = 0; i < spaces.length; i++) {
//       if (spaces[i] === 0) {
//         spaces[i] = 1; // Plant the tree
//         break; // Only plant ONE tree
//       }
//     }

//     console.log(spaces.join(" ")); // Visual print
//     console.log(true);
//     return true;
//   }
// }

// // Test it
// plantTree(1); // Try planting 1 tree
// // plantTree(2); // planting 2 trees

// object nesting for in loop

// let person = {
//   name: "David",
//   email: "david@gmail.com",
//   address: {
//     city: "banglore",
//   },
// };

// for (let key in person) {
//   console.log(`property ${key} value: ${person[key]}`);
// }

// let array = [1, 2, 3, 4];
// for (i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
// // array of object
// let response = [
//   {
//     name: "iphone",
//     company: "apple",
//   },
//   {
//     name: "iphone14",
//     company: "apple",
//   },
//   {
//     name: "Galaxy",
//     company: "samsung",
//   },
//   {
//     name: "nord",
//     company: "oneplus",
//   },
// ];
// // to find iphones in the array

// let result = [];
// for (let i = 0; i < response.length; i++) {
//   if (response[i].company == "apple") {
//     result.push(response[i].name);
//   }
// }
// console.log(result);

// //object methods
// let obj = {
//   name: "iphone",
//   company: "apple",
//   price: "$1000",
// };
// // console.log(Object.keys(obj));
// // console.log(Object.values(obj));

// let obj2 = {
//   name: "Galaxy",
//   model: "17",
// };
// console.log(Object.assign(obj, obj2)); // obj is target and obj2 is the source

//Hoisting
// moving declaration or functions to the top is called hoisting
abc(); // hoisting element(moving declaration or function to the top) why?-it is available to the whole func
function abc() {
  // declaration
  console.log("function");
}

let abc = function () {
  // func expression
  console.log("function");
};

// note: hoisting cannot be achived in func expression
