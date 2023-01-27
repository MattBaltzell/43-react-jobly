import React, { useState, useEffect } from "react";
import Search from "../common/Search";
import JobCard from "./JobCard";
import JoblyApi from "../api/api";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getJobs = () => {
      filter();
      setIsLoading(false);
    };
    getJobs();
  }, []);

  async function filter(term) {
    const jobs = await JoblyApi.getAllJobs(term);
    setJobs(jobs);
  }

  if (isLoading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <main className="JobList">
      <Search filter={filter} />

      {jobs.length === 0 ? (
        <p>No Results</p>
      ) : (
        <div className="JobList-list">
          {jobs.map(job => (
            <div key={job.id}>
              <JobCard job={job} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default JobList;
