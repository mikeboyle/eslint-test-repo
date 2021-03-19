bar = 7;

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

baz = 12;
const doBaz = () => console.log(baz, baz,)

console.log(bar);
console.log(helloWorld());
console.log(helloWorld("YO yo yOO!!"));