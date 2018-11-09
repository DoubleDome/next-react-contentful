import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../withTests';

import RoomOverviewCardCollectionSection from '../../../src/components/RoomOverviewCardCollectionSection/RoomOverviewCardCollectionSection.component';

const defaultStoryProps = {
  rooms: [
    {
      title: 'Deluxe King Room',
      keyValues: ['520 Sqft', '1 King Bed', 'Max Guests 2'],
      description:
        'Deluxe Rooms at ARIA average 520 sq ft with unparalleled amenities, corner views and state of the art technology.',
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
      title: 'Deluxe Strip View King Room',
      keyValues: ['520 Sqft', '1 King Bed', 'Max Guests 2'],
      description: 'Corner-view windows make for stunning center Strip views.',
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
      title: 'Deluxe Two Queen Room',
      keyValues: ['520 Sqft', '2 Queen Beds', 'Max Guests 4'],
      description: 'Corner-view windows make for stunning center Strip views.',
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
      title: 'Deluxe Strip View Two Queen',
      keyValues: ['520 Sqft', '2 Queen Beds', 'Max Guests 4'],
      description:
        'Leave your luggage at the door, head straight for your spectacular center Strip view.',
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

storiesOf('Components/RoomOverviewCardCollectionSection', module)
  .addDecorator(withTests('RoomOverviewCardCollectionSection'))
  .add('Two column', () => (
    <RoomOverviewCardCollectionSection {...defaultStoryProps} />
  ))
  .add('Three column', () => (
    <RoomOverviewCardCollectionSection
      {...defaultStoryProps}
      {...{ layout: 'three-column' }}
    />
  ));
