// ============================================================
// type annotations
// ============================================================

// colon and type is a type annotation

// simple types
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// array
let colors: string[] = ['red', 'green'];
let numbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false];

// classes
class Car {}

let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// ============================================================
// when to use annotations
// ============================================================

// 1. functions that return the 'any' type
const json = '{"x":10,"y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x:10, y:20}

// mousing over coordinates shows 'coordinates: any'
// JSON.parse can return different types depending on what is passed in
// so TS doesnt know which type will be returned and sets it to 'any'
// avoid 'any' at all costs

const json2 = '{"x":10,"y":20}';
// add the annotation to the variable declaration
const coordinates2: { x: number; y: number } = JSON.parse(json);
console.log(coordinates2); // {x:10, y:20}

// 2. variables delcared on one line and initialized on another
let words = ['red', 'green', 'blue'];
// mousing over found word shows the any type and has a warning
let foundWord;

// fixes:
// add annotation
let foundWord2: boolean;
// set some initial value so type inference chooses the correct type
let foundWord3 = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3. variable whose type cannot be correctly inferred
let listOfNumbers = [-10, -1, 12];
// numberAboveZero: if we find a number of zero, set it to numberAboveZero, otherwise false
// two diff types could be set to numberAboveZero
let numberAboveZero = false;
// fix
let numberAboveZero2: boolean | number = false;

for (let i = 0; i < words.length; i++) {
  if (listOfNumbers[i] > 0) {
    // marked error because TS thinks numberAboveZero should be a boolean
    // numberAboveZero = listOfNumbers[i];
    numberAboveZero2 = listOfNumbers[i];
  }
}
