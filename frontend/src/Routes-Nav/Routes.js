import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import CompanyList from "../Company/CompanyList";
import CompanyDetail from "../Company/CompanyDetail";
import JobList from "../Job/JobList";
import LoginForm from "../User/LoginForm";
import SignupForm from "../User/SignupForm";
import UpdateProfileForm from "../User/UpdateProfileForm";

const Routes = ({ companies, jobs, filter, login, signup }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/companies">
        <CompanyList companies={companies} filter={filter} />
      </Route>
      <Route path="/companies/:handle">
        <CompanyDetail />
      </Route>
      <Route exact path="/jobs">
        <JobList jobs={jobs} filter={filter} />
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
