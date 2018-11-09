import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../withTests';

import VirtualTourHeroSection from '../../../src/components/VirtualTourHeroSection/VirtualTourHeroSection.component';

storiesOf('Components/VirtualTourHeroSection', module)
  .addDecorator(withTests('VirtualTourHeroSection'))
  .add('Single', () => (
    <VirtualTourHeroSection
      tours={[
        {
          imageUrl: 'https://picsum.photos/1600/900',
          imageAlt: 'Image',
          title: 'Corner Suite Virtual Tour',
          description:
            'Indulge your desires at ARIA Tower Suites, a luxurious AAA Five Diamond retreat high above the Las Vegas Strip.',
          button: {
            label: 'Take Virtual Tour',
            url: '/',
          },
        },
      ]}
    />
  ))
  .add('Double', () => (
    <VirtualTourHeroSection
      tours={[
        {
          imageUrl: 'https://picsum.photos/1600/900',
          imageAlt: 'Image',
          title: 'Corner Suite Virtual Tour',
          description:
            'Indulge your desires at ARIA Tower Suites, a luxurious AAA Five Diamond retreat high above the Las Vegas Strip.',
          button: {
            label: 'Take Virtual Tour',
            url: '/',
          },
        },
        {
          imageUrl: 'https://picsum.photos/1600/900',
          imageAlt: 'Image',
          title: 'Corner Suite Virtual Tour',
          description:
            'Indulge your desires at ARIA Tower Suites, a luxurious AAA Five Diamond retreat high above the Las Vegas Strip.',
          button: {
            label: 'Take Virtual Tour',
            url: '/',
          },
        },
      ]}
    />
  ));
