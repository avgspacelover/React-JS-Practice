import {useState } from "react"


const ThemedComponent = () => {

    const [theme, setTheme] = useState("light");

    const toggleBg = () => {
        setTheme((t)=> t==="light"? "dark": "light")
    }

    return (
        <div style={{backgroundColor: theme=== "light"? "#fff" : "black", height: '100%', }}>
            <button onClick={toggleBg} >Toggle to {theme==="light"? "Dark": "Light"}</button>
        </div>
    )
}

//import { Component} from "react";
// class ThemedComponent extends Component{

//     state={
//         theme: "light"
//     }

//     toggleBg= ()=> {
//         this.setState((t)=> t==="light"? "dark": "light")
//     }

//     render(){
//         return (
//             <div style={{backgroundColor: this.state.theme==="light"? "#FFF": "black"}} >
//             <button onClick={this.toggleBg}> Toggle to {this.state.theme=== "light"? "Dark": "Light"}</button>
//             </div>
//         )
//     }

// }




export default ThemedComponent;