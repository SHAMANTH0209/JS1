// let color = ["yellow", "blue", "red", "green"];
// console.log(color);
// color.push("purple");
// console.log(color);
// color.pop();
// console.log(color);
// color.shift();
// console.log(color);
// color.unshift("pink");
// console.log(color);
// console.log(color.indexOf("red")) // finds index of "red"
// console.log(color.sort()); // sorts in alphabetical order
// console.log(color.reverse()); // reverses the order of elements
// let value = color.splice(1, 2, "brown", "black"); // removes 2 elements starting from index 1
// console.log(value); // removed elements
// console.log(color); // modified array after splice operation
// let color1 = [yellow];
// let key = [honda];
// let value = color1.concat(key);
// console.log(value);

// java script to find the largest word in the string

let string = "I Am Attending a Class";
let string1 = string.split(" ");
let largest = "";
let i = 0;
for (i = 0; i < string1.length; i++) {
  if (string1[i].length > largest.length) {
    largest = string1[i];
  }
}
console.log(largest);
