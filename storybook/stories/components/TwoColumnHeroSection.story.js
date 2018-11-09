import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../withTests';

import TwoColumnHeroSection from '../../../src/components/TwoColumnHeroSection/TwoColumnHeroSection.component';

storiesOf('Components/TwoColumnHeroSection', module)
  .addDecorator(withTests('TwoColumnHeroSection'))

  .add('Default', () => (
    <TwoColumnHeroSection
      title="Elevate Your Tower Suites Experience"
      image={{
        url:
          'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/tower-suites-lobby/lifestyle/aria-hotel-lifestyle-exterior-tower-suites-curb.tif',
      }}
      subtitle="Offer Details"
      contentHTML={`
        <p>Elevate your Tower Suites stay by adding the Tower Suites VIP Arrival Experience to your reservation. Add-on includes the following amenities:</p>
        <ul>
          <li>Roundtrip Luxury Airport Transfer</li>
          <li>Welcome Cocktail at Lobby Bar for Two (2)</li>
          <li>In-suite Welcome Amenity</li>
          <li>In-suite American Breakfast for Two (2)</li>
        </ul>
        <p>Purchase this package for a one-time fee of $250 when you add-on to any Tower Suites booking on Aria.com. *</p>
        <p class="micro-text">* Prices subject to change during holidays and peak periods. Additional taxes may apply. Please contact Tower Suites Concierge for more information. Terms and conditions apply.</p>
      `}
      actions={[
        {
          variant: 'primary',
          label: 'Book offer',
          url:
            'https://www.aria.com/en/offers/tower-suites-vip-experience.html',
        },
        {
          variant: 'secondary',
          label: 'Learn More',
          url:
            'https://www.aria.com/en/offers/tower-suites-vip-experience.html',
        },
      ]}
      sidebarSections={[
        {
          headline: {
            title: 'Add VIP Package',
          },
          items: [
            {
              type: 'content',
              contentHTML:
                '<p>If you would like to add this package on any existing Tower Suites reservation please contact Tower Suites.</p>',
            },
            {
              type: 'inline-link',
              label: 'Phone',
              linkText: '702 590 9599',
              linkUrl: 'tel:+17025909599',
            },
            {
              type: 'inline-link',
              label: 'Email',
              linkText: 'towersuites@aria.com',
              linkUrl: 'mailto:towersuites@aria.com',
            },
          ],
        },
      ]}
    />
  ))
  .add('With Video', () => (
    <TwoColumnHeroSection
      title="Elevate Your Tower Suites Experience"
      image={{
        url:
          'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/tower-suites-lobby/lifestyle/aria-hotel-lifestyle-exterior-tower-suites-curb.tif',
      }}
      video={{
        url:
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        type: 'video/mp4',
      }}
      subtitle="Offer Details"
      contentHTML={`
        <p>Elevate your Tower Suites stay by adding the Tower Suites VIP Arrival Experience to your reservation. Add-on includes the following amenities:</p>
        <ul>
          <li>Roundtrip Luxury Airport Transfer</li>
          <li>Welcome Cocktail at Lobby Bar for Two (2)</li>
          <li>In-suite Welcome Amenity</li>
          <li>In-suite American Breakfast for Two (2)</li>
        </ul>
        <p>Purchase this package for a one-time fee of $250 when you add-on to any Tower Suites booking on Aria.com. *</p>
        <p class="micro-text">* Prices subject to change during holidays and peak periods. Additional taxes may apply. Please contact Tower Suites Concierge for more information. Terms and conditions apply.</p>
      `}
      actions={[
        {
          variant: 'primary',
          label: 'Book offer',
          url:
            'https://www.aria.com/en/offers/tower-suites-vip-experience.html',
        },
        {
          variant: 'secondary',
          label: 'Learn More',
          url:
            'https://www.aria.com/en/offers/tower-suites-vip-experience.html',
        },
      ]}
      sidebarSections={[
        {
          headline: {
            title: 'Add VIP Package',
          },
          items: [
            {
              type: 'content',
              contentHTML:
                '<p>If you would like to add this package on any existing Tower Suites reservation please contact Tower Suites.</p>',
            },
            {
              type: 'inline-link',
              label: 'Phone',
              linkText: '702 590 9599',
              linkUrl: 'tel:+17025909599',
            },
            {
              type: 'inline-link',
              label: 'Email',
              linkText: 'towersuites@aria.com',
              linkUrl: 'mailto:towersuites@aria.com',
            },
          ],
        },
      ]}
    />
  ));
