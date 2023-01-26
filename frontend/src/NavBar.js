import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import UserContext from "./UserContext";

const NavBar = () => {
  const user = useContext(UserContext);
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
          <button className="logout-btn">Log out {user.username}</button>
        </nav>
      )}
    </div>
  );
};

export default NavBar;
