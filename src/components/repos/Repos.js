import React, { useContext } from "react";
import RepoItem from "./RepoItem";
import GithubContext from "../../context/github/githubContext";

const Repos = () => {
  const githubContext = useContext(GithubContext);
  const { repos } = githubContext;

  // return <h1>hello</h1>;

  return (
    <div className='repo__content'>
      {repos.map((repo, index) => (
        <RepoItem key={index} repo={repo} />
      ))}
    </div>
  );
};

export default Repos;
