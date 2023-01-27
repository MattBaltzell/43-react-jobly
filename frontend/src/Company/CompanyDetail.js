import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../Api/api";

import JobCard from "../Job/JobCard";

const CompanyDetail = () => {
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
            <JobCard job={job} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default CompanyDetail;
