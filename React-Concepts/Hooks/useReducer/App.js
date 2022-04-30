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


const App = () => {


    const [state, dispatch] = usereducer(reducer, 0)  

    const [{todos}, dispatch2] =useReducer(reducer2, {todos: [], todoCount: 0})

    const [text, setText] = useState('')

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