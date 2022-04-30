import React,{useState, useReducer} from 'react'



const reducer = (state,action) => { //pure function(current state, action(to access the values stored))

    switch(action.type){

        case "increment":
            return state + 1;  //not to do state++ or basically no mutating the state
        
        case "decrement":
            return state -1;
        
        default:
            return state;
    }

}

const reducer2 = (state,action) => { //pure function(current state, action(to access the values stored))

    switch(action.type){

        case "add-todo":
            return {todos: [...state.todos, {text: action.text, completed: false}], todoCount: state.todoCount +1};  //not to do state++ or basically no mutating the state
    

        case "toggle-todo":
            return {
                todos: state.todos.map((t,idx) => idx== action.idx ? {...t,completed:!t.completed}: t),
                todoCount: state.todoCount
            }; 

        default:
            return state;
    }

}


const reducer3 = (state,action) => { 

    switch(action.type){

        case "increment":
            return {
                count: state.count +state.step,
                step: state.step
            }
        
        case "decrement":
            return  {
                count: state.count - state.step,
                step: state.step
            }
        
        case "updateStep":
            return  {
                count: state.count ,
                step: action.step
            }
        case "reset":
            return  {
                count: 0,
                step: state.step
            }
        
        default:
            return state;
    }

}


const Slider = ({onChange, min,max}) => {

    const[value,setValue]= useState(1);

    return(

        <>
            {value}
            <input 
                type='range'
                min={min}
                max={max}
                value={value}
                onChange={(e) => {
                    const value = Number(e.target.value);
                    onChange(value);
                    setValue(value);
                }}
            />
        </>
    )
}

const App = () => {


    const [state, dispatch] = usereducer(reducer, 0)  

    const [{todos}, dispatch2] =useReducer(reducer2, {todos: [], todoCount: 0})

    const [text, setText] = useState('')

    //uidotdev example

    const [counter, dispatch3] = useReducer(reducer3, {count: 0, step: 1});



    return (
        <div>
            <div>
                <div>Count: {count}</div>
                {/*dispatch passes value to action in reducer */}

                <button onClick={ () => dispatch({type: 'increment'})}>    </button> 

                <button onClick={ () => dispatch({type: 'decrement'})}>    </button>
            </div>

            <div> NUmber of Todos: {todoCount}</div>

            <form onSubmit={event => {

                event.preventDefault();
                dispatch2({type: 'add-todo', text})

            }}>



                <input value={text} onChange={event=> setText(event.target.value)} />

                <button onClick={ () => dispatch2({type: 'increment'})}>    </button> 

                <button onClick={ () => dispatch2({type: 'decrement'})}>    </button>

            </form>

            {/*<pre>{JSON.stringify(todos,null,2)}</pre>*/}

            {/*uidotdev example*/}



            <Slider min={1} max={10} 
            onChange={(value) => dispatch3({
                type: 'updateStep',
                step: value
            })} 
            />
            <hr />
            <div>{counter.count}</div>

            <button onClick={ () => dispatch3({type: 'increment'})}>    </button> 

            <button onClick={ () => dispatch3({type: 'decrement'})}>    </button>

            <button onClick={ () => dispatch3({type: 'reset'})}>    </button>



            {todos.map((t,idx) => {
                <div 
                key={t.text} 
                onClick={dispatch2({type: 'toggle-todo',idx})}
                style={{textDecoration: t.completed? "linethrough": ""}}
                >{t.text}</div>
            })}
        </div>
    )
}