import React from "react";

const MAX_COUNT = 10;

const App = () => {
  const [input, setInput] = React.useState("");

  React.useEffect(() => {
    document.title = `Left ${MAX_COUNT - input.length}`;
  }, [input]);

  const handleChange = ({ target: { value } }) => {
    setInput(value);
  };

  const isValid = ({ length }) => length > 0 && length < MAX_COUNT;

  return (
    <div>
      <textarea value={input} onChange={handleChange} />
      <br />
      <button disabled={!isValid(input)}>SEND</button>
    </div>
  );
};

export default App;
