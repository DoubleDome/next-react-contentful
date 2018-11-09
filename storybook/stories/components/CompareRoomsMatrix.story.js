import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../withTests';

import CompareRoomsMatrix from '../../../src/components/CompareRoomsMatrix/CompareRoomsMatrix.component';

storiesOf('Components/CompareRoomsMatrix (WIP)', module)
  .addDecorator(withTests('CompareRoomsMatrix'))
  .add('Default', () => (
    <CompareRoomsMatrix
      rows={[
        {
          title: 'Room Type',
          subtitle: 'Room availability and price based on selected dates',
          type: 'room',
        },
        { title: 'Nightly Rate', type: 'price' },
        { title: 'Square Feet' },
        { title: 'Max Occupancy' },
        { title: 'Number of Beds' },
        { title: 'Bed Type' },
        { title: 'View' },
        { title: 'Number of TVs' },
        { title: 'Number of Bathrooms' },
        { title: 'Living Room' },
        { title: 'Enhanced Housekeeping' },
        { title: 'Special Registration and/or Entrance' },
        { title: 'Personalized Concierge' },
        { title: 'In-Room Wi-Fi' },
        { title: 'Minibar' },
        { title: 'ADA Features Available' },
      ]}
      rooms={[
        [
          {
            title: 'Studio Panoramic Suite',
            image: {
              url:
                'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/panoramic-studio-suite/aria-hotel-panoramic-studio-suite.tif',
            },
            detailsUrl: '/',
            bookingDisabled: true,
          },
          {
            error:
              'Selected room is unavailable. Please try changing your dates.',
          },
          '920',
          '2',
          '1',
          'King Bed',
          'City',
          '2',
          '1.5',
          true,
          true,
          true,
          true,
          true,
          true,
          true,
        ],
        [
          {
            title: 'Deluxe Strip View King',
            image: {
              url:
                'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/deluxe-room-city-view/aria-hotel-deluxe-king-city-view.tif',
            },
            detailsUrl: '/',
            bookingUrl: '/',
          },
          {
            price: '$293.68',
            subtitle: 'Avg/night plus nightly resort fee and tax',
          },
          '520',
          '2',
          '1',
          'King Bed',
          'Strip',
          '2',
          '1',
          true,
          true,
          true,
          true,
          true,
          true,
          true,
        ],
      ]}
    />
  ));
