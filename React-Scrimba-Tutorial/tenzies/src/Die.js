import React from "react"

const Die = (props) => {
    
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    return(
        <div onClick={props.holdDice} style={styles} className="die" >
            <h2 className="die-dash-name">
            {props.value}
            </h2>
        </div>
    )
}

export default Die