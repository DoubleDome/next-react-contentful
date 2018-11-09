import PropTypes from 'prop-types';
import React from 'react';

const Right = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 16 16"
    style={{ enableBackground: 'new 0 0 16 16' }} // eslint-disable-line react/style-prop-object
    fill={color}
  >
    <path d="M13.9,7.5l-3.7-3.7l0.7-0.7L15.8,8l-4.9,4.9l-0.7-0.7l3.7-3.7H1.5v-1H13.9z" />
  </svg>
);

Right.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

Right.defaultProps = {
  color: 'currentColor',
  size: 64,
};

export default Right;
