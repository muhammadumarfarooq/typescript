//we have to write the type annotation explicitly when we initialize an empty array
// Avoid "any" type as much as possible
// const carMakers: string[] = [];
const carMakers = ['ford', 'toyota', "chevy"];

// Why do we case?
// 1. TS can do type inference when extracting values from an array
const oneCarName = carMakers[ 0 ];
const remove = carMakers.pop();
// 2. TS can prevent us for adding incompatible values to an array
// carMakers.push(45);
//3. We can get help with 'map', 'forEach', 'reduce' functions.
carMakers.map((car: string): string => {
  return car;
})
//Multiple types in array
const importantDates: ( Date | string )[] = [new Date()];
importantDates.push("12");
