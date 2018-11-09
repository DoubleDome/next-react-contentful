import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../../withTests';

import G2HighlightCarouselSection from '../../../../dmp/components/G2HighlightCarouselSection/G2HighlightCarouselSection.component';

storiesOf('DMP/Components/G2HighlightCarouselSection', module)
  .addDecorator(withTests('HighlightCardsCarouselSection'))
  .add('Default', () => (
    <G2HighlightCarouselSection
      title="Tower Suites Exclusive Services"
      cards={[
        {
          imageUrl:
            'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/exterior/aria-hotel-exterior-campus-forbes-announcement.tif',
          title: '11 Warm up with 30% off your winter escape',
          description:
            'Book by November 15 and stay by September 30, 2019 to enjoy these special rates.',
        },
        {
          imageUrl:
            'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/resort-club-lounge/resort-club-lounge-rooms/resort-club-lounge-queen/aria-hotel-deluxe-resort-club-lounge-queen-room.jpg',
          title: '22 Fall Savings Package',
          description:
            'Book by November 15 to enjoy these special rates plus bonus discounts.',
        },
        {
          imageUrl:
            'https://static.mgmresorts.com/content/dam/MGM/aria/corporate-initiatives/aria-hotel-resorts-vacations.tif',
          title: '33 Vacations by MGM Resorts',
          description:
            'Save more when you book your flight and hotel together!',
        },
        {
          imageUrl:
            'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/exterior/lifestyle/aria-hotel-exterior-lifestyle-couple-evening-lumia.jpg',
          title: '44 Double the points, double the fun',
          description:
            'Earn double World of Hyatt Points on all eligible spend through December 29.',
        },
        {
          imageUrl:
            'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/exterior/aria-hotel-exterior-campus-forbes-announcement.tif',
          title: '55 Warm up with 30% off your winter escape',
          description:
            'Book by November 15 and stay by September 30, 2019 to enjoy these special rates.',
        },
        {
          imageUrl:
            'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/resort-club-lounge/resort-club-lounge-rooms/resort-club-lounge-queen/aria-hotel-deluxe-resort-club-lounge-queen-room.jpg',
          title: '66 Fall Savings Package',
          description:
            'Book by November 15 to enjoy these special rates plus bonus discounts.',
        },
        {
          imageUrl:
            'https://static.mgmresorts.com/content/dam/MGM/aria/corporate-initiatives/aria-hotel-resorts-vacations.tif',
          title: '77 Vacations by MGM Resorts',
          description:
            'Save more when you book your flight and hotel together!',
        },
        {
          imageUrl:
            'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/exterior/lifestyle/aria-hotel-exterior-lifestyle-couple-evening-lumia.jpg',
          title: '88 Double the points, double the fun',
          description:
            'Earn double World of Hyatt Points on all eligible spend through December 29.',
        },
      ]}
    />
  ));
