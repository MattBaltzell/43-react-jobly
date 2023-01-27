import React, { useContext } from "react";
import useFormFields from "../hooks/useFormFields";
import UserContext from "../auth/UserContext";

const UpdateProfileForm = ({ update }) => {
  const { username, firstName, lastName, email } = useContext(UserContext);

  const { formData, handleChange } = useFormFields({
    username,
    firstName,
    lastName,
    email
  });

  const handleSubmit = e => {
    e.preventDefault();
    update(formData);
  };

  return (
    <main>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          disabled
          id="username"
          name="username"
          type="text"
          placeholder="actual username"
          value={formData.username}
        />

        <label htmlFor="firstName">First name</label>
        <input
          onChange={handleChange}
          id="firstName"
          name="firstName"
          type="text"
          placeholder="actual first name"
          value={formData.firstName}
        />
        <label htmlFor="lastName">Last name</label>
        <input
          onChange={handleChange}
          id="lastName"
          name="lastName"
          type="text"
          placeholder="actual last name"
          value={formData.lastName}
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          id="email"
          name="email"
          type="email"
          placeholder="actual email"
          value={formData.email}
        />
        <button type="submit">Save Changes</button>
      </form>
    </main>
  );
};

export default UpdateProfileForm;
