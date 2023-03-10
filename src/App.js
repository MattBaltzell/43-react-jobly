import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./routes-nav/NavBar";
import Routes from "./routes-nav/Routes";
import JoblyApi from "./api/api";
import UserContext from "./auth/UserContext";
import jwt from "jsonwebtoken";

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("jobly-token"));
  const [userWasUpdated, setUserWasUpdated] = useState(false);

  useEffect(() => {
    const getCurrUser = async () => {
      if (token) {
        try {
          JoblyApi.token = token;
          let { username } = jwt.decode(token);
          const user = await JoblyApi.getCurrentUser(username);
          setCurrUser(user);
          localStorage.setItem("jobly-token", token);
        } catch (error) {
          console.error(error);
        }
      }
    };
    getCurrUser();

    setUserWasUpdated(false);
  }, [token, userWasUpdated]);

  const login = async ({ username, password }) => {
    try {
      const token = await JoblyApi.login({ username, password });
      setToken(token);
    } catch (error) {
      return { message: error };
    }
  };

  const signup = async ({ username, password, firstName, lastName, email }) => {
    try {
      const token = await JoblyApi.signup({
        username,
        password,
        firstName,
        lastName,
        email
      });
      setToken(token);
    } catch (error) {
      return { message: error };
    }
  };

  const logout = async () => {
    try {
      setToken(null);
      setCurrUser(null);
      JoblyApi.token = null;
      localStorage.setItem("jobly-token", "");
    } catch (error) {
      return { message: error };
    }
  };

  const updateProfile = async data => {
    try {
      await JoblyApi.updateUserProfile(data);
      setUserWasUpdated(true);
      return { message: "Updated successfully." };
    } catch (error) {
      return { message: error };
    }
  };

  const apply = async data => {
    try {
      await JoblyApi.apply(data);
      setUserWasUpdated(true);
    } catch (error) {
      return { message: error };
    }
  };

  return (
    <div className="App">
      <UserContext.Provider value={currUser}>
        <NavBar logout={logout} />
        <div className="container">
          <Routes
            login={login}
            signup={signup}
            update={updateProfile}
            apply={apply}
          />
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
