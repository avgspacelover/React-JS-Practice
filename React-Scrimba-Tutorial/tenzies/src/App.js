import React from "react"

import Die from "./Die"

import {nanoid} from "nanoid"

import Confetti from 'react-confetti'

const App = () => {
    
const [tenzies, setTenzies] = React.useState(false)
const [dice, setDice] = React.useState(allNewDice())

    React.useEffect(()=> {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            console.log("You won!")
        }
        
    }, [dice])

function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }


       function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    
    
    
     function rollDice() {
          setDice(oldDice => oldDice.map(die => {
            
            return die.isHeld ? 
                die :
                generateNewDie()
                })
            )
    
        }
    
    function holdDice(id){
       
       setDice(dice.map(die => {
            return die.id=== id?{...die,isHeld: !die.isHeld}:die
        }))
    }
    
    const diceElements =dice.map( (num,index) => <Die key={num.id} value={num.value} isHeld={num.isHeld} holdDice={() => {holdDice(num.id)}} /> )
    
    return (
        
        <main>
        
        
                <h1 className="title">Tenzies</h1>
                <p className="instructions">
                    Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
                </p>
               <div className="container">
                
                    {diceElements}   
            </div>
            
            <button className="roll-dice" onClick={rollDice}>{tenzies?"New Game":"Roll"}</button>
            
            {tenzies && <Confetti numberOfPieces={10} />}
        </main>
    )
}

export default App