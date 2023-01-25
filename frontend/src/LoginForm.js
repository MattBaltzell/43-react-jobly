import React from "react";

const LoginForm = () => {
  return (
    <form>
      <label>Username</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <button>Submit</button>
    </form>
  );
};

export default LoginForm;
