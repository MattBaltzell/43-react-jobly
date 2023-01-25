import React from "react";

const CompanyCard = ({ name, description, logoUrl }) => {
  return (
    <div className="CompanyCard card">
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <img alt={`${name} Logo`} src={logoUrl} />
    </div>
  );
};

export default CompanyCard;
