import React from "react"
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import data from "./data.js"



const App = () => {
    
    const contentCard = data.map((item,ind) => {
        
        return <Content key={ind} {...item} />
    })
    
    
    return (
        <div className="container">
            <div className="journal">
            
                <Navbar />
            
                <div className="contentCard"> 
            
                    {contentCard}
                
                </div>
                
            </div>
            
        </div>
    )
}

export default App