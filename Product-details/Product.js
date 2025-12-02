let doc = document.getElementById("Product-data");

async function fetchdata() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();

  let statement = data
    .map((value) => {
      return `<div class="Product"><h1>${value.title}</h1></div>`;
    })
    .join(""); // important

  doc.innerHTML = statement;
}

fetchdata();

// let response = await fetch("https://dummyjson.com/products");
// let data = await response.json();
// console.log(data);
