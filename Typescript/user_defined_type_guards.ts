/*

Suppose we have two interfaces. We can’t modify these interfaces for some reason - 
perhaps they are part of a third-party library - so we can’t take advantage of 
Discriminating Unions. However, we still need some way to tell the difference between 
them.

interface Fruit {
  name: string;
  color: string;
  sweetness: number;
}
interface Vegetable {
  name: string;
  color: string;
  tenderness: number;
}

/*
A user defined type guard is a function that takes at least one argument, returns a 
boolean, and has a type predicate return signature. This is a special type signature 
which says “this value is most certainly this type”.
*/

function isFruit(maybeFruit: Fruit | Vegetable): maybeFruit is Fruit {
    if ("sweetness" in maybeFruit) return true;
    return false;
  }
  
  const tomato = { name: "Tomato", color: "red", tenderness: 70 };
  if (isFruit(tomato)) {
    console.log(`Tomato is ${tomato.sweetness}% sweet.`);
  } else {
    console.log(`Tomato is ${tomato.tenderness}% tender.`);
  }
  
  // "Tomato is 70% tender."

/*
Our type predicate, maybeFruit is Fruit , tells us that if this function returns true,
then maybeFruit is definitely a Fruit . Since tomato doesn’t have a sweetness property,
it is recognized as a Vegetable , which lets us access the tenderness property 
without warning.
*/

function isFruit567(maybeFruit: any): maybeFruit is Fruit {
    if ("color" in maybeFruit) return true;
    return false;
  }

  /*

While this would work some of the time, other times it might give us the wrong type. 
If we were to pass a Vegetable to this function, it would transform its type into a 
fruit. What if the color property were present on maybeFruit , but it was actually a 
number instead of a string?
*/

// ASSERTION FUNCTIONS

/*
There are two kinds of assertion signatures. The first type asserts that a boolean argument 
is true. We have to pass in a argument, and then we can add asserts <parameter name> 
as our function return signature. If the function doesn’t throw an error, it influences 
the type of the values used in the condition.

*/

function assertTrue(condition: boolean): asserts condition {
    if (!condition) {
      throw new Error();
    }
  }
  
  const maybeFruitName: unknown = "Banana";
  
  assertTrue(typeof maybeFruitName === "string");
  
  maybeFruitName; // const maybeFruitName: string;

/*
This works in a similar way to using if statements to return early, but it throws 
an error instead.

The second assertion signature is written more like a type predicate. It allows us to assert that if the function does not throw an error, a function argument is a specific type.
function.
*/

function assertIsFruit2(maybeFruit: any): asserts maybeFruit is Fruit {
    if (!("sweetness" in maybeFruit)) throw new Error();
  }
  
  const tomato324 = { name: "Tomato", color: "red", tenderness: 70 };
  assertIsFruit2(tomato324);
  
  tomato; // const tomato: Fruit

/*

Both Assertion Functions and Type Predicates allow us to write functions which 
assert or prove something about the types of the values which are passed into them, 
giving us more flexibility with how we perform runtime type checks of our values.

*/