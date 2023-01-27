import React, { useState, useEffect } from "react";
import Search from "../common/Search";
import CompanyCard from "./CompanyCard";
import { Link } from "react-router-dom";
import JoblyApi from "../api/api";
import "./Company.css";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCompanies = () => {
      filter();
      setIsLoading(false);
    };

    getCompanies();
  }, []);

  async function filter(term) {
    let companies = await JoblyApi.getAllCompanies(term);
    setCompanies(companies);
  }

  if (isLoading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }
  return (
    <main className="CompanyList">
      <Search filter={filter} />

      {companies.length === 0 ? (
        <p>No Results</p>
      ) : (
        <div className="CompanyList-list">
          {companies.map(company => {
            return (
              <Link
                className="card-link"
                key={company.handle}
                to={`/companies/${company.handle}`}
              >
                <CompanyCard
                  name={company.name}
                  description={company.description}
                  logo={company.logoUrl}
                />
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default CompanyList;
