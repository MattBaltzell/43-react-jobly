import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Routes from "./Routes";
import JoblyApi from "./api";
import UserContext from "./UserContext";
import jwt from "jsonwebtoken";

function App() {
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterTerm, setFilterTerm] = useState(undefined);
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getCompanies = async () => {
      const companies = await JoblyApi.getAllCompanies(filterTerm);
      setCompanies(companies);
      setIsLoading(false);
    };
    const getJobs = async () => {
      const jobs = await JoblyApi.getAllJobs(filterTerm);
      setJobs(jobs);
      setIsLoading(false);
    };
    getCompanies();
    getJobs();
  }, [filterTerm]);

  const filter = term => {
    setFilterTerm(term);
  };

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

  if (isLoading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <div className="App">
      <UserContext.Provider value={currUser}>
        <NavBar logout={logout} />
        <Routes
          companies={companies}
          jobs={jobs}
          filter={filter}
          login={login}
          signup={signup}
        />
      </UserContext.Provider>
    </div>
  );
}

export default App;
