import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./routes-nav/NavBar";
import Routes from "./routes-nav/Routes";
import JoblyApi from "./api/api";
import UserContext from "./auth/UserContext";
import jwt from "jsonwebtoken";

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getCurrUser = async () => {
      if (token) {
        try {
          JoblyApi.token = token;
          let { username } = jwt.decode(token);
          const user = await JoblyApi.getCurrentUser(username);
          setCurrUser(user);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getCurrUser();
  }, [token]);

  const login = async ({ username, password }) => {
    const token = await JoblyApi.login(username, password);
    setToken(token);
  };

  const signup = async ({ username, password, firstName, lastName, email }) => {
    const token = await JoblyApi.signup(
      username,
      password,
      firstName,
      lastName,
      email
    );
    setToken(token);
  };

  const logout = async () => {
    setToken(null);
    setCurrUser(null);
    JoblyApi.token = null;
  };

  return (
    <div className="App">
      <UserContext.Provider value={currUser}>
        <NavBar logout={logout} />
        <Routes login={login} signup={signup} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
