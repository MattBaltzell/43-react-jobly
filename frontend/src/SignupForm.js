import React from "react";

const SignupForm = () => {
  return (
    <form>
      <label>Username</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <label>First name</label>
      <input type="text" />
      <label>Last name</label>
      <input type="text" />
      <label>Email</label>
      <input type="email" />
      <button>Submit</button>
    </form>
  );
};

export default SignupForm;
