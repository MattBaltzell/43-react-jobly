import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";

const Home = () => {
  const user = useContext(UserContext);

  return (
    <main>
      <h1>Jobly</h1>
      <p>All the jobs in one convenient place</p>

      {!user ? (
        <p>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </p>
      ) : (
        <h2>Welcome back, {user.firstName}!</h2>
      )}
    </main>
  );
};

export default Home;
