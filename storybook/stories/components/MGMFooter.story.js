import React from 'react';
import { storiesOf } from '@storybook/react';

import MGMFooter from '../../../src/components/MGMFooter/MGMFooter.component';

storiesOf('Components/MGMFooter (WIP)', module).add('default', () => (
  <MGMFooter
    logo="https://via.placeholder.com/234x64"
    links={[
      {
        key: 1,
        label: 'Contact MGM',
        url: '/',
      },
      {
        key: 2,
        label: 'Press Room',
        url: '/',
      },
      {
        key: 3,
        label: 'Weather',
        url: '/',
      },
      {
        key: 4,
        label: 'Investor Relations',
        url: '/',
      },
      {
        key: 5,
        label: 'Employment',
        url: '/',
      },
      {
        key: 6,
        label: 'Become an Affiliate',
        url: '/',
      },
    ]}
    properties={[...Array(26)].map((_, index) => ({
      key: `Hotel Name ${index}`,
      title: `Hotel Name ${index}`,
      image_url: 'https://via.placeholder.com/60x34',
      url: '/',
    }))}
  />
));
