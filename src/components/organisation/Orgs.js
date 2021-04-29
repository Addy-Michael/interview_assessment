import React, { useContext } from "react";
import OrgItem from "./OrgItem";
import GithubContext from "../../context/github/githubContext";

const Orgs = () => {
  const githubContext = useContext(GithubContext);
  const { orgs, result } = githubContext;

  return (
    <div className='orgs__content'>
      {orgs.length > 0
        ? orgs.map((org, index) => <OrgItem key={index} org={org} />)
        : result && <h1 className='org_error'>Not in any organisation</h1>}
    </div>
  );
};

export default Orgs;
