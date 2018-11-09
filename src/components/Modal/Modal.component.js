import PropTypes from 'prop-types';
import React from 'react';
import { Portal } from 'react-portal';

import { document } from '../../utils/browser';
import './Modal.scss'; // build-ignore-line

class Modal extends React.PureComponent {
  static propTypes = {
    open: PropTypes.bool,
    containerSelector: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    open: true,
    containerSelector: '#root > div',
  };

  render() {
    const { open, containerSelector, children } = this.props;
    const container = document
      ? document.querySelector(containerSelector)
      : undefined;

    return (
      open && (
        <Portal node={container}>
          <div className="Modal">{children}</div>
        </Portal>
      )
    );
  }
}

export default Modal;
