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
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates);
