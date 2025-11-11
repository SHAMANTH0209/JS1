{
  const name = "David";
  console.log(name); // Output: David
}
console.log(name); // Output: Daniel
// let aand const are block-scoped, so the 'name' inside the block is different from the 'name' outside

{
  var name = "David";
  console.log(name); // Output: David
}
console.log(name); // Output: Daniel
// 'var' is function-scoped, so the 'name' inside the block affects the 'name' outside

// difference between vae let and const
// var      |   let       | const
// ---------------------------------------
// function | block      | block
// scoped   | scoped     | scoped
// can be   | can be     | cannot be
// redeclared| redeclared | redeclared
// and      | cannot be  | or
// redefined| redefined  | redefined
// reinitialized| can be     | cannot be
