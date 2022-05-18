import { useState } from "react"

export const Todo = () => {

    const [text, setText]=  useState('');
    const [todo, setTodo]= useState([]);

    const ipChangeHandler = (e) => {
        
        setText(e.target.value);
    }

    const addTodo = () => {
        let obj = {
            text,
            id:todo.length+1
        }
        setTodo((prevTodo)=> [...prevTodo,obj ])
        setText('');
        
    }
    const removeItem = (id)=> {

        const updatedList = todo.filter(item => item.id !== id);
        setTodo(updatedList);

    }
    return (
        <div>
            <input value={text} onChange={ipChangeHandler}/>

            <button onClick={addTodo}>Add</button>

            <div>
                {todo.length>0 &&
                    todo.map((item)=> {
                        return (
                            <ul>
                                <li>{item.text}&nbsp;<button onClick={()=> removeItem(item.id)}>remove</button></li>
                            </ul>
                        )
                    })
                }
            </div>
        </div>
    )
}


