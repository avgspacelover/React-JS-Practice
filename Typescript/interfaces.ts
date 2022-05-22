// interface lets you create a named definition of a shape of an object , which can be re-used

interface Car {
    wheels: number;
    color: string;
}

const car : Car = {
    wheels: 4,
    color: "white"
}

const motorcycle: Car = {
    wheels: 2,
    color: "black"
}


interface Bus extends Car{
    weight?: number
}


let busFunc : Bus={
    wheels: 4,
    color:"yellow",
    //weight: 45
}

/*
declaration merging 
interface Car {
    weight: number
}


let busFunc : Car={
    wheels: 4,
    color:"yellow",
    weight: 45
}

*/


let garage: Car[]= []

let layer = {wheels: 4, color: "violet", weight:93, ac: true}
// garage.push({wheels: 4, color: "violet", weight:93, ac: true}) // throws error
garage.push(layer) // works



interface Colors {
    violet: string;
    red: string;
    [mention: string]: string // you cant have any other type  in this object once this indexable type is added
}

const meteor: Colors = {violet: "yes", red: "pol"}

meteor.pink ="maybe"