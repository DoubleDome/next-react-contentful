import React from 'react';
import { render } from 'react-dom';
import mapWindowToProps from '../../utils/mapWindowToProps';
import G2RoomOverviewCardCollectionSection from './G2RoomOverviewCardCollectionSection.component';

const nodes = Array.prototype.slice.call(
  document.querySelectorAll(
    "[data-component='G2RoomOverviewCardCollectionSection']",
  ),
);
nodes.map(node => {
  const id = node.getAttribute('data-component-id');
  const props = mapWindowToProps({ id });
  if (props) {
    render(<G2RoomOverviewCardCollectionSection {...props} />, node);
  } else {
    console.warn('component props not available'); // eslint-disable-line
  }
});
