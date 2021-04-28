// import React, { useContext, Fragment } from "react";
import Profile from "./components/profile/Profile";
import Repos from "./components/repos/Repos";
import Orgs from "./components/organisation/Orgs";
import Search from "./components/layout/Search";
import GithubState from "./context/github/GithubState";
import GithubContext from "./context/github/githubContext";
import "./App.css";

function App() {
  // const githubContext = useContext(GithubContext);

  return (
    <GithubState>
      <div className='App'>
        <Search />
        <Profile />
        <div className='container'>
          <div className='search__results'>
            <Repos />
            <Orgs />
          </div>
        </div>
      </div>
    </GithubState>
  );
}

export default App;
