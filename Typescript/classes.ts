class Fruits {
    name: string;
    color: string;
    sweetness: number;
    constructor(name: string, color: string, sweetness: number){
        this.name = name;
        this.color = color;
        this.sweetness = sweetness;
    }

    fullName(){
        const isSweet = this.sweetness > 50;
        return `${isSweet ? "Sweet" : ""} ${this.color} ${this.name}`
    }
}

console.log( typeof Fruits ) // function, represents the constructor Fn

const Apple = new Fruits("Apple", "red", 80); // init new instance

console.log(typeof Apple)// object
// classes can be used as annotations


const fruitBasket: Fruits[] = []
fruitBasket.push(Apple)


// Its important to assign values to variables via constructors as the strict check of TS will throw an error otherwise
// one way to get around it is to use default values + type narrowing OR you can use non-null "!"(helps us escape strict checking) + type narrowing

class Fruits2 {
    static cookingTimeSeconds = 5       // only exist in class definition and not in instances
    static cook(vegetable: Vegetable){
        setTimeout( () => {
            console.log(`Cooked ${vegetable.name}`)
        })
    }
    name: string;
    color!: string;
    sweetness: number = 3;
    constructor(name: string, color?: string, sweetness?: number){
        this.name = name;
        if(color){
            this.color = color;
        }
        if(sweetness){
            this.sweetness = sweetness;
        }
    }

    fullName(){
        const isSweet = this.sweetness > 50;
        return `${isSweet ? "Sweet" : ""} ${this.color} ${this.name}`
    }
}

// inheritance in classes

class edibleThing4 {
    name: string;
    color!: string;
    constructor(name: string, color?: string, sweetness?: number){
        this.name = name;
        if(color){
            this.color = color;
        }

    }

}

class Fruit4 extends edibleThing4{
    sweetness: number = 3;
    constructor(name: string, color?: string, sweetness?: number){
        
        super(name, color, sweetness)

        this.name = name;
        if(color){
            this.color = color;
        }
        if(sweetness){
            this.sweetness = sweetness;
        }
    }

    fullName(){
        const isSweet = this.sweetness > 50;
        return `${isSweet ? "Sweet" : ""} ${this.color} ${this.name}`
    }

}

// abstract classes -> provides implementation details for any class that extends them



abstract class edibleThing5 {
    name: string;
    color!: string;
    abstract eat(): void;
    constructor(name: string, color?: string, sweetness?: number){
        this.name = name;
        if(color){
            this.color = color;
        }

    }

}

class Fruit5 extends edibleThing5{ // hover over Fruit5 when you comment out eat() inside this class
    sweetness: number = 3;
    constructor(name: string, color?: string, sweetness?: number){
        
        super(name, color, sweetness)

        this.name = name;
        if(color){
            this.color = color;
        }
        if(sweetness){
            this.sweetness = sweetness;
        }
    }
    eat(): void {
        console.log("you are forced to derive this method")
    }
    fullName(){
        const isSweet = this.sweetness > 50;
        return `${isSweet ? "Sweet" : ""} ${this.color} ${this.name}`
    }

}
