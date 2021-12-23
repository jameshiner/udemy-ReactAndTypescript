const add = (a: number, b: number): number => {
  return a + b;
};

// ALWAYS annotate each paramter -> no type inference on arguments
// type inference can read the function and infer the return value, however
// we will also ALWAYS annotate the return statement
// this gives error checking to make sure we return the type we want returned
// without the return annotation, things like this wouldnt be an error even tho nothing is returned
const subtract = (a: number, b: number) => {
  a - b;
};

// named function
function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function assigned to variable
const multiply = function (a: number, b: number): number {
  return a * b;
};

// void: nothing is returned
const logger = (message: string): void => {
  console.log(message);
};

// never: never finish the function, will exit before the end, before anything is returned
// edge case, not often used
const throwError = (message: string): never => {
  throw new Error(message);
};

// if a function can possibly exit early, annotate with what is expected to eventually be returned
const throwError2 = (message: string): string => {
  if ('some case') {
    throw new Error(message);
  }
  return message;
};

// destructuring example
const forecast = {
  date: new Date(),
  weather: 'sunny',
};
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
// destructure like normal first, then annotate like normal
const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
logWeather(forecast);
