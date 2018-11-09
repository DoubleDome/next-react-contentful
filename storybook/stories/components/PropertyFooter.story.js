import React from 'react';
import { storiesOf } from '@storybook/react';

import PropertyFooter from '../../../src/components/PropertyFooter/PropertyFooter.component';

storiesOf('Components/PropertyFooter (WIP)', module).add('default', () => (
  <PropertyFooter
    awards={[
      { imageUrl: 'https://via.placeholder.com/96x96' },
      { imageUrl: 'https://via.placeholder.com/96x96' },
      { imageUrl: 'https://via.placeholder.com/96x96' },
    ]}
    contact={{
      label: 'Find Aria',
      address: ['3730 S Las Vegas Bivd', 'Las Vegas, NV 89158'],
      phone: '702.590.7111',
      email: 'guestservices@aria.com',
      social: [
        {
          label: 'Social button 1',
          iconUrl: 'https://via.placeholder.com/40x40',
          url: '/',
        },
        {
          label: 'Social button 2',
          iconUrl: 'https://via.placeholder.com/40x40',
          url: '/',
        },
        {
          label: 'Social button 3',
          iconUrl: 'https://via.placeholder.com/40x40',
          url: '/',
        },
        {
          label: 'Social button 4',
          iconUrl: 'https://via.placeholder.com/40x40',
          url: '/',
        },
      ],
    }}
    links={[
      {
        label: 'Guest services',
        links: [
          { label: 'Find Reservation', url: '/' },
          { label: 'Check In', url: '/' },
          { label: 'Check Out', url: '/' },
          { label: 'Request Receipt', url: '/' },
          { label: 'Concierge Services', url: '/' },
          { label: 'Gift Cards', url: '/' },
          { label: 'Guestbook Sign-Up', url: '/' },
        ],
        url: '/',
      },
      {
        label: 'Aria hotel',
        links: [
          { label: 'Contact Aria', url: '/' },
          { label: 'Site Map', url: '/' },
          { label: 'Property Map', url: '/' },
          { label: 'FAQ', url: '/' },
          { label: 'Sustainability', url: '/' },
          { label: 'Blog', url: '/' },
        ],
        url: '/',
      },
      {
        label: 'M life Rewards',
        links: [
          { label: 'Join Now!', url: '/' },
          { label: 'Log in', url: '/' },
          { label: 'M life Rewards Mastercard', url: '/' },
        ],
        url: '/',
      },
      {
        label: 'Mobile app',
        links: [
          { label: 'Download iPhone', url: '/' },
          { label: 'Download Android', url: '/' },
        ],
        url: '/',
      },
      {
        label: 'Awards',
        links: [],
        url: '/',
        mobileOnly: true,
      },
      {
        label: 'MGM Resorts',
        links: [],
        url: '/',
        mobileOnly: true,
      },
    ]}
    mobileLabel="More Aria"
  />
));
