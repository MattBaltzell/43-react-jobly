import React, { useState } from "react";

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
  );
};

export default Search;
