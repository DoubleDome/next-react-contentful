import React from 'react';
import PropTypes from 'prop-types';
import './OffersModuleViewAllButton.scss'; // build-ignore-line

const OffersModuleViewAllButton = ({ href, label }) => (
  <a className="OffersModuleViewAllButton" href={href}>
    {label}
  </a>
);

OffersModuleViewAllButton.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default OffersModuleViewAllButton;
