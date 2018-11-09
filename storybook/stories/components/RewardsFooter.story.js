import React from 'react';
import { storiesOf } from '@storybook/react';

import RewardsFooter from '../../../src/components/RewardsFooter/RewardsFooter.component';

storiesOf('Components/RewardsFooter (WIP)', module).add('default', () => (
  <RewardsFooter
    cards={[
      {
        key: 1,
        heading: 'M life Rewards',
        description:
          'From hotel and entertainment to dining, spa and gaming, you can earn rewards for virtually every dollar you spend.',
        cta: 'Join Today',
        imageAlt: 'M life Rewards',
        imageSrc: 'https://via.placeholder.com/304x228',
        href: '/',
      },
      {
        key: 2,
        heading: 'M life Rewards Mastercard',
        description:
          'With the M life Rewards MasterCard, you can turn everyday purchases into elevated experiences by earning M life Rewards Points.',
        cta: 'Apply Now',
        imageAlt: 'M life Rewards Mastercard',
        imageSrc: 'https://via.placeholder.com/304x228',
        href: '/',
      },
    ]}
  />
));
