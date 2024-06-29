import React, { useState } from 'react';
import './Counter.styl';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
