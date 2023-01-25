import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import CompanyList from "./CompanyList";
import Company from "./Company";
import JobList from "./JobList";
import Job from "./Job";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/companies">
        <CompanyList />
      </Route>
      <Route path="/companies/:company">
        <Company />
      </Route>
      <Route path="/jobs">
        <JobList />
      </Route>
      <Route path="/jobs/:job">
        <Job />
      </Route>
      <Route path="/login">
        <h1>Login</h1>
      </Route>
      <Route path="/signup">
        <h1>Sign up Form</h1>
      </Route>
      <Route path="/profile">
        <h1>Profile</h1>
      </Route>
    </Switch>
  );
};

export default Routes;
