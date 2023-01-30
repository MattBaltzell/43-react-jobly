import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import UserContext from "../auth/UserContext";

const PrivateRoute = ({ exact, path, children }) => {
  const currUser = useContext(UserContext);

  if (!currUser) {
    return <Redirect to="/" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
};

export default PrivateRoute;
