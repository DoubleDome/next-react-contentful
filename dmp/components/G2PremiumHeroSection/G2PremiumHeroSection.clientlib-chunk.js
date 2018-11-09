import React from 'react';
import { render } from 'react-dom';

import mapWindowToProps from '../../utils/mapWindowToProps';
import G2PremiumHeroSection from './G2PremiumHeroSection.component'

const nodes = Array.prototype.slice.call(
  document.querySelectorAll("[data-component='G2PremiumHeroSection']"),
);

nodes.map(node => {
  const id = node.getAttribute('data-component-id');
  const props = mapWindowToProps({ id });
  if (props) {
    render(<G2PremiumHeroSection {...props} />, node);
  } else {
    console.warn('component props not available');
  }
});
