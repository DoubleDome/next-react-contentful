import React from 'react';
import { mount } from 'enzyme';

import RoomOverviewCardHeader from './RoomOverviewCardHeader.component';

const defaultProps = {
  title: 'test title',
  image: {
    url: '/1.jpg',
    alt: 'Lorem ipsum',
  },
  action: {
    label: 'Room Details',
    url: '/',
  },
};

describe('RoomOverviewCardCollectionSection', () => {
  test('RoomOverviewCardHeader renders image with valid alt attribute', () => {
    const mounted = mount(<RoomOverviewCardHeader {...defaultProps} />);
    const image = mounted.find('img');
    expect(image.props().alt).toEqual(defaultProps.image.alt);
  });

  test('RoomOverviewCardHeader renders a single cta with valid url and label', () => {
    const mounted = mount(<RoomOverviewCardHeader {...defaultProps} />);
    const cta = mounted.find('a');
    expect(cta.props().href).toEqual(defaultProps.action.url);
    expect(cta.text()).toEqual(defaultProps.action.label);
  });
});
