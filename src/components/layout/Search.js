import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { getUser, getRepos, result, clearSearch, getOrgs } = githubContext;
  const { setAlert } = alertContext;

  const [username, setUsername] = useState("");

  const onChange = (e) => {
    setUsername(e.target.value);
  };

  const onClick = () => {
    if (username !== "") {
      getUser(username.trim());
      getRepos(username.trim());
      getOrgs(username.trim());
      setUsername("");
    } else {
      setAlert("Please enter all fields");
    }
  };

  return (
    <div className='container'>
      <input
        type='text'
        className='search__input'
        placeholder='Enter name to search.......'
        value={username}
        onChange={onChange}
      />
      <button type='submit' className='search__submit' onClick={onClick}>
        Search
      </button>

      {result && (
        <button type='submit' className='search__clear' onClick={clearSearch}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
