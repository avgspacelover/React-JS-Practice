// custom hooks

import { useCallback, useEffect, useState } from "react"

const useWindowDimensions = () => {
    const [width, setWidth]= useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    const handleResize= useCallback(({target}) => {
        setWidth(target.innerWidth)
        setHeight(target.innerHeight)

    }, []);

    useEffect(() => {
        window.addEventListener("resize",handleResize);
        return ()=> window.removeEventListener("resize", handleResize);

    }, [handleResize]);


    return [height, width];
}
const App = () => {


    const [height, width] = useWindowDimensions();

    return (
        <div>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
        </div>
    )
}


export default App;