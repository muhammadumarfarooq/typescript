let apples: number = 5; // We always assign a value of number
apples = 1112;
let name1: string = "Umar";
name1 = "Malik";

let hasName: Boolean = true;
let nothingMatch: null = null;
let nothing: undefined = undefined;
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//classes
class Car {

}

const car: Car = new Car();

//Object literal
const point: { x: number; y: number } = {
  x: 12,
  y: 15,
}

// Annotations around functions

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

//When to use annotations
// 1) Function that returns the any type

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//2)When initialization and declaration are on different lines
const words = ["red", "green", "blue"];
// let foundColor = false;
let foundColor: boolean;

//inferred from usage: write annotaion or initialize it on the same line.

for ( let i = 0; i++; i < words.length ) {
  if ( words[ i ] === "green" ) {
    foundColor = true;
  }
}

// Variables whose type cannot be inferred correctly
//bad code (because we define type inference of two types) but we have cases
const numbers = [-10, -14, 5];
let numberGreaterThanZero: boolean | number = false;

for ( var i = 0; i < numbers.length; i++ ) {
  if ( numbers[ i ] > 0 ) {
    numberGreaterThanZero = numbers[ i ]
  }
}














