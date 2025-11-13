let text = "hello";
// let text1 = "              hello            hi           ";
// console.log(text.toLocaleUpperCase()); // "HELLO"
// console.log(text.toLocaleLowerCase()); // "hello"

// // let result = text1.concat(" ", text2);
// // console.log("Concatenated String:", result); // "David Johnson" concatination using concat method
// // let result = text1 + " " + text2;

// console.log(text.repeat(3)); // "hellohellohello"
// console.log(text.trim()); // "hello"
// console.log(text1.trimStart()); // "hello"
// console.log(text1.trimEnd()); // "hello"

// let text3 = "banglore";
// console.log(text3.search("ooo")); // index + value is present - value is absent.

// let text1 = "i am in banglore";
// console.log(text1.reverse()); // Error: text1.reverse is not a function

// console.log(text1.split("")); // splits the string into an array of characters
// console.log(text1.split(" ")); //[ 'i', 'am', 'in', 'banglore' ]
// console.log(text1.split("  ")); // [ 'i am in banglore' ]

// console.log(text1.split("").reverse()); // reverse a string
// console.log(text1.split("").join("")); // join the reversed array back into a string

// console.log(text1.split("").reverse().join("")); // complete reverse string

//java script program to print a * pattern

let n = 5;
for (let i = 0; i < n; i++) {
  let star = "*";
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  console.log(star);
}

for (i = 1; i <= 5; i++) {
  let text = "*";
  console.log(text.repeat(i));
}

//
