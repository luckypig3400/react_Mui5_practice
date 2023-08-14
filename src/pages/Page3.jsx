// Page3.js
import React from 'react';
import { useCounter } from '../GlobalVariablesContext';

function Page3() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h2>Page 3</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Page3;
