// if we start w empty array, inference will give any[] => annotate
const carMakes: string[] = [];

// otherwise, can rely on inference
const carMakes2 = ['ford', 'chevy', 'toyota'];
const dates = [new Date(), new Date(), new Date()];

// in order to annotate 2d array, type of value in inner array, then double array
// ex. string[][]
// ex. number[][]
const carsByMake = [['f150'], ['camaro'], ['corolla']];

// why type arrays

// 1. help with inference when extracting values
// TS correctly sets the types on these because the array is typed
const car = carMakes2[0];
const aCar = carMakes2.pop();

// 2. prevents incompatible values
// carMakes2.push(10000); // error

// 3. help with builtin functions
// TS knows car param is a string, helps with autocompleting functions on the variable
carMakes2.map((car): string => {
  return car;
});

// flexible types
// inference can also infer flexible types, shown by hovering dates2
const dates2 = [new Date(), '2030-10-10'];

// if there is only one type added initially, but will contain more types
// we can override type inference with type annotation
const dates3: (Date | string)[] = [new Date()];
// no error
dates3.push('2030-10-10');
