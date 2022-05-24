import React from "react";

const calculateFib = count => {
  console.log("calculate Fib");
  return count * 10;
};
const calculatePrime = count => {
  console.log("calculate Prime");
  return count * 100;
};

const NthFib = ({ count, onIncrement }) => {
  const fib = React.useMemo(() => calculateFib(count), [count]);

  return (
    <div>
      <span>Fib: {fib}</span>
      <button onClick={onIncrement}>Add</button>
    </div>
  );
};

const NthPrime = ({ count, onIncrement }) => {
  const prime = React.useMemo(() => calculatePrime(count), [count]);

  return (
    <div>
      <span>Prime: {prime}</span>
      <button onClick={onIncrement}>Add</button>
    </div>
  );
};

const App = () => {
  const [fibCount, setFibCount] = React.useState(1);
  const [primeCount, setPrimeCount] = React.useState(1);

  const handleReset = () => {
    setFibCount(1);
    setPrimeCount(1);
  };

  const handleAdd10 = () => {
    setFibCount(c => c + 10);
    setPrimeCount(c => c + 10);
  };

  const handleIncFib = React.useCallback(() => setFibCount(c => c + 1), []);
  const handleIncPrime = React.useCallback(() => setPrimeCount(c => c + 1), []);

  return (
    <div>
      <div>
        <button onClick={handleAdd10}>Add 10</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <hr />
      <NthFib count={fibCount} onIncrement={handleIncFib} />
      <hr />
      <NthPrime count={primeCount} onIncrement={handleIncPrime} />
    </div>
  );
};

export default App;
