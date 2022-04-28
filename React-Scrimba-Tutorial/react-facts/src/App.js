import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    
    const [darkMode , setDarkMode] = React.useState(false);
    
    const toggleDarkMode = () => {
        setDarkMode(item => !item)
    }
    
    return (
        <div className="container">
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <Main  toggleDarkMode={toggleDarkMode} darkMode={darkMode}  />
        </div>
    )
}