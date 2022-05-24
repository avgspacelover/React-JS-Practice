import React from "react";

const calculateFib = count => count * 10;
const calculatePrime = count => count * 100;

const NthFib = React.memo(
  ({ count, onIncrement }) => {
    console.log("render NthFib");
    const fib = calculateFib(count);

    return (
      <div>
        <span>Fib: {fib}</span>
        <button onClick={onIncrement}>Add</button>
      </div>
    );
  },
  (prev, next) => prev.count === next.count
);

const NthPrime = React.memo(
  ({ count, onIncrement }) => {
    console.log("render NthPrime");
    const prime = calculatePrime(count);

    return (
      <div>
        <span>Prime: {prime}</span>
        <button onClick={onIncrement}>Add</button>
      </div>
    );
  },
  (prev, next) => prev.count === next.count
);

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

  return (
    <div>
      <div>
        <button onClick={handleAdd10}>Add 10</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <hr />
      <NthFib count={fibCount} onIncrement={() => setFibCount(c => c + 1)} />
      <hr />
      <NthPrime
        count={primeCount}
        onIncrement={() => setPrimeCount(c => c + 1)}
      />
    </div>
  );
};

export default App;
