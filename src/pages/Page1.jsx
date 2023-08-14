// Page1.js
import React from 'react';
import { useCounter } from '../globalStates/CounterContext';

function Page1() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h2>Page 1</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Page1;
