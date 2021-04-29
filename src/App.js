import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Repos from "./components/repos/Repos";
import Orgs from "./components/organisation/Orgs";
import Search from "./components/layout/Search";
import GithubState from "./context/github/GithubState";
import "./App.css";

function App() {
  // const githubContext = useContext(GithubContext);

  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Search />
          <Profile />
          <div className='container'>
            <div className='search__results'>
              <Switch>
                <Route exact path='/repos' component={Repos} />
                <Route exact path='/orgs' component={Orgs} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
