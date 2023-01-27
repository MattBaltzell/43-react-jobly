import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import UpdateProfileForm from "../profile/UpdateProfileForm";

const Routes = ({ login, signup }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/companies">
        <CompanyList />
      </Route>
      <Route path="/companies/:handle">
        <CompanyDetail />
      </Route>
      <Route exact path="/jobs">
        <JobList />
      </Route>
      <Route path="/login">
        <LoginForm login={login} />
      </Route>
      <Route path="/signup">
        <SignupForm signup={signup} />
      </Route>
      <Route path="/profile">
        <UpdateProfileForm />
      </Route>
    </Switch>
  );
};

export default Routes;
