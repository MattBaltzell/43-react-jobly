import React from "react";
import Search from "./Search";
import JobCard from "./JobCard";

const JobList = () => {
  return (
    <main>
      <Search />
      <JobCard />
      <JobCard />
      <JobCard />
    </main>
  );
};

export default JobList;
