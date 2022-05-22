// Use write an interface that represents the data used in this function.
// Annotate the function with your interface.

interface Fruit {
    name: string;
    color: string;
    sweetness: number;
    stars: number;
}

function compileFruitReview(fruit: Fruit) {
  let review: string = `This ${fruit.name} has a nice ${fruit.color} color to it.`;
  if (fruit.sweetness < 50) {
    review += " It could be a little sweeter.";
  } else {
    review += " When I tasted it, it was delicious.";
  }

  review += ` I would give it ${fruit.stars} stars.`;

  return review;
}

console.log(
  compileFruitReview({ name: "Apple", color: "red", sweetness: 80, stars: 4.5 })
);

// Extending Interfaces
// Create an interface for an Apple by extending the Fruit interface you already made
// Add a property to represent the variety of the apple, such as Fiji, Braeburn, etc.

interface Apple extends Fruit{
    variety: string;
}

// Indexable Properties
// Create an interface that represents the data used in this function.

interface FruitCache {
    [id: string]: Fruit
}

const fruitCache: FruitCache = {
    
};

async function fetchFruitOrUseCache(id: string) {
  if (fruitCache[id]) {
    return fruitCache[id];
  }
  const response = await fetch(`https://example.com/fruit/${id}`);
  const fruit: Fruit = await response.json();
  fruitCache[id] = fruit;
  return fruit;
}
