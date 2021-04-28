import React, { useContext } from "react";
import RepoItem from "./RepoItem";
import GithubContext from "../../context/github/githubContext";

const Repos = () => {
  const githubContext = useContext(GithubContext);
  const { repos } = githubContext;

  return (
    <div className='repo__content'>
      {repos.map((repo) => (
        <RepoItem repo={repo} />
      ))}
    </div>
  );
};

export default Repos;
