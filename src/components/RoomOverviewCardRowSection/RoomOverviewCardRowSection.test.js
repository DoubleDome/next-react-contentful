import React from 'react';
import { mount } from 'enzyme';

import RoomOverviewCardRowSection from './RoomOverviewCardRowSection.component';

describe('RoomOverviewCardRowSection', () => {
  test('renders rooms', () => {
    const mounted = mount(
      <RoomOverviewCardRowSection
        rooms={[
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
            description:
              'Hello Goodnight button. Go to sleep with just one touch.',
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
        ]}
      />,
    );
    const items = mounted.find('.RoomOverviewCard');
    expect(items.length).toEqual(2);
  });
});
