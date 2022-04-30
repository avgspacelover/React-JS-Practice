import React,{useContext} from 'react'
import LocaleContext from './LocaleContext'

const Home = () => {

    return (
        <React.Consumer>
            {(value)=> {
                <div>{value}</div>
            }}
        </React.Consumer>
    )
}
//ALTERNATE

const Home2 = () => {  // have to write 'Home' for it to work
    const value= useContext(LocaleContext)

    return (
        <>
            {(value)=> {
                <div>{value}</div>
            }}
        </>
    )
}



export default Home;