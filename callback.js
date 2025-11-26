//Callback is a process of passing a function as a parameter to decide the order of execution of the program.
function one(callback) {
  setTimeout(() => {
    console.log(" function one executed");
    callback();
  }, 1000);
}
function two() {
  console.log(" function two executed");
}
// one(two);

one(() => {
  return two;
});

function addmoney(value, callback) {
  setTimeout(() => {
    console.log("Money added");
    callback(value);
  }, 1000);
}
function Displayvalue(value) {
  console.log("Value is " + value);
}
addmoney(1000, Displayvalue);

function fetchdata(callback) {
  setTimeout(() => {
    console.log("i am fetching data");
    callback();
  }, 4000);
}

function Arrangedata(callback) {
  setTimeout(() => {
    console.log("i am arranging data");
    callback();
  }, 3000);
}

function displaydata(callback) {
  setTimeout(() => {
    console.log("i am displaying data");
    if (callback) callback();
  }, 2000);
}
// Call back hell problem
fetchdata(() => {
  Arrangedata(() => {
    displaydata();
  });
});
