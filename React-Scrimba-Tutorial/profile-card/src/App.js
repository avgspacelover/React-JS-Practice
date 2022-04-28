import React from "react"

import Info from "./components/Info"

import About from "./components/About"

import Socials from "./components/Socials"



const App = () => {
    
    return(
        <div className ="container">
            
            <div className="card">
                
                <Info />
                <About />
                <Socials />
            
            </div>
            
        </div>
    )
}

export default App;

