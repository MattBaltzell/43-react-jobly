import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import CompanyList from "./CompanyList";
import Company from "./CompanyDetail";
import JobList from "./JobList";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import JobCard from "./JobCard";

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
        <JobCard />
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
