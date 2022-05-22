// custom hooks

import { useEffect, useState } from "react";


const useWait = (delay) => {

    const [ready, setReady] = useState(false);

    useEffect( () => {
        setTimeout( () => {
            setReady(true)
        },delay);
    },[delay]);

    return ready;
}

const Wait = ({delay, placeholder, ui}) => {

    const ready = useWait(delay);

    return ready ? ui : placeholder;

}

const App = () => {

    return(
        <Wait delay={3000} placeholder = {<div>loading UI</div>} ui={<div>Content</div>} />
    )
}


export default App;