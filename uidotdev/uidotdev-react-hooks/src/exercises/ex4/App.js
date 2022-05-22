import { useEffect, useState } from "react";
import { subscribe} from './Service';

const App = ()=> {

    const [username,setUsername] = useState("Mike")
    const [profile, setProfile] = useState(null)

    useEffect( () => {
        const unsubsribe = subscribe( username, profile =>{

            console.log("send profile");
            setProfile(profile)
        })

        return () => {
            setProfile(null)
            unsubsribe();
        }
    }, [username])

    return (
        <div>
            <div>
                <button onClick={()=>setUsername("Mike") }>Mike</button>
                <button onClick={()=> setUsername("Harry") }>Harry</button>

            </div>
            <div>
                {username}
            </div>
            <div>
                {profile? JSON.stringify(profile,null,2): <div>Loading Profile</div>}
            </div>
        </div>
    )
}

export default App;