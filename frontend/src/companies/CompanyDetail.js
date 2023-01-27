import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";

import JobCard from "../jobs/JobCard";

const CompanyDetail = ({ apply }) => {
  const { handle } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [company, setCompany] = useState({});

  useEffect(() => {
    const getCompany = async () => {
      const company = await JoblyApi.getCompany(handle);
      setCompany(company);
      setIsLoading(false);
    };

    getCompany();
  }, [handle]);

  if (isLoading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <main className="CompanyDetail">
      <h3>{company.name}</h3>
      <p>{company.description}</p>
      <div>
        {company.jobs.map(job => (
          <div key={job.id}>
            <JobCard job={job} apply={apply} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default CompanyDetail;
