import React from "react";
import Search from "./Search";
import CompanyCard from "./CompanyCard";
import { Link } from "react-router-dom";

const CompanyList = () => {
  return (
    <main className="CompanyList">
      <Search />
      <div className="CompanyList-list">
        <Link to="/companies">
          <CompanyCard />
        </Link>
        <Link to="/companies">
          <CompanyCard />
        </Link>
        <Link to="/companies">
          <CompanyCard />
        </Link>
      </div>
    </main>
  );
};

export default CompanyList;
