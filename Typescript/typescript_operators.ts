
const theAnswer: number = 15+ 27;

type NumberOrString = number | string;


interface turtle {
    name: string;
    color: string;
    nutrition: {name: string; amount: number}[];
}

// type-indexed access

type turtleList = turtle["nutrition"]
type list = turtleList[number]
type zerolist = turtleList[0]

let rectangle = {width: 100, height: 200}

let rectangle2 : rectangle // hover over error

let rectangle3: typeof rectangle // wprks


interface Rectangle {
    width: number;
    height: number;
}

let propertyName: keyof Rectangle = "height"
let propertyName2: keyof typeof rectangle = "height"

let square: {width: 100, height: 100} = {width: 100, height: 100} // using literal types on values

// const assertions

let triangle = {width: 100, height:200} as const; // adds readonly modifier, hover over value
let pentagon = {width: 100, height: 200 as const}

let message = "Hello" as const;




enum Seasons3 {
    winter,
    spring,
    summer,
    autumn
}

function seasonGreetings(season: Seasons3){
    if(season === Seasons3.winter) return "ok";
    if(season === Seasons3.spring) return "maybe";
    if(season === Seasons3.summer) return "idk";
    if(season === Seasons3.autumn) return "well";

    
}

 const Seasons4 ={
    winter :"winter",
    spring : "spring",
    summer: "summer",
    autumn: "autumn"
} as const ;

function seasonGreetings(season: typeof Seasons4[keyof typeof Seasons4]){
    if(season === Seasons4.winter) return "ok";
    if(season === Seasons4.spring) return "maybe";
    if(season === Seasons4.summer) return "idk";
    if(season === Seasons4.autumn) return "well";

    
}


const asstditems = ["hello", 5, (fruit: Fruit7) => {}] // hover over value, doesnt care about order of types

const asstditems2 = ["hello", 5, (fruit: Fruit7) => {}] as const // makes it into a tuple, no explicit annotation needed

// if you use variable inside array definition , types is appased into tuple definition, instead of literal values

const var1= "hello";
const var2= 5;

const asstditems3 = [var1, var2, (fruit: Fruit7) => {}] // hover over value
