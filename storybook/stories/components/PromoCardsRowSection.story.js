import React from 'react';
import { storiesOf } from '@storybook/react';

import PromoCardsRowSection from '../../../src/components/PromoCardsRowSection/PromoCardsRowSection.component';

const cards = [
  {
    imageUrl:
      'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/exterior/aria-hotel-exterior-campus-forbes-announcement.tif',
    categoryName: 'Offers',
    title: 'Warm up with 30% off your winter escape',
    description:
      'Book by November 15 and stay by September 30, 2019 to enjoy these special rates.',
    status: {
      color: 'red',
      label: 'Ends soon',
    },
    primaryAction: {
      label: 'Book now',
      url:
        'https://www2.aria.com/en/booking/room-booking.html#/default?programId=279188f0-2e78-4f54-a4c2-703a2c52d0e6&selectedPropertyId=e2704b04-d515-45b0-8afd-4fa1424ff0a8',
    },
    tertiaryAction: {
      label: 'Learn More',
      url:
        'https://www2.aria.com/en/offers/offer-detail.html#/offerType=ROOM&offerId=279188f0-2e78-4f54-a4c2-703a2c52d0e6&programType=OpenLoop',
    },
  },
  {
    imageUrl:
      'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/resort-club-lounge/resort-club-lounge-rooms/resort-club-lounge-queen/aria-hotel-deluxe-resort-club-lounge-queen-room.jpg',
    categoryName: 'Offers',
    title: 'Fall Savings Package',
    description:
      'Book by November 15 to enjoy these special rates plus bonus discounts.',
    primaryAction: {
      label: 'Book offer',
      url:
        'https://www2.aria.com/en/booking/room-booking.html#/default?programId=580b66b8-f4db-4777-b93a-43bc9c32feb9&selectedPropertyId=e2704b04-d515-45b0-8afd-4fa1424ff0a8',
    },
    tertiaryAction: {
      label: 'Learn More',
      url:
        'https://vacationsbymgmresorts.poweredbygps.com/g/pt/vacation-packages/?MDPCID=US.TPS.MGM.BRAND-ARIA.EPACKAGE&icid=DMP_Tile_BB_HO_EV_MGMVacations_09042018_LV_AR',
    },
  },
  {
    imageUrl:
      'https://static.mgmresorts.com/content/dam/MGM/aria/corporate-initiatives/aria-hotel-resorts-vacations.tif',
    categoryName: 'Offers',
    title: 'Vacations by MGM Resorts',
    description: 'Save more when you book your flight and hotel together!',
    primaryAction: {
      label: 'Book now',
      url:
        'https://vacationsbymgmresorts.poweredbygps.com/g/pt/vacation-packages/?MDPCID=US.TPS.MGM.BRAND-ARIA.EPACKAGE&icid=DMP_Tile_BB_HO_EV_MGMVacations_09042018_LV_AR',
    },
    tertiaryAction: {
      label: 'Learn More',
      url:
        'https://vacationsbymgmresorts.poweredbygps.com/g/pt/vacation-packages/?MDPCID=US.TPS.MGM.BRAND-ARIA.EPACKAGE&icid=DMP_Tile_BB_HO_EV_MGMVacations_09042018_LV_AR',
    },
  },
  {
    imageUrl:
      'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/exterior/lifestyle/aria-hotel-exterior-lifestyle-couple-evening-lumia.jpg',
    categoryName: 'Offers',
    title: 'Double the points, double the fun',
    description:
      'Earn double World of Hyatt Points on all eligible spend through December 29.',
    primaryAction: {
      label: 'Book now',
      url:
        'https://world.hyatt.com/content/gp/en/wohpromotions/mgm-vegas-double-points-promotion.html',
    },
    tertiaryAction: {
      label: 'Learn More',
      url:
        'https://world.hyatt.com/content/gp/en/wohpromotions/mgm-vegas-double-points-promotion.html',
    },
  },
];

storiesOf('Components/PromoCardsRowSection', module)
  .add('Default', () => (
    <PromoCardsRowSection
      title="Offers & Promos"
      readMoreButton={{ label: 'View All Offers', url: '/' }}
      cards={cards}
    />
  ))
  .add('With no View All button', () => (
    <PromoCardsRowSection title="Offers & Promos" cards={cards} />
  ))
  .add('With no tertiary actions', () => (
    <PromoCardsRowSection
      title="Offers & Promos"
      readMoreButton={{ label: 'View All Offers', url: '/' }}
      cards={cards.map(c => ({ ...c, tertiaryAction: undefined }))}
    />
  ));
