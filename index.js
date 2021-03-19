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

console.log(bar);
console.log(helloWorld());
console.log(helloWorld("YO yo yOO!!"));