// function fetchdata(callback) {
//   setTimeout(() => {
//     console.log("i am fetching data");
//     callback();
//   }, 4000);
// }

// function Arrangedata(callback) {
//   setTimeout(() => {
//     console.log("i am arranging data");
//     callback();
//   }, 3000);
// }

// function displaydata(callback) {
//   setTimeout(() => {
//     console.log("i am displaying data");
//     if (callback) callback();
//   }, 2000);
// }
// // Call back hell problem
// fetchdata(() => {
//   Arrangedata(() => {
//     displaydata();
//   });
// });

//to over come call back hell problem we use promise
//Promise is an object which will either resolve or reject the value aka success or failure
// let lifeline = new Promise((success, failure) => {
//   let a = 3;
//   if (a > 5) {
//     success("success");
//   } else {
//     failure("failure");
//   }
// });
// console.log(lifeline);
// lifeline
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log(message);
//   }); // since reject throws an error we use catch

let isTrue = false;
function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isTrue) {
        resolve("i am Fetching the data");
      } else {
        reject("i am not Fetching the data");
      }
    }, 1000);
  });
}
function arrangedata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isTrue) {
        resolve("i am arranging the data");
      } else {
        reject("i am not arranging the data");
      }
    }, 2000);
  });
}
function displaydata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isTrue) {
        resolve("i am displaying data");
      } else {
        reject("i am not displaying data");
      }
    }, 3000);
  });
}
fetchdata()
  .then((message) => {
    console.log(message);
    return arrangedata();
  })
  .then((message) => {
    console.log(message);
    return displaydata();
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
