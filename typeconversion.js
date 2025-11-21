//implicit type conversion
console.log(10 + "20"); //1020
console.log(10 - "10"); //0
console.log(10 * "2"); //20
console.log(10 / "2"); //5
console.log("5" - 2); //3

//explicit type conversion\
console.log(Number("123"));
console.log(String(123));
console.log(Boolean(100)); //true
console.log(Boolean(0)); //false
console.log(Boolean("")); //false

console.log(3 + true);
console.log(3 + false);
console.log("3" + true);
console.log("3" - true);
console.log(2 == 2);
console.log((2 == 2) == 2);
console.log((((2 == 2) == 2) == 2) == 0);
