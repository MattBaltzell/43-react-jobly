import React, { useContext } from "react";

import UserContext from "../auth/UserContext";

const JobCard = ({ job, apply }) => {
  const { applications, username } = useContext(UserContext);

  const handleClick = () => {
    const id = job.id;
    apply({ username, id });
  };

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
      <button
        onClick={handleClick}
        disabled={applications.some(app => app === job.id)}
      >
        Apply
      </button>
    </div>
  );
};

export default JobCard;
