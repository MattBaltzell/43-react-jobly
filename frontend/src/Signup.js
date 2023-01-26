import React from "react";
import SignupForm from "./SignupForm";

const Signup = ({ signup }) => {
  return (
    <main>
      <h1>Sign Up</h1>
      <SignupForm signup={signup} />
    </main>
  );
};

export default Signup;
