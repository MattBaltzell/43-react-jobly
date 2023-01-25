import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar-logo">
        <NavLink to="/">Jobly</NavLink>
      </div>
      <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </nav>
      <nav>
        <NavLink to="/companies">Companies</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
