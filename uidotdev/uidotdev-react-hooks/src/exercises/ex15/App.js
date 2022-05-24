import React from "react";

const App = () => {
  const [count, setCount] = React.useState(0);
  const ref = React.useState({ current: null })[0];

  const inc = () => {
    stop();
    ref.current = setInterval(() => {
      setCount(count => count + 1);
    }, 100);
  };

  const dec = () => {
    stop();
    ref.current = setInterval(() => {
      setCount(count => count - 1);
    }, 100);
  };

  const stop = () => clearInterval(ref.current);

  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>+</button>
      <button onClick={stop}>stop</button>
      <button onClick={dec}>-</button>
    </div>
  );
};

export default App;
