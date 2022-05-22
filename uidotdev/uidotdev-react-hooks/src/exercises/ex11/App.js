import { useReducer } from "react"




const reducer = (state,action) => {

    switch(action.type){

        case "increment":
            return{
                ...state,
                count: state.count +state.step

            };
        case "decrement":
            return {
                ...state,
                count: state.count - state.step
            };
        case "reset":
            return {
                ...state,
                count: 0
            };
        case "step":
            return {
                ...state,
                step: action.value
            };
        default:
            return state;
  }
    }
    
const initialState = {
    count: 0,
    step: 1
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div>
            <input
                onChange={({target: {value}}) => 
                    dispatch({
                        type: "step",
                        value: Number(value)
                    })
                }
                type="range"
                min={1}
                max={1}
                step={1}
                value={state.step}
            />

            <span>{state.step}</span>
            <hr/>
            <span>{state.count}</span>

            <button onClick={() => dispatch({type: "increment"})}>+</button>
            <button onClick={() => dispatch({type: "decrement"})}>-</button>
            <button onClick={() => dispatch({type: "reset"})}>reset</button>

        </div>
    )
}

export default App;