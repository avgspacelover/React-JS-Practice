import react, {useEffect,useRef, useState} from 'react'


// const usePersistentValue =(initialValue) => {
//     return useState({

//         current: initialValue

//     })[0]
// }
// ABOVE WORKS SAME AS useRef

const Counter = () => {
    const [count,setCount]= useState(0);

    //const id= usePersistentValue(null);

    const id= useRef(null);

    const clear = () => {
        window.clearInterval(id.current)
    }

    useEffect( () => {

        id.current = window.setInterval(() => {
            setCount((c)=> c+1)
        }, 1000);

        return clear;
    }, [] )

    return (
        <div>
            <h1>{count}</h1>

            <hr/>

        <button onClick={clear} > Stop</button>
        </div>

    )

}