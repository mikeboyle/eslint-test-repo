bar = 7;
bloop = 47;
let baz = 12;

let doBloop = (params) => {
console.log(bloop)
}

function helloWorld(greeting) {
  let foo;
  let output = "";
  if(greeting) {
output = `Hello and ${greeting}`;
  } else {
  output = `Hello!`;
  }

  return output;
}

console.log(bar);
console.log(helloWorld());
console.log(helloWorld("YO yo yOO!!"));