import React, { useState, useContext } from "react";
import useFormFields from "../hooks/useFormFields";
import UserContext from "../auth/UserContext";
import "../auth/Form.css";

const UpdateProfileForm = ({ update }) => {
  const { username, firstName, lastName, email } = useContext(UserContext);

  const [submitMsg, setSubmitMsg] = useState("");

  const { formData, handleChange } = useFormFields({
    username,
    firstName,
    lastName,
    email
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const { message } = await update(formData);
    setSubmitMsg(message);
  };

  return (
    <main className="Form">
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
        {!submitMsg ? (
          <></>
        ) : (
          <div
            className={`status-msg ${
              submitMsg === "Updated successfully." ? "success" : "error"
            }`}
          >
            {submitMsg}
          </div>
        )}
        <button type="submit">Save Changes</button>
      </form>
    </main>
  );
};

export default UpdateProfileForm;
