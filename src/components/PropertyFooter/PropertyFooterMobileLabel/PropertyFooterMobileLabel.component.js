import React from 'react';
import PropTypes from 'prop-types';
import './PropertyFooterMobileLabel.scss'; // build-ignore-line

const PropertyFooterMobileLabel = ({ label }) => (
  <div className="PropertyFooterMobileLabel">{label}</div>
);

PropertyFooterMobileLabel.propTypes = {
  label: PropTypes.string.isRequired,
};

export default PropertyFooterMobileLabel;
