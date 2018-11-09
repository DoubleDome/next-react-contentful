import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import './PropertiesGridRow.scss'; // build-ignore-line

const item = property => (
  <a
    title={property.title}
    className="PropertiesGridRow__item"
    key={property.key}
    href={property.url}
  >
    <LazyLoad height={34} offset={200}>
      <img
        className="PropertiesGridRow__image"
        src={property.image_url}
        alt={property.title}
      />
    </LazyLoad>
  </a>
);

const PropertiesGridRow = ({ properties }) => (
  <div className="PropertiesGridRow">
    {properties.map(property => item(property))}
  </div>
);

PropertiesGridRow.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PropertiesGridRow;
