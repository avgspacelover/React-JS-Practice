import React from "react";

const App = () => {
  const [count, setCount] = React.useState(0);
  const ref = React.useState({ current: null })[0];

  // ref = React.useref(null)

  const stop = () => clearInterval(ref.current);

  React.useEffect(() => {
    ref.current = setInterval(() => {
      setCount(count => count + 1);
    }, 100);

    return stop;
  }, []);

  return (
    <div>
      <span>{count}</span>
      <button onClick={stop}>stop</button>
    </div>
  );
};

export default App;
