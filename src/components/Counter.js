import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {counterActions} from '../components/store/counter'

const Counter = () => {
  const dispath = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter)

  const toggleCounterHandler = () => {
    // dispath({type: 'toggle'})
    dispath(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    // dispath({type: 'increment'});
    dispath(counterActions.increment());
  }

  const decrementHandler = () => {
    // dispath({type: 'decrement'});
    dispath(counterActions.decerement());
  }

  const increaseHandler = () => {
    // dispath({type: 'increase', payload: 5})
    dispath(counterActions.increase(5));
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
