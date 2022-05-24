/*
We’ve finally come to one of the most important sections in the entire course. 
What do you do when you have an unknown type and you want to use it in a meaningful way? 
What about a Union of several types? 
To do so safely requires us adding some runtime checks which prove to the TypeScript type checker that the value has a specific type. 
We call these runtime checks “type guards”.

We can create type guards using any kind of conditional - 
if statements, switch statements, ternaries, and a few others.
We put some kind of check against the value’s type inside the if statement’s condition. 
Then, inside the block, our value now has the type we matched it against.
*/

// strict checks

function sayAlexsNameLoud(name: unknown) {
    if (name === "Alex") {
      // name is now definitely "Alex"
      console.log(`Hey, ${name.toUpperCase()}`); // "Hey, ALEX"
    }
  }

  function sayNameLoud2(name: unknown) {
    if (typeof name === "string") {
      // name is now definitely a string
      console.log(`Hey, ${name.toUpperCase()}`);
    }
  }

  function sayNameLoud3(name: unknown) {
    if (typeof name !== "string") return;
    // name is now definitely a string
    console.log(`Hey, ${name.toUpperCase()}`);
  }

  function calculateScore(score: number | string) {
    switch (typeof score) {
      case "string":
        return parseInt(score) + 10;
        break;
      case "number":
        return score + 10;
        break;
      default:
        throw new Error("Invalid type for score");
    }
  }

  // Arrays

  function combineList(list: unknown): any {
    if (Array.isArray(list)) {
      list; // (parameter) list: any[]
    }
  }
  // doesn't help us

  /*
  Our list is now a list of any s, which is better than before, 
  but we still don’t know the type of the values inside the list. 
  To do that, we’ll have to loop through our array to narrow the type of each item. 
  We can use the .filter() and .map() methods on our array to do that. 
  We could also use a for loop. Which you choose depends on your circumstances.
  */

  function combineList2(list: unknown): any {
    if (Array.isArray(list)) {
      // This will filter any items which are not numbers.
      const filteredList: number[] = list.filter((item) => {
        if (typeof item !== "number") return false;
        return true;
      });
  
      // This will transform any items into numbers, and turn `NaN`s into 0
      const mappedList: number[] = list.map((item) => {
        const numberValue = parseFloat(item);
        if (isNaN(numberValue)) return 0;
        return numberValue;
      }); // you dont need to annotate type for mapped list here as we are changing the value using parseFloat()
  
      // This does the same thing as the filter, but with a for loop
      let loopedList: number[] = [];
      for (let item of list) {
        if (typeof item == "number") {
          loopedList.push(item);
        }
      }
    }
  }
  
// class
// We can determine whether a value is an instance of a specific class using the instanceof operator.

class Fruit {
    constructor(public name: string) {}
    eat() {
      console.log(`Mmm. ${this.name}s.`);
    }
  }
  
  function eatFruit(fruit: unknown) {
    if (fruit instanceof Fruit) {
      fruit.eat();
    }
  }

  // objects
  /*

The in operator only works to narrow union types, so we can’t use it with unknown . 
Instead, we’ll have to use another special type that comes with TypeScript: object . 
This type represents anything that isn’t a string , number , boolean , or one of the other primitive types. 
Using object instead of unknown will tell TypeScript to let us attempt to access properties on this value. 
We can create a Union of the generic object type and an Interface with the property that we want to access.

*/

interface Person {
    name: string;
  }
  function sayNameLoud(person: object | Person) {
    if ("name" in person) {
      console.log(`Hey, ${person.name.toUpperCase()}`);
    }
  }
/*
In this case, TypeScript doesn’t care what other properties are on our person type. 
All that matters is that it has a name property which is a string . 
We could actually abuse this quirk in the type checker to create code 
that looks type safe but throws a runtime type error.

*/
interface Person2 {
    name: string;
    age: number;
  }
  function sayNameLoud9(person: object | Person2) {
    if ("age" in person) {
      console.log(`Hey, ${person.name.toUpperCase()}`);
    }
  }
  
  sayNameLoud9({ age: 27 });
  /*
  The best way to avoid this is to check for all the properties that we actually use so we can guarantee that they are the 
  type we want them to be.
  */