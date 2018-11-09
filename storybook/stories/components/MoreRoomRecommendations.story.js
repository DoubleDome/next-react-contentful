import React from 'react';
import { storiesOf } from '@storybook/react';

import MoreRoomRecommendations from '../../../src/components/MoreRoomRecommendations/MoreRoomRecommendations.component';

storiesOf('Components/MoreRoomRecommendations (WIP)', module).add(
  'default',
  () => (
    <MoreRoomRecommendations
      {...{
        header: 'More Tower Suites',
        ctaPrimary: {
          url: '/',
          label: 'View All Tower Suites',
        },
        items: [
          {
            headline: 'Corner Suite Strip View',
            meta: ['920 Sqft', '1 King Bed', 'Max Guests 4', 'Strip View'],
            body: 'Stunning views of the Las Vegas Skyline from all around.',
            ctaPrimary: {
              url: '/',
              label: 'Check rates',
            },
            ctaSecondary: {
              url: '/',
              label: 'Compare room',
            },
          },
          {
            headline: 'Tower Suite',
            meta: ['1.000 Sqft', '1 King Bed', 'Max Guests 4', 'Corner View'],
            body: 'Soak your cares away in an open-air whirlpool tub.',
            ctaPrimary: {
              url: '/',
              label: 'Check rates',
            },
            ctaSecondary: {
              url: '/',
              label: 'Compare room',
            },
          },
          {
            headline: 'Corner Suite Strip View',
            meta: ['920 Sqft', '1 King Bed', 'Max Guests 4', 'Strip View'],
            body: 'Stunning views of the Las Vegas Skyline from all around.',
            ctaPrimary: {
              url: '/',
              label: 'Check rates',
            },
            ctaSecondary: {
              url: '/',
              label: 'Compare room',
            },
          },
        ],
      }}
    />
  ),
);
