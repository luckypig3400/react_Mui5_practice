// Page2.js
import React from 'react';
import { useCounter } from '../GlobalVariablesContext';

function Page2() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h2>Page 2</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Page2;
