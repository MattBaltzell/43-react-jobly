import React, { useState } from "react";

const Search = ({ type }) => {
  let termName = type === "company" ? "name" : "title";

  const INITIAL_STATE = { [termName]: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    setFormData(INITIAL_STATE);
  };

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
