import React from 'react';
import { useState } from 'react';
import Button from './components/Button/Button';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>My React App</h1>
      <Button isLoading={false} />
    </div>
  );
};

export default App;
