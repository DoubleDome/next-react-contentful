import React from 'react';
import PropTypes from 'prop-types';

import PropertyFooterLink from '../PropertyFooterLink/PropertyFooterLink.component';
import './PropertyFooterLinksGroup.scss'; // build-ignore-line

const labelClassName = linksGroup =>
  linksGroup.mobileOnly
    ? 'PropertyFooterLinksGroup__label PropertyFooterLinksGroup__label--mobile-only'
    : 'PropertyFooterLinksGroup__label';

const PropertyFooterLinksGroup = ({ linksGroup }) => (
  <React.Fragment>
    <a href={linksGroup.url} className={labelClassName(linksGroup)}>
      {linksGroup.label}
    </a>
    {linksGroup.links.map((link, index) => (
      <PropertyFooterLink key={index} link={link} />
    ))}
  </React.Fragment>
);

PropertyFooterLinksGroup.propTypes = {
  linksGroup: PropTypes.shape({
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default PropertyFooterLinksGroup;
