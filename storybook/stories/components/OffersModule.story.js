import React from 'react';
import { storiesOf } from '@storybook/react';

import OffersModule from '../../../src/components/OffersModule/OffersModule.component';

storiesOf('Components/OffersModule (WIP)', module).add('default', () => (
  <OffersModule
    offers={[
      {
        id: 1,
        superTitle: 'M Life Rewards',
        title: '20% off Semi-Annual Sale + $150 Dining Credit',
        subtitle: 'Lorem ipsum subtitle goes here',
        imageSrc: 'https://via.placeholder.com/640x480',
        ctaHref: '/',
        ctaLabel: 'Book Offer',
        secondaryActionHref: '/',
        secondaryActionLabel: 'All Offers',
      },
      {
        id: 2,
        superTitle: 'Sky suites',
        title: 'Elevate your stay with Aria Sky Suites',
        subtitle: 'Lorem ipsum subtitle goes here',
        imageSrc: 'https://via.placeholder.com/640x480',
        ctaHref: '/',
        ctaLabel: 'Learn More',
        secondaryActionHref: '/',
        secondaryActionLabel: 'Sign In',
      },
    ]}
    heading="Get More From Aria"
    allOffersHref="/"
    allOffersLabel="View All Offers"
  />
));
