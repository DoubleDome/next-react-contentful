import React from 'react';
import { mount } from 'enzyme';

import RoomOverviewCardCollectionSection from './RoomOverviewCardCollectionSection.component';

const defaultProps = {
  rooms: [
    {
      title: 'Deluxe King Room',
      keyValues: ['520 Sqft', '1 King Bed', 'Corner View'],
      description:
        'Triple-sheeted, 300-thread-count bedding. A goodnight button to power down your room with the touch.',
      image: {
        url:
          'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/deluxe-room/aria-deluxe-king-bed-dusk.tif',
        alt: 'Lorem ipsum',
      },
      primaryAction: {
        label: 'Check Rates',
        url: '/',
      },
      secondaryAction: {
        label: 'Room Details',
        url: '/',
      },
      tertiaryAction: {
        label: 'Compare',
        url: '/',
      },
    },
    {
      title: 'Corner Suite Strip View',
      keyValues: ['920 Sqft', '1 King Bed', 'Max Guests 4'],
      description: 'Hello Goodnight button. Go to sleep with just one touch.',
      image: {
        url:
          'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/corner-suite/aria-hotel-corner-bed-tablet.tif',
        alt: 'Lorem ipsum',
      },
      primaryAction: {
        label: 'Check Rates',
        url: '/',
      },
      secondaryAction: {
        label: 'Room Details',
        url: '/',
      },
      tertiaryAction: {
        label: 'Compare',
        url: '/',
      },
    },
  ],
};

describe('RoomOverviewCardCollectionSection', () => {
  test('renders whole collection at once.', () => {
    const mounted = mount(
      <RoomOverviewCardCollectionSection {...defaultProps} />,
    );
    const items = mounted.find('.RoomOverviewCardCollectionSection__item');
    expect(items.length).toEqual(defaultProps.rooms.length);
  });
});

describe('RoomOverviewCardCollectionSection', () => {
  test('supports two column layout', () => {
    const mounted = mount(
      <RoomOverviewCardCollectionSection layout="two-column" />,
    );
    const root = mounted.find('.RoomOverviewCardCollectionSection');
    expect(
      root.hasClass('RoomOverviewCardCollectionSection--layout--two-column'),
    ).toEqual(true);
  });
});

describe('RoomOverviewCardCollectionSection', () => {
  test('supports three column layout', () => {
    const mounted = mount(
      <RoomOverviewCardCollectionSection layout="three-column" />,
    );
    const root = mounted.find('.RoomOverviewCardCollectionSection');
    expect(
      root.hasClass('RoomOverviewCardCollectionSection--layout--three-column'),
    ).toEqual(true);
  });
});
