
let fruit = "banana";

// fruit = 25 wont work

let fruitLiteral = {
    sweet: "ji",
    term: 2,
    lady: [23,"sing"],
    lem: {jo: 21},
}
//hover over them
let taste = fruitLiteral.sweet;
let {term} = fruitLiteral;

let array = ["apple", "oranges"];
// hover over args, ret
const ret =array.map((name, index ) => {
    return name.length
})

// TYPE ANNOTATIONS


function randomFunc (randarg) {
    let randfunc2: string;

    if(randarg.length> 1){
        randfunc2= "ok"
    } else{
        randfunc2="not ok"
    }

    return randfunc2;
}
// randarg is given any type

let abc: string = "cheesecake"

// to use undefined but declared vars

let favdes!: string

console.log(favdes)

// array definitions

let ingredients: string[];
let recipes: Array<string>; // AVOID THIS

// object definitions


let menu: {
    courses: number;
    vegan: boolean;
    drinkChoice: string[];
} = {
    courses: 21,
    vegan: true,
    drinkChoice: ["pi"]
}

const {courses: string}= menu; // creates a var called " string" with number type

const nullValue: null = null; //only takes in 1 value

async function randomfunc3(): Promise<string[]>{

    const data = await fetch("https://example.com/tasks.json")
    const arrayList: string[]= await data.json();

    return arrayList;
}

// function annotations

function addFunc(name: string, index: number){

    if(index%2 ===0){
        return name.toLocaleUpperCase
    }

    return name;


}

function headsortails():boolean{
    
    //return 1 //gives error
    return false;

}


async function randfunc3():Promise<string[]>{

    const data = await fetch("https://example.com/tasks.json")
    const arrayList: string[]= await data.json();

    return arrayList;
}
// can ignore Promise<any>

function anything(list: number[], callback:((item:number) => number)){
return list.map(callback)

}
//const doubledNumbers = anything([1,2,3], 6) // throws error

const doubledNumbers2 = anything([1,2,3], (num) => num*2) // works

// optional parameters

function what(check:string, optional?:boolean){ // you can also yell= true{give def value}
    console.log(check)
}
what("hi") // works

function manyOutput(...lots: string[]){
    lots.forEach((message) => {
        console.log(message)
    })
}

manyOutput("hi","no")
//manyOutput("yes",1)// throws error


export{}