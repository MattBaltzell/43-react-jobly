import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Routes from "./Routes";
import JoblyApi from "./api";

function App() {
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterTerm, setFilterTerm] = useState(undefined);

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

  if (isLoading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <div className="App">
      <NavBar />
      <Routes companies={companies} jobs={jobs} filter={filter} />
    </div>
  );
}

export default App;
