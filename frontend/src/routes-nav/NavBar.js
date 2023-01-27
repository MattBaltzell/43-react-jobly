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
      <nav>
        <div className="NavBar-logo">
          <NavLink to="/">Jobly</NavLink>
        </div>

        <ul className="NavBar-links">
          {!user ? (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Signup</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/companies">Companies</NavLink>
              </li>
              <li>
                <NavLink to="/jobs">Jobs</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li>
                <button onClick={handleLogout} className="logout-btn">
                  Log out {user.username}
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
