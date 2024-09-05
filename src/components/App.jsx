import '../scss/App.scss';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const sum = (a) => {
    return a + 1;
  };
  const rest = (a) => {
    return a - 1;
  };
  const handleSum = () => {
    console.log('click');
    setCounter(sum(counter));
  };
  const handleRest = () => {
    setCounter(rest(counter));
  };
  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={handleSum}>+</button>
      <button onClick={handleRest}>-</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

export default App;
