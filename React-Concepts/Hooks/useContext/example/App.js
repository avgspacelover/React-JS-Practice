import React from 'react'
import LocaleContext from './LocaleContext'

import Home from './Home'


const App = () => {

    const data= 'Hi'

    return(
        <LocaleContext.Provider value={data}>
        
            <Home />

        </LocaleContext.Provider>
    )
}