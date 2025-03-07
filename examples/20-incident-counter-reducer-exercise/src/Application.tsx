import { useReducer } from 'react';

// type CounterAction = {
//   type: 'INCREMENT' | 'DECREMENT' | 'SET'
//   payload?: number;
// }

type CounterState = {
  value: number;
}

type BasicCounterAction = {
  type: 'INCREMENT' | 'DECREMENT'
}

type SetCounterAction{
  type: 'SET'
  payload: number;
}

type CounterAction = BasicCounterAction | SetCounterAction

const reducer = (state: CounterAction, action: CounterAction) => {
  switch (action.type) {
    case: 'INCREMENT':
      return { value: state.value + 1 };
    case: 'DECREMENT':
      return { value: state.value - 1 };
    case: 'SET':
      return { value: action.payload };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'SET', payload: 0 });
  const set = (n: number) => dispatch({ type: 'SET', payload: n });

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{state.value}</p>
      <section className="controls">
        <button onClick={increment}  >Increment</button>
        <button onClick={reset}>Reset</button>
        <button onclick={decrement}>Decrement</button>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
