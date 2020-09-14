//Type annotation and Type inference around functions

// We tell ts explicitly about the type of value that a function will return.
// as well as about the types of arguments that a function will receive.
// In type inference TS figure out automatically Type inference will only work for the the return
// value and not for the arguments.
// Below I will define a function that will show all this:


const add = (a: number, b: number): number => {
  return a + b;
}

//We can get advantage of type inference for return value but we always use type annotation for that.

const subtrack = (a: number, b: number): number => {
  return a - b;
}

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a + b;
}










