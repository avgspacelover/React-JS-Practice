/* eslint-disable @typescript-eslint/no-unused-vars */
// Make sure you replace all of the `unknown` types with the appropriate
// union types.

// Create a union type that represents either a string or an array of strings
type StringOrStringArray = string | string[];

const fruitName: StringOrStringArray = "Apple";
const fruitList: StringOrStringArray = ["Apple", "Banana", "Pear"];

// Create a union type that represents an array of numbers and strings
type NumberAndStringArray = (number | string)[];

const assortedItems: NumberAndStringArray = ["Orange", 5, 2, "Strawberry", 1];

// Create a union type that includes literal types for the days of the week
// Don't use a string here
type DaysOfTheWeek = "Friday"| "Saturday";

const today: DaysOfTheWeek = "Friday";
const tomorrow: DaysOfTheWeek = "Saturday";

// This will have a red squiggle if the type
// below it is valid. You want to get rid of
// the red squiggle
// @ts-expect-error
const fruitDay: DaysOfTheWeek = "Apple";

// Create a union type that includes these two interfaces
interface Fruit {
  name: string;
  sweetness?: number;
}
interface Vegetable {
  name: string;
  hasSeeds: boolean;
}
type Food = Fruit | Vegetable;

const apple: Food = { name: "Apple", sweetness: 80 };
const onion: Food = { name: "Vegetable", hasSeeds: false };

// Fix the problems in this function without changing the parameter or return types
function getSweetness(fruit?: Fruit): number {
  if(fruit){
    const sweetness = fruit.sweetness || 0;
    return sweetness;
  }
  return 0
}


export {}