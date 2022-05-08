

import classes from './Counter.module.css';

import {useSelector, useDispatch} from 'react-redux'; 
import { counterActions } from '../store/index';

const Counter = () => {

  const counter= useSelector(state => state.counter.counter); //state.counter becomes state.counter.counter for multiple slices
  const show = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch();

  const incrementHandler = () => {

    //dispatch({type: 'increment'})
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {

    //dispatch({type: 'decrement'})
    dispatch(counterActions.decrement())
  }

  const increaseHandler =() => {

    //dispatch({type: 'increase', amount:5});

    dispatch(counterActions.increase(5))
  }

  const toggleCounterHandler = () => {

    //dispatch({type: 'toggle'})
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show &&<div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}> Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};




export default Counter;



// CLASS BASED VERSION 

//import { Component } from 'react';

//import {connect} from 'react-redux'; // connect for class based cmp


// class Counter extends Component {
//   incrementHandler(){
//     this.props.increment();
//   }
 
//   decrementHandler(){
//     this.props.decrement();
//   }
 
//   toggleCounterHandler() {}
 
 
//    render(){
 
//      return (
//        <main className={classes.counter}>
//          <h1>Redux Counter</h1>
//          <div className={classes.value}>{this.props.counter}</div>
//          <div>
//            <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//            <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//          </div>
//          <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//        </main>
//      );
 
//    }
//  }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})

//   }

// }
//export default connect(mapStateToProps, mapDispatchToProps)(Counter); // for class based cmp