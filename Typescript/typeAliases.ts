// PROBLEM

let position: [number, number, number] = [27,31, 5];

function calculatorDistance3D(
    point1: [number, number, number],
    point2: [number, number, number]
): number {
    // TODO: distance formula

}

// write out type annotations only once

type Coordinates3D = [number, number, number]

let position2: Coordinates3D = [27,31, 5];


function calculatorDistance3D2(
    point1:  Coordinates3D,
    point2: Coordinates3D
): number {
    // TODO: distance formula

}


type Fruitlist = string[]; // they dont create a new type

const fruit: Fruitlist = ["apple"];

interface IndexedFruitList {
    [index: number]: string;
}

const otherFuitList: string[]= fruit;
const indexedFruitList: IndexedFruitList = fruit; // all 3 are compatible

//-------------------Self-referencing-types, types inside types---------------

type StringTree = {
    value: string;
    left?: StringTree;
    right?: StringTree;
}

let myStringTree: StringTree = {
    value: "Trunk",
    left: {
        value: "Apple",
        right: {
            value: "orange"
        }
        //left: "string not alowed"
    }
}

/* 
INTERFACES VS TYPE ALIASES

Interfaces -> supports extension via "extends" keyword, interfaces best for hierarchies
TYPE ALIASES-> can represent any type(incl function and interfaces)
TYPE ALIASES-> good for repetitive occurring type patterns

*/

interface Fruit {
    name: string,
    color: string,
    sweetness: number
}

type FruitType = Fruit; // this a type alias and not an interface

type EatFruitCallback = (fruit: Fruit) => void;