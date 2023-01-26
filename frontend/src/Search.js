import React, { useState, useEffect } from "react";

const Search = ({ type, filter }) => {
  let termName = type === "company" ? "name" : "title";

  const INITIAL_STATE = { [termName]: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
    filter(formData[termName]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    filter(formData[termName]);
    setFormData(INITIAL_STATE);
  };

  // Reset filter when component unmounts
  useEffect(() => {
    return () => {
      filter("");
    };
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name={termName}
        type="text"
        placeholder="Enter search term.."
        value={formData[termName]}
      />
      <button>Submit</button>
    </form>
  );
};

export default Search;
