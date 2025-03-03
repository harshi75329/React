import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      
      <label>
        Step: 
        <input 
          type="number" 
          value={step} 
          onChange={(e) => setStep(Number(e.target.value))} 
          style={{ marginLeft: '10px', width: '50px' }}
        />
      </label>

      <br /><br />
      <button onClick={increment} style={{ margin: '5px' }}>Increment</button>
      <button onClick={decrement} style={{ margin: '5px' }}>Decrement</button>
      <button onClick={reset} style={{ margin: '5px' }}>Reset</button>
    </div>
  );
}

export default CounterApp;
