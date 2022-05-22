import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";

import { login } from "./api";

const Login = ({ setProfile, history }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

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
    setProfile(profile);
    setLoading(false);
    history.push("/dashboard");
  };

  const handleFailure = error => {
    setError(error);
    setLoading(false);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    login(email, password)
      .then(handleSuccess)
      .catch(handleFailure);
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

const Dashboard = ({ profile, logout }) => {
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
  const [profile, setProfile] = React.useState(null);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/login"
        render={props => <Login {...props} setProfile={setProfile} />}
      />
      <Route
        path="/dashboard"
        render={props => (
          <Dashboard
            {...props}
            profile={profile}
            logout={() => setProfile(null)}
          />
        )}
      />
    </Switch>
  );
};

export default App;
