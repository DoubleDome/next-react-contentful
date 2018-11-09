import React from 'react';
import PropTypes from 'prop-types';
import PropertiesGridRow from '../PropertiesGridRow/PropertiesGridRow.component';

const groupIntoRows = properties => {
  const localProperties = JSON.parse(JSON.stringify(properties));

  const grouped = [
    {
      key: 1,
      rowProperties: localProperties.splice(0, 7),
    },
    {
      key: 2,
      type: 'narrow',
      rowProperties: localProperties.splice(0, 6),
    },
    {
      key: 3,
      rowProperties: localProperties.splice(0, 7),
    },
    {
      key: 4,
      type: 'narrow',
      rowProperties: localProperties.splice(0, 6),
    },
  ];

  return grouped;
};

const rows = properties =>
  groupIntoRows(properties).map(({ rowProperties, type, key }) => (
    <PropertiesGridRow properties={rowProperties} type={type} key={key} />
  ));

const PropertiesGrid = ({ properties }) => (
  <div className="PropertiesGrid">{rows(properties)}</div>
);

PropertiesGrid.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PropertiesGrid;
