import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Alert from "./components/layout/Alert";
import Repos from "./components/repos/Repos";
import Orgs from "./components/organisation/Orgs";
import Search from "./components/layout/Search";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

function App() {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Search />
            <Alert />
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
      </AlertState>
    </GithubState>
  );
}

export default App;
