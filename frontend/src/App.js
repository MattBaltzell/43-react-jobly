import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Routes from "./Routes";
import JoblyApi from "./api";
import UserContext from "./UserContext";

function App() {
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterTerm, setFilterTerm] = useState(undefined);
  const [currUser, setCurrUser] = useState(null);

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

  const login = async ({ username, password }) => {
    const user = await JoblyApi.login(username, password);
    setCurrUser(user);
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
        <NavBar />
        <Routes
          companies={companies}
          jobs={jobs}
          filter={filter}
          login={login}
        />
      </UserContext.Provider>
    </div>
  );
}

export default App;
