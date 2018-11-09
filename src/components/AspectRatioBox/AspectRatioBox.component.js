import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './AspectRatioBox.scss'; // build-ignore-line

const AspectRatioBox = ({ ratio, children, className }) => {
  const componentClassNames = classNames(
    'AspectRatioBox',
    `AspectRatioBox--${ratio}`,
    className,
  );

  return <div className={componentClassNames}>{children}</div>;
};

AspectRatioBox.propTypes = {
  ratio: PropTypes.oneOf(['16x9', '4x3', '5x2']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  className: PropTypes.string,
};

AspectRatioBox.defaultProps = {
  className: undefined,
};

export default AspectRatioBox;
