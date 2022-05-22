interface Fruit3 {
    name: string;
    sweetness: number;
}

interface Vegetable3 {
    name: string;
    hasSeeds: boolean;
}

// intersection -> combines; one type and another
/*
interface edibleThing {
    name: string;
    sweetness: number;
    hasSeeds: boolean;
}
*/

type edibleThing = Fruit3 & Vegetable3

let banana: edibleThing = {name: "banana", sweetness: 70, hasSeeds: false}

// you cant combine 2 primtives like a string & number etc.-> it will give  a never type
// you cant combine with similar shape but with diff prop too