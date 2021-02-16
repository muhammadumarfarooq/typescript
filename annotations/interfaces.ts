interface Vehicle {
  name: string;
  year: number;
  broken: boolean

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

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
  vehicle.summary();
}

printVehicle(oldCivic);
