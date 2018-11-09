import PropTypes from 'prop-types';
import React from 'react';
import './StatusIcon.scss'; // build-ignore-line

class StatusIcon extends React.PureComponent {
  static displayName = 'StatusIcon';

  static propTypes = {
    color: PropTypes.string,
  };

  static defaultProps = {
    color: 'red',
  };

  render() {
    const { color } = this.props;
    return (
      <div
        className="StatusIcon"
        style={{ backgroundColor: color, borderColor: color }}
      />
    );
  }
}

export default StatusIcon;
