/* eslint-disable @typescript-eslint/no-unused-vars */
// Adding Type Annotations
// Replace the `unknown` type annotations with the correct type
let guestCount: number = 50;

let favoriteDessert: string = "Cheesecake";

const ingredients: string[]= [
  "butter",
  "flour",
  "baking powder",
  "sugar",
  "eggs",
  "vanilla",
  "salt"
];

// Correcting Variable Values
const menu: {
  courses: number;
  veganOption: boolean;
  drinkChoices: string[];
} = {
  courses: 5,
  veganOption: true,
  drinkChoices: ["hi"]
};

// Function Annotation
const apple = {
  name: "Apple",
  color: "red",
  sweetness: 80
};

function eatFruit(fruit: {name: string}) {
  if (fruit.name === "Apple") {
    console.log("I love apples!");
  }
  console.log("Fruit is very tasty.");
}

eatFruit(apple);

function transformFruit(fruitList: string[], transformFunction: (fruiitName:string)=> string) {
  return fruitList.map(transformFunction);
}

const fruitList = ["Apple", "Banana", "Orange"];

function bakeFruit(fruitName: string) {
  return `Baked ${fruitName}`;
}

const bakedFruit = transformFruit(fruitList, bakeFruit);
