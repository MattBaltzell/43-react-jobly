import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../home/Home";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import UpdateProfileForm from "../profile/UpdateProfileForm";
import PrivateRoute from "./PrivateRoute";

const Routes = ({ login, signup, update, apply }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <LoginForm login={login} />
      </Route>
      <Route path="/signup">
        <SignupForm signup={signup} />
      </Route>
      <PrivateRoute exact path="/companies">
        <CompanyList />
      </PrivateRoute>
      <PrivateRoute path="/companies/:handle">
        <CompanyDetail apply={apply} />
      </PrivateRoute>
      <PrivateRoute exact path="/jobs">
        <JobList apply={apply} />
      </PrivateRoute>
      <PrivateRoute path="/profile">
        <UpdateProfileForm update={update} />
      </PrivateRoute>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
