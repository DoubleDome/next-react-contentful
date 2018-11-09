import React from 'react';
import { render } from 'react-dom';
import mapWindowToProps from '../../utils/mapWindowToProps';
import G2CopyrightFooter from './G2CopyrightFooter.component';

const nodes = Array.prototype.slice.call(
  document.querySelectorAll("[data-component='G2CopyrightFooter']"),
);
nodes.map(node => {
  const id = node.getAttribute('data-component-id');
  const props = mapWindowToProps({ id });
  if (props) {
    render(<G2CopyrightFooter {...props} />, node);
  } else {
    console.warn('component props not available'); // eslint-disable-line
  }
});
