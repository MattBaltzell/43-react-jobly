import React from "react";
import Search from "./Search";
import JobCard from "./JobCard";

const JobList = ({ jobs, filter }) => {
  return (
    <main className="JobList">
      <Search type="job" filter={filter} />

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
