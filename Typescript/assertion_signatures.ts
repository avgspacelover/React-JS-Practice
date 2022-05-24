/*

We already have a <canvas> element in the HTML of the page, so we can just access 
it using our DOM APIs. Once we have reference to the element, we can create a 2D 
drawing context, and then start making graphics.

TypeScript knows the types which are returned by document.getElementById and 
canvas.getContext , so we should be able to use them without applying any type 
annotations.
*/

const canvas2 = document.getElementById("canvas");
const context = canvas2.getContext("2d"); // Type Error: Property 'getContext' does not exist on type 'HTMLElement'.


/*
It looks like document.getElementById returns an HTMLElement instead of the 
HTMLCanvasElement that we need, even though we know the element is most certainly a 
<canvas> element. Well, let’s try adding a type annotation to our canvas variable.
*/

const canvas4: HTMLCanvasElement = document.getElementById("canvas");
// Type Error: Type 'HTMLElement' is missing the following properties from type 'HTMLCanvasElement': height, width, ...

/*

The HTMLElement type which is returned by getElementById is not assignable to a 
variable with the type HTMLCanvasElement . That’s because HTMLElement doesn’t have 
the necessary properties defined to make it compatible with HTMLCanvasElement .
*/

// ASSERTION SIGNATURE
/*
To assert to the type checker that a value has a specific type, we just append the 
keyword as , followed by the type we want to assert. This tells the TypeScript type 
checker that a certain value is in fact the type we say it is.

*/

const canvas005 = document.getElementById("canvas") as HTMLCanvasElement;
const context005 = canvas005.getContext("2d");

/*
TypeScript isn’t doing any runtime checks for us to make sure that canvas 
really is a HTMLCanvasElement . Any time we do this, we run the risk of being wrong 
and creating type errors which the type checker can’t catch for us.
*/


let fruitName0: number = "banana" as number;
// Type Error: Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other.


interface Carzk {
    make: string;
    model: string;
    color: string;
  }
  interface Fruitzk {
    name: string;
    color: string;
    sweetness: number;
  }
  
  let carzk: Carzk = { make: "Pontiac", model: "Sunfire", color: "silver" };
  let fruityCar: Fruitzk = carzk as Fruitzk;
  // Type Error: Conversion of type 'Car' to type 'Fruit' may be a mistake because neither type sufficiently overlaps with the other.
  //   Type 'Car' is missing the following properties from type 'Fruit': name, sweetness

  // DOUBLE ASSERTION SIGNATURE

  /*
We’re about to dive into something that is exceptionally dangerous. Only do this 
if you are confident you won’t introduce any type errors.

We can convince TypeScript that any value of any type has any other type. 
It all starts by giving a value an assertion that it is unknown . 
Any value can be converted into unknown , so this isn’t very strange so far.


*/

const ageInYears = ("too old to count" as unknown) as number;
ageInYears; // const ageInYears: number
ageInYears.toFixed(8); // Uncaught TypeError: ageInYears.toFixed is not a function

// This is especially useful when you are working with interfaces or third-party APIs which expect parameters to be passed as a certain type.

// It’s much safer for us to convert to a type that is common between the two different types.

function buttonEventListener(
    event: string,
    listener: any,
    element: HTMLButtonElement
  ) {
    element.addEventListener(event, listener);
  }
  
  const anchor = document.createElement("a");
  buttonEventListener("click", () => console.log("Mouse clicked"), anchor);
  // Type Error: Argument of type 'HTMLAnchorElement' is not assignable to parameter of type 'HTMLButtonElement'.
  
  buttonEventListener(
    "click",
    () => console.log("Mouse moved"),
    (anchor as HTMLElement) as HTMLButtonElement
  );
  // no error