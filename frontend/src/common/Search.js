import React, { useState } from "react";
import "./Search.css";

const Search = ({ filter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = e => {
    setSearchTerm(e.target.value);
    filter(searchTerm.trim() || undefined);
  };

  const handleSubmit = e => {
    e.preventDefault();
    filter(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  };

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="searchTerm"
          type="text"
          placeholder="Enter search term.."
          value={searchTerm}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Search;
