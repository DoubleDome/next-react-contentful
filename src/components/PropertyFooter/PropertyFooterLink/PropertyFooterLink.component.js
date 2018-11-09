import React from 'react';
import PropTypes from 'prop-types';

import './PropertyFooterLink.scss'; // build-ignore-line

const PropertyFooterLink = ({ link }) => (
  <a className="PropertyFooterLink" href={link.url}>
    {link.label}
  </a>
);

PropertyFooterLink.propTypes = {
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default PropertyFooterLink;
