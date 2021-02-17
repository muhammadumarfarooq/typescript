// interface Vehicle {
//   name: string;
//   year: number;
//   broken: boolean
//
// //  we can define a function like this inside an Iterface. It will return a string.
//   summary(): string
// }

interface Reportable {
  // name: string;
  // year: number;
  // broken: boolean

//  we can define a function like this inside an Iterface. It will return a string.
  summary(): string
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary: function () {
    return `Name: ${this.name}`
  }
}

const drint = {
  name: "Pepsi",
  price: 2,
  isFresh: true,
  summary(): string {
    return `Drink name is ${this.name}`;
  }
}


// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken: ${vehicle.broken}`);
//   vehicle.summary();
// }

const printSummary = (item: Reportable): void => {
  item.summary();
}

// printVehicle(oldCivic);
printSummary(drint);
