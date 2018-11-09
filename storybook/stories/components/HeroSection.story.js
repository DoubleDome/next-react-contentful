import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../withTests';

import HeroSection from '../../../src/components/HeroSection/HeroSection.component';
import AriaLogoWhite from '../../assets/aria-logo-white.svg';

storiesOf('Components/HeroSection', module)
  .addDecorator(withTests('HeroSection'))

  .add('Default', () => (
    <HeroSection
      title="Rooms"
      description="ARIA’s Deluxe Rooms include a world of unexpected amenities. With an in-room tablet for environment control, these rooms are pure perfection."
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
            'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/deluxe-room-city-view/aria-hotel-deluxe-king-city-view.tif',
          caption: 'Deluxe Strip View King Room',
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
    />
  ))

  .add('Premium', () => (
    <HeroSection
      premium
      logoUrl={AriaLogoWhite}
      title="Experience Unsurpassed Luxury"
      description="Indulge your desires at ARIA Sky Suites, a luxurious AAA Five Diamond retreat high above the Las Vegas Strip."
      images={[
        {
          url:
            'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/sky-suites/1-bedroom-aria-suite/aria-sky-suites-one-bedroom-aria-suite-bedroom.tif',
          caption: 'One Bedroom ARIA Suite',
          tertiaryAction: {
            label: 'Check rates',
            url:
              'https://www2.aria.com/en/booking/room-booking.html#/default?selectedPropertyId=e2704b04-d515-45b0-8afd-4fa1424ff0a8&roomTypeId=7715e5b7-4ed7-4779-a0bf-a8e6939f8369',
          },
        },
        {
          url:
            'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/sky-suites/2-bedroom-aria-suite/aria-sky-suites-two-bedroom-aria-suite-livingroom.tif',
          caption: 'Two Bedroom ARIA Suite',
          tertiaryAction: {
            label: 'Check rates',
            url:
              'https://www2.aria.com/en/booking/room-booking.html#/default?selectedPropertyId=e2704b04-d515-45b0-8afd-4fa1424ff0a8&roomTypeId=969dd944-04a2-40cb-8c7c-bf6e870ac71c',
          },
        },
        {
          url:
            'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/sky-suites/1-bedroom-penthouse/aria-sky-suites-one-bedroom-penthouse-suite-bedroom.tif',
          caption: 'One Bedroom ARIA Suite',
          tertiaryAction: {
            label: 'Check rates',
            url:
              'https://www2.aria.com/en/booking/room-booking.html#/default?selectedPropertyId=e2704b04-d515-45b0-8afd-4fa1424ff0a8&roomTypeId=c8851c75-ece8-4fca-bad8-81c746942865',
          },
        },
      ]}
      secondaryAction={{
        label: 'Learn more about Sky Suites',
        url: 'https://www2.aria.com/',
      }}
    />
  ))

  .add('Single Image', () => (
    <HeroSection
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
      ]}
    />
  ))

  .add('Single Image with no caption', () => (
    <HeroSection
      title="Suites"
      description="Stays at ARIA are always tailored to our guests' wishes, but Tower Suites guests receive heightened access and amenities including Lounge Access and Pre-Arrival Concierge."
      images={[
        {
          url:
            'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/deluxe-room/aria-deluxe-king-bed-dusk.tif',
        },
      ]}
    />
  ))

  .add('Single Image with no caption and no description', () => (
    <HeroSection
      title="Suites"
      images={[
        {
          url:
            'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/deluxe-room/aria-deluxe-king-bed-dusk.tif',
        },
      ]}
    />
  ));
