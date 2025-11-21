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

// let string = "I Am Attending a Class";
// let string1 = string.split(" ");
// let largest = "";
// let i = 0;
// for (i = 0; i < string1.length; i++) {
//   if (string1[i].length > largest.length) {
//     largest = string1[i];
//   }
// }
// console.log(largest);

let array = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
let tree = 4;
let count = 0;
let i = 0;
for (i = 0; i < array.length; i++) {
  if (array[i] == 0) {
    // console.log(array[i]);
    let prevalue = array[i - 1];
    let postvalue = array[i + 1];
    if (
      (prevalue == 0 && postvalue == 0) ||
      (prevalue == undefined && postvalue == 0)
    ) {
      array[i] = 1;
      count++;
    }
  }
}
// console.log($(count)`trees are planted`);
console.log(tree == count);

// let array = [1, 0, 0, 0, 0, 0, 1];
// let tree = 2;
// let count = 0;

// console.log("Initial Array:", array);
// console.log("--------------------------------------");

// for (let i = 1; i < array.length - 1; i++) {
//   console.log(`\n👉 Checking index i = ${i}`);
//   console.log("Current value at i:", array[i]);

//   if (array[i] === 0) {
//     let prevalue = array[i - 1];
//     let postvalue = array[i + 1];

//     console.log("  🔹 Previous value (i - 1):", prevalue);
//     console.log("  🔹 Next value     (i + 1):", postvalue);

//     if (prevalue === 0 && postvalue === 0) {
//       console.log("  ✅ Both sides empty → PLANT TREE 🌳");
//       array[i] = 1;
//       count++;
//     } else {
//       console.log("  ❌ Cannot plant here (neighbors not empty)");
//     }
//   } else {
//     console.log("  ❌ Index is already 1 → Cannot plant");
//   }

//   console.log("  🔄 Array state now:", array);
// }

// console.log("--------------------------------------");
// console.log("Total Trees Planted:", count);
// console.log("Required Trees:", tree);
// console.log("tree == count →", tree === count);
