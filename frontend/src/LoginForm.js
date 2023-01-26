import React from "react";
import useFormFields from "./hooks/useFormFields";
import { useHistory } from "react-router-dom";

const LoginForm = ({ login }) => {
  const INITIAL_STATE = { username: "testuser", password: "password" };
  const { formData, setFormData, handleChange } = useFormFields(INITIAL_STATE);

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    login(formData);
    setFormData(INITIAL_STATE);
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        onChange={handleChange}
        value={formData.username}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={handleChange}
        value={formData.password}
      />
      <button>Submit</button>
    </form>
  );
};

export default LoginForm;
