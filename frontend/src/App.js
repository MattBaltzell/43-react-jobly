import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Routes from "./Routes";
import JoblyApi from "./api";

function App() {
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCompanies = async () => {
      const companies = await JoblyApi.getAllCompanies();
      setCompanies(companies);
      setIsLoading(false);
    };

    getCompanies();
  }, []);

  useEffect(() => {
    const getJobs = async () => {
      const jobs = await JoblyApi.getAllJobs();
      setJobs(jobs);
      setIsLoading(false);
    };

    getJobs();
  }, []);

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
      <Routes companies={companies} jobs={jobs} />
    </div>
  );
}

export default App;
