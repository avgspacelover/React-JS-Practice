import React from "react";

const calculateFib = count => count * 10;
const calculatePrime = count => count * 100;

const NthFib = React.memo(({ count, onIncrement }) => {
  console.log("render NthFib");
  const fib = calculateFib(count);

  return (
    <div>
      <span>Fib: {fib}</span>
      <button onClick={onIncrement}>Add</button>
    </div>
  );
});

const NthPrime = React.memo(({ count, onIncrement }) => {
  console.log("render NthPrime");
  const prime = calculatePrime(count);

  return (
    <div>
      <span>Prime: {prime}</span>
      <button onClick={onIncrement}>Add</button>
    </div>
  );
});

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
