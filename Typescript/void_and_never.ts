
function sendReq(): void{
    fetch('http://shutfup.com/pleaseshutfup', {method: "POST"})
}

const output = sendReq();

function perfReq(requestCallback: () => void){
// useful for fn that doesnt return anything
}

function exception(): never{
    throw new Error("Something terrible has happened");
    //fn can never return anything
}

const output2 = exception();

function loopForever() : never { // never run at runtime
    while(true){}
}

function implicitNever() {
    return loopForever()
}
const output3 = implicitNever() // op3 also gets never