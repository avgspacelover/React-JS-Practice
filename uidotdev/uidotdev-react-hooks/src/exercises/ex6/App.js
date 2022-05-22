import { useEffect,useState } from "react"


const Wait = ({delay, placeholder, ui}) => {

    const [open, setOpen]= useState(null);

    useEffect( () => {
        const timer = setTimeout(()=> {
            setOpen(true)
        }, [delay]);

        return () => clearTimeout(timer);

    })

    if(!open) return placeholder;

    return ui;

}

const App = () => {


    return (
        <div>
              <Wait
                    delay={3000}
                    placeholder={<p>UI will appear after delay</p>}
                    ui={<p>This is our UI</p>}
                />
        </div>
    )
}

export default App;