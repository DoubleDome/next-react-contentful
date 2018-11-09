import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../../withTests';

import G2PremiumHeroSection from '../../../../dmp/components/G2PremiumHeroSection/G2PremiumHeroSection.component';
import AriaLogoWhite from '../../../assets/aria-logo-white.svg';

storiesOf('DMP/Components/G2PremiumHeroSection', module)
  .addDecorator(withTests('Hero'))
  .add('Default', () => (
    <G2PremiumHeroSection
      premium
      logoUrl={AriaLogoWhite}
      title="Suites"
      description="Stays at ARIA are always tailored to our guests' wishes, but Tower Suites guests receive heightened access and amenities including Lounge Access and Pre-Arrival Concierge."
      images={[
        {
          url:
            'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/deluxe-room/aria-deluxe-king-bed-dusk.tif',
          caption: 'Deluxe King Room',
          tertiaryAction: {
            label: 'Check rates',
            url:
              'https://www2.aria.com/en/booking/room-booking.html#/default?selectedPropertyId=e2704b04-d515-45b0-8afd-4fa1424ff0a8&roomTypeId=7715e5b7-4ed7-4779-a0bf-a8e6939f8369',
          },
        },
        {
          url:
            'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/corner-suite/aria-hotel-corner-bed-tablet.tif',
          caption: 'Corner Suite Strip View',
          tertiaryAction: {
            label: 'Check rates',
            url:
              'https://www2.aria.com/en/booking/room-booking.html#/default?selectedPropertyId=e2704b04-d515-45b0-8afd-4fa1424ff0a8&roomTypeId=969dd944-04a2-40cb-8c7c-bf6e870ac71c',
          },
        },
        {
          url:
            'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/deluxe-room/aria-hotel-deluxe-queen.tif',
          caption: 'Deluxe Two Queen Room',
          tertiaryAction: {
            label: 'Check rates',
            url:
              'https://www2.aria.com/en/booking/room-booking.html#/default?selectedPropertyId=e2704b04-d515-45b0-8afd-4fa1424ff0a8&roomTypeId=c8851c75-ece8-4fca-bad8-81c746942865',
          },
        },
      ]}
      secondaryAction={{
        label: 'Learn more',
        url: 'https://www2.aria.com/',
      }}
    />
  ));
