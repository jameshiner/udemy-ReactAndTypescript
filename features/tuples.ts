const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 50,
};

// this is a tuple, ORDER MATTERS, this is an array reprentation of the drink object
// first element is understood to be the color property etc
// type inference is incorrect because it doesnt preserve order and allows values to be swapped
const pepsi = ['brown', true, 50];

// this preserves the order of types in the array,
const pepsi2: [string, boolean, number] = ['brown', true, 50];

// can also be solved with type aliases
type Drink = [string, boolean, number];

const sprite: Drink = ['clear', true, 50];
const mountainDew: Drink = ['green', true, 500];
const tea: Drink = ['brown', false, 15];

// tuples wont be used very often because of situations like this
const carSpecs: [number, number] = [400, 3334];
const carSpecsObject = {
  horsepower: 400,
  weight: 3334,
};

// its hard to know what the data in a tuple means, with objects we know much faster
// tuples are more of a corner case data structure
