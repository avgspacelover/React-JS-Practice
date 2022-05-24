/*

Sometimes we might have two interfaces that are very similar in shape but with 
key differences. If we had a Union of those two interfaces, we could access any 
of the common properties without a problem. However, if we were to try accessing 
one of the properties that only exists on one of the Interfaces, TypeScript would 
warn us.
*/

interface Fruit101 {
    name: string;
    color: string;
    juice: () => void;
  }
  
  interface Vegetable101 {
    name: string;
    color: string;
    steam: () => void;
  }
  
  type EdibleThing101 = Fruit101 | Vegetable101;
  
  function prepareEdibleThing(food: EdibleThing101) {
    food.juice();
    // Type Error: Property 'juice' does not exist on type 'EdibleThing'.
    //    Property 'juice' does not exist on type 'Vegetable'.
  }
 
  // possible solution

  function prepareEdibleThing109(food: EdibleThing101) {
    if ("juice" in food) {
      food.juice();
    }
  }

  /*

This works well when we only need to access a single property, but what if we needed 
to access many properties? Or what if we had more than two types in the Union?

This is where Discriminating Unions come into play. We can create a Discriminating 
Union by adding literal type properties to the interfaces which are part of the union. 
We can then check that individual property to see what type represents the value.
*/



interface Fruit102 {
  type: "fruit";
  name: string;
  color: string;
  juice: () => void;
}

interface Vegetable102 {
  type: "vegetable";
  name: string;
  color: string;
  steam: () => void;
}

type EdibleThing102 = Fruit102 | Vegetable102;

function prepareEdibleThing102(food: EdibleThing102) {
  if (food.type === "fruit") {
    food.juice();
  }
  if (food.type === "vegetable") {
    food.steam();
  }
}
/*

This only works because all of the members of the Union have a similar property, 
but the property doesn’t have to be a literal type. As long as the type is different 
for each of the members, we can check against it. For example, TypeScript’s type 
checker is intelligent enough to determine the type when we use a truthiness check 
on a member that could be null.
*/



type StringResult =
  | { error: Error; data: null }
  | { error: null; data: string };

function handleResult(result: StringResult) {
  if (result.error) {
    // Handle the error, which we know is an Error type
  }

  return result.data;
}
