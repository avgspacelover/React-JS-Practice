// import {createStore} from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = {counter: 0, showCounter: false}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter=state.counter +action.payload
        },
        toggleCounter(state){
            state.showCounter= !state.showCounter
        }
    }
})

export const counterActions = counterSlice.actions

const store = configureStore({
    reducer: counterSlice.reducer
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
