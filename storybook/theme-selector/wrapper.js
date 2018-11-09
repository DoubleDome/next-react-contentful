/* eslint-disable */
import React from 'react';

export default class Wrapper extends React.Component {
  state = {
    theme: this.props.themes[0],
  };

  componentDidMount() {
    this.props.channel.emit('theme-selector:init', this.props.themes);
    this.props.channel.on('theme-selector:update', this.updateState);
  }

  componentWillUnmount() {
    this.props.channel.removeListener(
      'theme-selector:update',
      this.updateState,
    );
  }

  updateState = theme => {
    this.setState({ theme });
  };

  render() {
    const { themes, children, attr } = this.props;
    const { theme } = this.state;
    const attributeWithFallback = { [attr || 'className']: theme };

    return themes.find(t => t === theme) ? (
      <div {...attributeWithFallback}>{children}</div>
    ) : (
      children
    );
  }
}
