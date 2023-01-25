import React from "react";

const JobCard = () => {
  return (
    <div className="JobCard card">
      <div>
        <div>
          <h3>Job Title</h3>
          <p>company name</p>
        </div>
        <div>
          <small>Salary: $$$$</small>
        </div>
        <div>
          <small>Equity: ###</small>
        </div>
      </div>
      <button>Apply</button>
    </div>
  );
};

export default JobCard;
