// Page3.js
import React from 'react';
import { useGlobalVariables } from '../GlobalVariablesContext';
import { Box } from '@mui/material';

function Page3() {
  const {
    counter1,
    incrementCounter1,
    decrementCounter1,
    counter2,
    incrementCounter2,
    decrementCounter2,
    counter3,
    incrementCounter3,
    decrementCounter3,
  } = useGlobalVariables();

  return (
    <Box flex={55} p={2} height="100vh">
      <h2>Page 3</h2>
      <p>Counter 1: {counter1}</p>
      <button onClick={incrementCounter1}>Increment Counter 1</button>
      <button onClick={decrementCounter1}>Decrement Counter 1</button>

      <p>Counter 2: {counter2}</p>
      <button onClick={incrementCounter2}>Increment Counter 2</button>
      <button onClick={decrementCounter2}>Decrement Counter 2</button>

      <p>Counter 3: {counter3}</p>
      <button onClick={incrementCounter3}>Increment Counter 3</button>
      <button onClick={decrementCounter3}>Decrement Counter 3</button>
    </Box>
  );
}

export default Page3;