function strngorarray(input){
    return input.length;

}


console.log(strngorarray("yes")) //works
console.log(strngorarray([1,4,7]))//works

console.log(strngorarray({length:60}))// works but i want warning for this
// solution
function strngorarray2(input: string | unknown[]){
    return input.length;

}
function overloaded(input: string): number;
function overloaded(input: unknown[]):number;
function overloaded(input: any){
    return input.length;

}

console.log(overloaded("hello"))
console.log(overloaded([1,2,3,4]))

console.log(overloaded({length: 50})) // hover over


// dealing with type annotation for "this"

interface whythisman {
    onetwo: boolean;
    maybethis: number;
}

const solidstuff ={
    onetwo: true,
    maybethis: 4,
    eat(this: whythisman){
        if(this.maybethis> 2){
            return " never get into cs"
        } else return "never do it either way"
    }


}
