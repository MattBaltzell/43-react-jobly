import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="JobCard card">
      <div>
        <div>
          <h3>{job.title}</h3>
          {job.companyName && <p>{job.companyName}</p>}
        </div>
        <div>
          <small>Salary: {job.salary}</small>
        </div>
        <div>
          <small>Equity: {job.equity}</small>
        </div>
      </div>
      <button>Apply</button>
    </div>
  );
};

export default JobCard;
