import React, { useContext, Fragment } from "react";
import GithubContext from "../../context/github/githubContext";
import Kwaw from "../KWAW.JPG";

const Profile = () => {
  const githubContext = useContext(GithubContext);
  const { user, result } = githubContext;
  console.log(user);
  const {
    avatar_url,
    bio,
    followers,
    following,
    public_repos,
    html_url,
    name,
  } = user;

  console.log(avatar_url);

  return (
    <Fragment>
      {result && (
        <div className='profile'>
          <div className='container'>
            <div className='profile__content'>
              <div className='profile__image'>
                <img src={user.avatar_url} className='img' />
              </div>
              <div className='profile__details'>
                <h1 className='name l-heading'>{name}</h1>
                <div className='detail'>
                  <p className='following'>
                    Following: <span>{following}</span>
                  </p>
                  <p className='followers'>
                    Followers: <span>{followers}</span>
                  </p>
                  <p className='repos'>
                    Public Repos: <span>{public_repos}</span>
                  </p>
                  <a className='git-profile' href={html_url} target='_blank'>
                    Visit Profile
                  </a>
                </div>
                <p className='bio'>{bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Profile;
