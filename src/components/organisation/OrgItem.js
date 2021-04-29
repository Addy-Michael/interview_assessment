import React, { Fragment } from "react";
import PropTypes from "prop-types";

const OrgItem = ({ org }) => {
  const { login } = org;
  return (
    <Fragment>
      <div className='orgs orgs-num'>{login}</div>
    </Fragment>
  );
};

OrgItem.propTypes = {
  org: PropTypes.object.isRequired,
};

export default OrgItem;
