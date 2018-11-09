import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../../withTests';

import G2RoomOverviewCardCollectionSection from '../../../../dmp/components/G2RoomOverviewCardCollectionSection/G2RoomOverviewCardCollectionSection.component';

const defaultStoryProps = {
  rooms: [
    {
      title: 'Deluxe King Room',
      keyValues: ['520 Sqft', '1 King Bed', 'Corner View'],
      description:
        'Triple-sheeted, 300-thread-count bedding. A goodnight button to power down your room with the touch.',
      image: {
        url:
          'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/deluxe-room/aria-deluxe-king-bed-dusk.tif',
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
          'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/deluxe-room/aria-deluxe-accessible-bedroom.tif',
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
      title: 'Deluxe King Room',
      keyValues: ['520 Sqft', '1 King Bed', 'Corner View'],
      description:
        'Triple-sheeted, 300-thread-count bedding. A goodnight button to power down your room with the touch.',
      image: {
        url:
          'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/deluxe-room/aria-deluxe-king-bed-dusk.tif',
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

storiesOf('DMP/Components/G2RoomOverviewCardCollectionSection', module)
  .addDecorator(withTests('RoomOverviewCardCollectionSection'))
  .add('Two column', () => (
    <G2RoomOverviewCardCollectionSection {...defaultStoryProps} />
  ))
  .add('Three column', () => (
    <G2RoomOverviewCardCollectionSection
      {...defaultStoryProps}
      {...{ layout: 'three-column' }}
    />
  ));
