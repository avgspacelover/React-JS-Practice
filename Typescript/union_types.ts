interface CoordinateInterface {
    x: number;
    y: number;
}

type CoordinateTuple = [number, number]

type Coordinate = CoordinateInterface | CoordinateTuple // union 


function measureDistance(point1: Coordinate , point2: Coordinate): number{

    const {x: x1, y: y1 } = extractXY(point1);
    const {x: x2, y: y2} = extractXY(point2);

    return Math.sqrt((x2-x1) **2 + (y2- y1) **2 );

}

function extractXY(point: Coordinate) {
    if(Array.isArray(point)){
        return {x: point[0], y: point[1]};
    } else {
        return point;
    }
}

const distance1 = measureDistance([1,2], [2,3]);
const distance2 = measureDistance({x: 1, y: 2}, {x: 3, y:4 });
const distance3 = measureDistance([5,6], {x: 3, y:4 });

//-----------//

interface Fruit {
    name: string;
    sweetness: number;
}

interface Vegetable {
    name: string;
    hasSeeds: boolean;
}

type EdibleThing = Fruit | Vegetable;

// you can access  name prop easily but not the uncommon ones

function checkForSeeds(food: EdibleThing){

    if("hasSeeds" in food){  // fix by type narrowing
        console.log(food.hasSeeds)

    }
}

interface Fruit {
    name: string;
    sweetness2?: number;
}

function getSweetness(fruit: Fruit): number {

    const sweetness = fruit.sweetness2; //when you do an optional up there, it assigns a b-default union
    if(sweetness){ // type narrowing helps with that
        return sweetness;

    }

    throw new Error("sweetness is not set") // handles for undef
}