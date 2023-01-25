import React from "react";
import Search from "./Search";
import CompanyCard from "./CompanyCard";
import { Link } from "react-router-dom";

const CompanyList = ({ companies }) => {
  return (
    <main className="CompanyList">
      <Search type="company" />
      <div className="CompanyList-list">
        {companies.map(company => (
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
        ))}
      </div>
    </main>
  );
};

export default CompanyList;
