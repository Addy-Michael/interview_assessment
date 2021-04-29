import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const Profile = () => {
  const githubContext = useContext(GithubContext);
  const { user, result } = githubContext;

  const {
    avatar_url,
    bio,
    followers,
    following,
    public_repos,
    html_url,
    name,
  } = user;

  return (
    <Fragment>
      {result && (
        <div className='profile'>
          <div className='container'>
            <div className='profile__content'>
              <div className='profile__image'>
                <img src={avatar_url} alt='profile_picture' className='img' />
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
                <div className='profile-result'>
                  <Link to='/repos' className='repo-view'>
                    View Repos
                  </Link>
                  <Link to='/orgs' className='orgs-view'>
                    View Organisation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Profile;
