import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./NavBar.css";
import UserContext from "../auth/UserContext";

const NavBar = ({ logout }) => {
  const user = useContext(UserContext);
  const history = useHistory();

  const handleLogout = async () => {
    await logout();
    history.push("/");
  };
  return (
    <div className="NavBar">
      <div className="NavBar-logo">
        <NavLink to="/">Jobly</NavLink>
      </div>

      {!user ? (
        <nav>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </nav>
      ) : (
        <nav>
          <NavLink to="/companies">Companies</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <button onClick={handleLogout} className="logout-btn">
            Log out {user.username}
          </button>
        </nav>
      )}
    </div>
  );
};

export default NavBar;
