import React from "react";
import Search from "./Search";
import JobCard from "./JobCard";

const JobList = ({ jobs }) => {
  return (
    <main className="JobList">
      <Search />
      <div className="JobList-list">
        {jobs.map(job => (
          <div key={job.id}>
            <JobCard job={job} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default JobList;
