// //String methods in JavaScript
// // --------------------start of string methods in javascript--------------------
// var str = "Hello, welcome to the world of JavaScript.";
// console.log("Original String:", str);
// console.log("charecters at index 7:", str.charAt(7));

// // Length of the string
// console.log("Length of the string:", str.length);

// // Convert to uppercase
// console.log("Uppercase:", str.toUpperCase());

// // Convert to lowercase
// console.log("Lowercase:", str.toLowerCase());

// // Find a substring
// console.log("Index of 'welcome':", str.indexOf("welcome"));

// // Extract a substring
// console.log("Substring (7, 14):", str.substring(7, 14));

// // Replace a substring
// var newStr = str.replace("JavaScript", "JS");
// console.log("After Replacement:", newStr);

// // Split the string into an array
// var strArray = str.split(" ");
// console.log("String split into array:", strArray);

// --------------------end of string methods in javascript--------------------

let text1 = "David";
let text2 = "Johnson";
// let result = text1 + " " + text2;
let result = text1.concat(" ", text2);
console.log("Concatenated String:", result);
