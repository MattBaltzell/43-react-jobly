import React from "react";
import useFormFields from "./hooks/useFormFields";
import { useHistory } from "react-router-dom";

const SignupForm = ({ signup }) => {
  const INITIAL_STATE = {
    username: "testuser",
    password: "password",
    firstName: "first1",
    lastName: "last1",
    email: "testuser1@test.com"
  };
  const { formData, setFormData, handleChange } = useFormFields(INITIAL_STATE);

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    signup(formData);
    setFormData(INITIAL_STATE);
    history.push("/");
  };

  return (
    <main>
      <h1>Sign Up</h1>
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
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={handleChange}
          value={formData.firstName}
        />
        <label htmlFor="lastName">Last name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={handleChange}
          value={formData.lastName}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={formData.email}
        />
        <button>Submit</button>
      </form>
    </main>
  );
};

export default SignupForm;
