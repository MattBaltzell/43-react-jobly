import React from "react";
import LoginForm from "./LoginForm";

const Login = ({ login }) => {
  return (
    <main>
      <h1>Login</h1>
      <LoginForm login={login} />
    </main>
  );
};

export default Login;
