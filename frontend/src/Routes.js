import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";

const Routes = ({ companies, jobs }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/companies">
        <CompanyList companies={companies} />
      </Route>
      <Route path="/companies/:handle">
        <CompanyDetail />
      </Route>
      <Route exact path="/jobs">
        <JobList jobs={jobs} />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
};

export default Routes;
