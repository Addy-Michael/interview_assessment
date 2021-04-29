import React, { Fragment } from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <Fragment>
      <a className='repo' href={repo.html_url}>
        {repo.name}
      </a>
    </Fragment>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
