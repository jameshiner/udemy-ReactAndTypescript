const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `name: ${this.name}`;
  },
};

// long ugly type annotation
// if oldCivic had more properties, this line would be even longer
// if we had other car functions this annotation would be duplicated
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`
  name: ${vehicle.name}
  year: ${vehicle.year}
  broken: ${vehicle.broken}
  `);
};

printVehicle(oldCivic);

// fix: INTERFACES!!
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}
const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(`
  name: ${vehicle.name}
  year: ${vehicle.year}
  broken: ${vehicle.broken}
  `);
};

// interface syntax

interface Vehicle2 {
  name: string;
  // not limited to primitive types, can have complex objects like Date
  year: Date;
  broken: boolean;
  // vehicles have to have a summary function with no args that returns string
  summary(): string;
}

// if we only care about the summary function on an object
// TS will allow anything passed in as long as it has this function
// doesnt matter if the object has other properties as long as it has the one(s) listed in interface
interface Vehicle3 {
  summary(): string;
}
