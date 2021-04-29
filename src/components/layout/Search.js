import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { getUser, getRepos, result, clearSearch, getOrgs } = githubContext;

  const [username, setUsername] = useState("");

  const onChange = (e) => {
    setUsername(e.target.value);
  };

  const onClick = () => {
    getUser(username.trim());
    getRepos(username.trim());
    getOrgs(username.trim());
    setUsername("");
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
