import React from "react";
import useFormFields from "../hooks/useFormFields";
import { useHistory } from "react-router-dom";
import "./Form.css";

const LoginForm = ({ login }) => {
  const INITIAL_STATE = { username: "", password: "" };
  const { formData, setFormData, handleChange } = useFormFields(INITIAL_STATE);

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    login(formData);
    setFormData(INITIAL_STATE);
    history.push("/");
  };

  return (
    <main className="Form">
      <h1>Login</h1>
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
    </main>
  );
};

export default LoginForm;
