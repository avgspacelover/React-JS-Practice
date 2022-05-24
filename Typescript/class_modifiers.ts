class Fruit6 {
    name: string;
    public sweetness: number;

    constructor(name: string, sweetness: number){
        this.name =name;
        this.sweetness = sweetness;
    }

    public sayName() {
        console.log(this.name);
    }
}

const apple1 = new Fruit6("Apple", 7)

apple1.name = "banana"
apple1.sayName()

// private, you can only access witin your own class
// protected  , you can only call inside own class + sub classes
// readonly, you cant mutate this property at all

class something {
    protected yes: string;
    private secret: string;
    readonly nochange: string;
    constructor(yes: string, secret: string, nochange: string){
        this.yes= yes
        this.secret = secret;
        this.nochange = nochange;
    }
}

class derive extends something{
    public not: string;
    
    constructor(yes:string, secret: string,nochange: string,  not: string){
        super(yes, secret, nochange)
        this.not = not;
        
    }

    public sayYes(){
        console.log(this.yes)
    }

    public saySecret(){
        console.log(this.secret) // hover over secret
    }
}

const obj = new derive("yes","private", "nochange", "no")
obj.yes // hover over problem
obj.nochange = "cant change or what" // hover over problem
obj.sayYes()

// if you only add a get() method but no set(), it makes it readonly

class makeItFast{


    constructor(public storedName: string){} // this does the same as above operation but no initialising + this binding

    set name(nameInput: string) {
        this.storedName = nameInput;
    }

    get name() {
        return this.storedName[0].toUpperCase() + this.storedName.slice(1)
    }


}

// es6 private fields are different for ts private fields
// in es6-> hard private-> consumers of class cant rely on internal fields,
// makes it easier for you to change implementation of private vars
// classes extending your clases cant acces those private vars
// TS Private field-> it allows the consumers of that private field to consume and edit those vars @ runtime 

class justdoit {

    #esprivatefield : string;

    constructor(esprivatefield : string) {
        this.#esprivatefield = esprivatefield;
        
    }

    get name(){
        return this.#esprivatefield;
    }
}