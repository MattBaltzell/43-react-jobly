import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <h1>Jobly</h1>
      <p>All the jobs in one convenient place</p>
      <h2>Welcome back, "username"</h2>
      <p>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </p>
      <div>
        <p>Home page content</p>
      </div>
    </main>
  );
};

export default Home;
