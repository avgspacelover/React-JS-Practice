// import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit'

import counterReducer from './counter-slice'

import authReducer from './auth-slice'






// you can only call configurestore once and only call one reducer inside
const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer}
});


export default store;





/*

const reducerFunction = (state= initialState, action) => {

    if(action.type === 'increment'){
        return {
            counter: state.counter +1,
            showCounter: state.showCounter
        }
    } else if(action.type === 'decrement'){
        return {
            counter: state.counter -1,
            showCounter: state.showCounter
        } 

    }  else if(action.type === 'increase'){
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }  else if(action.type === 'toggle'){
        return {
            counter: state.counter ,
            showCounter: !state.showCounter
        }
    }


    return state;
}


*/
