async function getList(){
    const response = await fetch("https://examples.com/fruit")
    const fruitList: string[]= await response.json() // ok to have any here in worst case scenario
}

// unknown is better for offering type safety

const unk: unknown= "what if"


// let notOk = unk.toUpperCase() // doesnt work

// look up type narrowing

if(typeof unk ==="string"){ // runtime-checks
    let notOk = unk.toUpperCase() //  works
    
}

// any gives you max flexibility but no type safety
// unknown mainatains some degree of type safety
// prefer unknown> any
    