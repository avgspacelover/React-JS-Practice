import React, { useEffect } from "react";

const ClickGame = () => {
  const [timeLeft, setTimeLeft] = React.useState(10);
  const [count, setCount] = React.useState(0);

  const interval = React.useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    return () => clearInterval(interval.current);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(interval.current);
    }
  }, [timeLeft]);

  return (
    <div>
      <div>Time left: {timeLeft}</div>
      <div>You clicked {count} times</div>
      {timeLeft > 0 && <button onClick={() => setCount(c => c + 1)}>+</button>}
    </div>
  );
};

const App = () => {
  const [start, setStart] = React.useState(false);

  return (
    <div>
      <button onClick={() => setStart(true)}>start</button>
      <button onClick={() => setStart(false)}>end</button>
      {start && <ClickGame />}
    </div>
  );
};

export default App;
