enum Seasons {
    winter ="snowy",
    spring = "rainy",
    summer= "sunny",
    autumn= "windy"
}

function seasonGreetings(season: Seasons){
    if(season === Seasons.winter) return "ok";
    if(season === Seasons.spring) return "maybe";
    if(season === Seasons.summer) return "idk";
    if(season === Seasons.autumn) return "well";

    
}

/*
HOW IT LOOKS IN JS
    var Seasons;
    (function (Seasons){
        Seasons[Seasons["winter"]=0] = "winter";
        Seasons[Seasons["spring"]=1] = "spring";
        Seasons[Seasons["summer"]=2] = "summer";
        Seasons[Seasons["autumn"]=3] = "autumn";

    })(Seasons || (Seasons = {}) );

*/



seasonGreetings(Seasons.winter)

// enum acts like an objects and values

/*

enum Seasons {
    winter= 12,
    spring,
    summer,
    autumn
}
rest of the values will incremented +1 from there
*/

let weather = Seasons.winter
// weather= "hi" // wont work but you can attach numbers to overwrite so you should avoid it

enum PromiseStates {
    pending,
    fulfilled,
    rejected
}

const FakePromise = {
    state: PromiseStates.pending,
    resolve: function(){
        this.state = PromiseStates.fulfilled;
    },
    reject: function(){
        this.state = PromiseStates.rejected
    }
}

//-------- TUPLES --------------------------------------------

const seasons: string[] = ["spring", "autumn"];

let simpleState : string;

function simpleUseState(initialState: string){
    if(!simpleState){
        simpleState= initialState;
    }

    function updateState(newState: string){
        simpleState = initialState;
    }
    return [simpleState, updateState];
}

const [username, setUsername] = simpleUseState("alexanderson"); // hover over setUsername & username

// type narrowing works

if(typeof setUsername === "function"){
    setUsername("alex");
}

// other way-> tuple

function simpleUseState2(initialState: string): [string, (newString: string)=> void]{
    if(!simpleState){
        simpleState= initialState;
    }

    function updateState(newState: string){
        simpleState = initialState;
    }
    return [simpleState, updateState];
}

const [username2, setUsername2] = simpleUseState2("alexanderson"); // hover over setUsername & username


// TS never infers an array to be an tuple

// always make type annotations for tuples
