class Fruit9 {
    isFruit = true;
    constructor(public name: string) {}
  }
  class Apple9 extends Fruit {
    type: "Apple" = "Apple";
    constructor() {
      super("Apple");
    }
  }
  class Banana extends Fruit {
    type: "Banana" = "Banana";
    constructor() {
      super("Banana");
    }
  }

  
/*
We’re doing two things here which might look a little bit redundant.

Our Fruit class has a property isFruit set to the literal true value. 
Why is this necessary when we can see the class is named Fruit ?
Our Apple and Banana classes have a type property set to the literal Apple
and Banana values. Why is this necessary when we can see those classes are
named Apple and Banana ?

The reason for both of these extra bits of data is structural typing. 
This is the typing strategy which TypeScript uses to evaluate whether two types are 
compatible. It focuses on the shape of objects, and is often called “duck typing” 
(if it has a beak like a duck and waddles like a duck, it’s probably a duck.) 
Structural typing is a good choice for TypeScript; even though all of the type 
information is removed when TypeScript code is compiled into JavaScript, we can 
still do runtime checks against the shape of our objects.

If we didn’t have the type properties, our Apple and Banana types would be 
indistinguishable, since they all would share the same property: name:string . 
Adding those extra properties helps us distinguish between them, both in the 
type system and at runtime.

One other thing to note is that different ways of describing structured types,
such as classes, interfaces, and literal object types, are all structurally 
equivalent as well. All three of these types are equivalent in TypeScript.
*/

class AppleClass {
    type: "Apple";
    name: string;
  }
  interface AppleInterface {
    type: "Apple";
    name: string;
  }
  type AppleType = {
    type: "Apple";
    name: string;
  };
/*

Other programming languages, like Java and C# use a nominal type system. The word “nominal” refers to the name of the thing, which means 
if I were to create two classes with an identical structure, but different names, 
those two classes would be considered different.

Like we saw with the Apple and Banana classes, we can emulate nominal typing by 
adding a unique property to our types with a string literal type. 
This practice is called “branding”, or “tagging”, and is what allowed us to 
differentiate between the two types in the type system.

When using a branded type, you want to make sure you assign your variables with the 
correct type; otherwise TypeScript will infer the type based on what value you put 
in your variable.
*/

let banana0 = new Apple9(); // const banana: Apple
let apple76: Apple9 = new Banana(); // Type 'Banana' is not assignable to type 'Apple'.

/*

This makes it possible to discriminate between types that may have the same structure,
but different purposes. We can also create what are called “branded primitives”. 

This allows us to create primitive values which are only assignable to variables 
and parameters that match a specific type signature.

We first create our branded primitive type. In this case, I’ll make a number that 
represents money from different countries.
*/

type USD = number & { _brand: "USD" };
type EUR = number & { _brand: "EUR" };

let income: USD = 10; // Type Error: Type 'number' is not assignable to type 'USD'.

// Instead, we have to use an assertion signature to convert our number type into the branded type. 
// Then, we won’t be able to assign USD numbers to EUR variables without converting the type 
// (and value if necessary) first.

let VAT = 10 as EUR;

function convertToUSD(input: EUR): USD {
  return (input * 1.18) as USD;
}

let VATInUSD = convertToUSD(VAT); // let VATInUSD = USD;
