import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";

import { login } from "./api";

const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "error":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case "success":
      return {
        ...state,
        loading: false,
        profile: action.payload
      };
    case "logout":
      return {
        ...state,
        profile: null
      };
    default:
      return state;
  }
};

const Login = ({ state: { loading, error }, dispatch, history }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleChange = name => ({ target: { value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        throw new Error("Unknow input name");
    }
  };

  const handleSuccess = profile => {
    dispatch({ type: "success", payload: profile });
    history.push("/dashboard");
  };

  const handleError = error => {
    dispatch({ type: "error", payload: error });
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch({ type: "start" });

    login(email, password)
      .then(handleSuccess)
      .catch(handleError);
  };

  return (
    <div>
      {loading && <p>Loading ...</p>}
      {error && <p>{error.message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          value={password}
          onChange={handleChange("password")}
          type="text"
          placeholder="password"
          autoFocus
        />
        <br />
        <input
          value={email}
          onChange={handleChange("email")}
          type="text"
          placeholder="email"
        />
        <br />
        <button type="submit">login</button>
      </form>
      <Link to="/">back</Link>
    </div>
  );
};

const Dashboard = ({ state: { profile }, logout }) => {
  if (!profile) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <p>Protected Page</p>
      <ul>
        <li>Username: {profile.username}</li>
        <li>Email: {profile.email}</li>
        <li>Password: {profile.password}</li>
      </ul>
      <Link to="/">back</Link>
      <br />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const Home = () => {
  return (
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </ul>
  );
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    profile: null,
    error: null,
    loading: false
  });

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/login"
        render={props => <Login {...props} state={state} dispatch={dispatch} />}
      />
      <Route
        path="/dashboard"
        render={props => (
          <Dashboard
            {...props}
            state={state}
            logout={() => dispatch({ type: "logout" })}
          />
        )}
      />
    </Switch>
  );
};

export default App;
