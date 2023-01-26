import React from "react";
import Search from "./Search";
import CompanyCard from "./CompanyCard";
import { Link } from "react-router-dom";

const CompanyList = ({ companies, filter }) => {
  return (
    <main className="CompanyList">
      <Search type="company" filter={filter} />

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
