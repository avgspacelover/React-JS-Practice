import React from "react";

const App = () => {
  console.log("render");
  const refName = React.useRef(null);
  const refEmail = React.useRef(null);
  const refPassword = React.useRef(null);

  const refs = {
    name: refName,
    email: refEmail,
    password: refPassword
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(refName.current.value);
    console.log(refEmail.current.value);
    console.log(refPassword.current.value);
  };

  const handleReset = () => {
    refName.current.value = "";
    refEmail.current.value = "";
    refPassword.current.value = "";
  };

  const handleFocus = name => () => {
    refs[name].current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="name" ref={refName} />
      <br />
      <input type="text" placeholder="email" ref={refEmail} />
      <br />
      <input type="text" placeholder="password" ref={refPassword} />
      <br />
      <button type="submit">submit</button>
      <button type="button" onClick={handleReset}>
        reset
      </button>
      <hr />
      <button type="button" onClick={handleFocus("name")}>
        name
      </button>
      <button type="button" onClick={handleFocus("email")}>
        email
      </button>
      <button type="button" onClick={handleFocus("password")}>
        password
      </button>
    </form>
  );
};

export default App;
