import React from 'react';
import { storiesOf } from '@storybook/react';

import TextHeaderSection from '../../../src/components/TextHeaderSection/TextHeaderSection.component';
import HeroSection from '../../../src/components/HeroSection/HeroSection.component';
import RoomOverviewCardCollectionSection from '../../../src/components/RoomOverviewCardCollectionSection/RoomOverviewCardCollectionSection.component';
import PromoCardsRowSection from '../../../src/components/PromoCardsRowSection/PromoCardsRowSection.component';
import PropertyFooter from '../../../src/components/PropertyFooter/PropertyFooter.component';
import MGMFooter from '../../../src/components/MGMFooter/MGMFooter.component';
import CopyrightFooter from '../../../src/components/CopyrightFooter/CopyrightFooter.component';
import AriaLogoWhite from '../../assets/aria-logo-white.svg';

storiesOf('Pages/Room Landing', module).add('Default', () => (
  <React.Fragment>
    <TextHeaderSection
      title="Rooms & Suites"
      subtitle="ARIA Las Vegas boasts some of the best in hotel rooms and suites on the Las Vegas Strip. Learn more about the types of rooms you can book at ARIA today."
    />

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

    <RoomOverviewCardCollectionSection
      rooms={[
        {
          title: 'Deluxe King Room',
          keyValues: ['520 Sqft', '1 King Bed', 'Max Guests 2'],
          description:
            'Deluxe Rooms at ARIA average 520 sq ft with unparalleled amenities, corner views and state of the art technology.',
          image: {
            url:
              'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/deluxe-room/aria-deluxe-king-bed-dusk.tif',
          },
          primaryAction: {
            label: 'Check Rates',
            url: '/',
          },
          secondaryAction: {
            label: 'View Room Details',
            url: '/',
          },
          tertiaryAction: {
            label: 'Compare',
            url: '/',
          },
        },
        {
          title: 'Deluxe Strip View King Room',
          keyValues: ['520 Sqft', '1 King Bed', 'Max Guests 2'],
          description:
            'Corner-view windows make for stunning center Strip views.',
          image: {
            url:
              'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/deluxe-room-city-view/aria-hotel-deluxe-king-city-view.tif',
          },
          primaryAction: {
            label: 'Check Rates',
            url: '/',
          },
          secondaryAction: {
            label: 'View Room Details',
            url: '/',
          },
          tertiaryAction: {
            label: 'Compare',
            url: '/',
          },
        },
        {
          title: 'Deluxe Two Queen Room',
          keyValues: ['520 Sqft', '2 Queen Beds', 'Max Guests 4'],
          description:
            'Corner-view windows make for stunning center Strip views.',
          image: {
            url:
              'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/deluxe-room/aria-hotel-deluxe-queen.tif',
          },
          primaryAction: {
            label: 'Check Rates',
            url: '/',
          },
          secondaryAction: {
            label: 'View Room Details',
            url: '/',
          },
          tertiaryAction: {
            label: 'Compare',
            url: '/',
          },
        },
        {
          title: 'Deluxe Strip View Two Queen',
          keyValues: ['520 Sqft', '2 Queen Beds', 'Max Guests 4'],
          description:
            'Leave your luggage at the door, head straight for your spectacular center Strip view.',
          image: {
            url:
              'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/deluxe-room/aria-hotel-deluxe-queen.tif',
          },
          primaryAction: {
            label: 'Check Rates',
            url: '/',
          },
          secondaryAction: {
            label: 'View Room Details',
            url: '/',
          },
          tertiaryAction: {
            label: 'Compare',
            url: '/',
          },
        },
      ]}
      layout="three-column"
    />

    <HeroSection
      title="Suites"
      description="Stays at ARIA are always tailored to our guests' wishes, but Tower Suites guests receive heightened access and amenities including Lounge Access and Pre-Arrival Concierge."
      images={[
        {
          url:
            'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/panoramic-studio-suite/aria-hotel-panoramic-studio-suite.tif',
          caption: 'Studio Panoramic Suite',
          tertiaryAction: {
            label: 'Check rates',
            url:
              'https://www2.aria.com/en/booking/room-booking.html#/default?selectedPropertyId=e2704b04-d515-45b0-8afd-4fa1424ff0a8&roomTypeId=7715e5b7-4ed7-4779-a0bf-a8e6939f8369',
          },
        },
        {
          url:
            'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/corner-suite/aria-hotel-corner-suite-bedroom.tif',
          caption: 'Corner Suite',
          tertiaryAction: {
            label: 'Check rates',
            url:
              'https://www2.aria.com/en/booking/room-booking.html#/default?selectedPropertyId=e2704b04-d515-45b0-8afd-4fa1424ff0a8&roomTypeId=969dd944-04a2-40cb-8c7c-bf6e870ac71c',
          },
        },
        {
          url:
            'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/corner-suite/aria-hotel-corner-living.tif',
          caption: 'Corner Suite Panoramic View',
          tertiaryAction: {
            label: 'Check rates',
            url:
              'https://www2.aria.com/en/booking/room-booking.html#/default?selectedPropertyId=e2704b04-d515-45b0-8afd-4fa1424ff0a8&roomTypeId=c8851c75-ece8-4fca-bad8-81c746942865',
          },
        },
      ]}
    />

    <RoomOverviewCardCollectionSection
      rooms={[
        {
          title: 'Studio Panoramic Suite',
          keyValues: ['840 Sqft', '1 King Bed', 'Max Guests 4'],
          description:
            'Relax in style and enjoy views of The Strip in this 84-square-foot escape.',
          image: {
            url:
              'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/panoramic-studio-suite/aria-hotel-panoramic-studio-suite.tif',
          },
          primaryAction: {
            label: 'Check Rates',
            url: '/',
          },
          secondaryAction: {
            label: 'View Room Details',
            url: '/',
          },
          tertiaryAction: {
            label: 'Compare',
            url: '/',
          },
        },
        {
          title: 'Corner Suite',
          keyValues: ['920 Sqft', '1 King Bed', 'Max Guests 4'],
          description: 'Pamper yourself with 920 square feet dedicated to you.',
          image: {
            url:
              'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/corner-suite/aria-hotel-corner-suite-bedroom.tif',
          },
          primaryAction: {
            label: 'Check Rates',
            url: '/',
          },
          secondaryAction: {
            label: 'View Room Details',
            url: '/',
          },
          tertiaryAction: {
            label: 'Compare',
            url: '/',
          },
        },
        {
          title: 'Corner Suite Panoramic View',
          keyValues: ['920 Sqft', '1 King Bed', 'Max Guests 4'],
          description:
            'Stunning views of the Las Vegas Skyline from all around.',
          image: {
            url:
              'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/corner-suite/aria-hotel-corner-living.tif',
          },
          primaryAction: {
            label: 'Check Rates',
            url: '/',
          },
          secondaryAction: {
            label: 'View Room Details',
            url: '/',
          },
          tertiaryAction: {
            label: 'Compare',
            url: '/',
          },
        },
        {
          title: 'Corner Suite Strip View',
          keyValues: ['920 Sqft', '1 King Bed', 'Max Guests 4'],
          description:
            'Stunning views of the Las Vegas Skyline from all around.',
          image: {
            url:
              'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/corner-suite/aria-hotel-corner-bed-tablet.tif',
          },
          primaryAction: {
            label: 'Check Rates',
            url: '/',
          },
          secondaryAction: {
            label: 'View Room Details',
            url: '/',
          },
          tertiaryAction: {
            label: 'Compare',
            url: '/',
          },
        },
        {
          title: 'Tower Suite',
          keyValues: ['1,000 Sqft', '1 King Bed', 'Corner Max Guests  4'],
          description: 'Soak your cares away in an open-air whirlpool tub.',
          image: {
            url:
              'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/tower-suite/aria-hotel-tower-suite-bedroom-tablet.tif',
          },
          primaryAction: {
            label: 'Check Rates',
            url: '/',
          },
          secondaryAction: {
            label: 'View Room Details',
            url: '/',
          },
          tertiaryAction: {
            label: 'Compare',
            url: '/',
          },
        },
        {
          title: 'Center Suite Strip View',
          keyValues: ['1,075 Sqft', '2 Queen Beds', 'Max Guests 4'],
          description:
            'Panoramic views of The Strip and spacious living and bedroom areas.',
          image: {
            url:
              'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/crystals-center-suite/aria-hotel-crystals-suite-living-room-centerpiece-purple-flowers.tif',
          },
          primaryAction: {
            label: 'Check Rates',
            url: '/',
          },
          secondaryAction: {
            label: 'View Room Details',
            url: '/',
          },
          tertiaryAction: {
            label: 'Compare',
            url: '/',
          },
        },
        {
          title: 'Executive Hospitality Suite',
          keyValues: ['2,000 Sqft', '1 King Bed', 'Max Guests 6'],
          description:
            'All work and all play. An in-suite conference room leaves plenty of time for both.',
          image: {
            url:
              'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/executive-hospitality-suite/aria-hotel-executive-hospitality-suite-living-room.tif',
          },
          primaryAction: {
            label: 'Check Rates',
            url: '/',
          },
          secondaryAction: {
            label: 'View Room Details',
            url: '/',
          },
          tertiaryAction: {
            label: 'Compare',
            url: '/',
          },
        },
      ]}
      layout="three-column"
    />

    <HeroSection
      premium
      logoUrl={AriaLogoWhite}
      title="Experience Unsurpassed Luxury"
      description="Indulge your desires at ARIA Sky Suites, a luxurious AAA Five Diamond retreat high above the Las Vegas Strip."
      images={[
        {
          url:
            'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/sky-suites/2-bedroom-aria-suite/aria-sky-suites-two-bedroom-aria-suite-livingroom.tif',
        },
      ]}
      secondaryAction={{
        label: 'Learn more about Sky Suites',
        url: 'https://www2.aria.com/',
      }}
    />

    <RoomOverviewCardCollectionSection
      rooms={[
        {
          title: 'One Bedroom ARIA Suite',
          keyValues: ['1,050 Sqft', '1 King Bed', 'Max Guests 4'],
          description:
            'Breate in - the air really is better up here. Approximately 1,050 square feet of sheer opulence.',
          image: {
            url:
              'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/sky-suites/1-bedroom-aria-suite/aria-sky-suites-one-bedroom-aria-suite-bedroom.tif',
          },
          primaryAction: {
            label: 'Check Rates',
            url: '/',
          },
          secondaryAction: {
            label: 'View Room Details',
            url: '/',
          },
          tertiaryAction: {
            label: 'Compare',
            url: '/',
          },
        },
        {
          title: 'One Bedroom ARIA Suite with Two Queen Beds',
          keyValues: ['1,050 Sqft', '2 Queen Beds', 'Max Guests 4'],
          description:
            'Breate in - the air really is better up here. Approximately 1,050 square feet of sheer opulence.',
          image: {
            url:
              'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/sky-suites/1-bedroom-aria-suite/aria-sky-suites-one-bedroom-aria-suite-bedroom.tif',
          },
          primaryAction: {
            label: 'Check Rates',
            url: '/',
          },
          secondaryAction: {
            label: 'View Room Details',
            url: '/',
          },
          tertiaryAction: {
            label: 'Compare',
            url: '/',
          },
        },
        {
          title: 'Two Bedroom ARIA Suite',
          keyValues: ['1,630 Sqft', '2 King Beds', 'Max Guests 8'],
          description:
            "You shouldn't have to settle for anything but the best. And with our 2-Bedroom ARIA Suite, you won't.",
          image: {
            url:
              'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/sky-suites/2-bedroom-aria-suite/aria-sky-suites-two-bedroom-aria-suite-livingroom.tif',
          },
          primaryAction: {
            label: 'Check Rates',
            url: '/',
          },
          secondaryAction: {
            label: 'View Room Details',
            url: '/',
          },
          tertiaryAction: {
            label: 'Compare',
            url: '/',
          },
        },
        {
          title: 'One Bedroom ARIA Suite',
          keyValues: ['1,465 Sqft', '1 King Bed', 'Max Guests 4'],
          description:
            "Our 1-Bedroom Penthouse Suite wraps you in a luxuriousness you'll be reluctant to leave.",
          image: {
            url:
              'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/sky-suites/1-bedroom-penthouse/aria-sky-suites-one-bedroom-penthouse-suite-bedroom.tif',
          },
          primaryAction: {
            label: 'Check Rates',
            url: '/',
          },
          secondaryAction: {
            label: 'View Room Details',
            url: '/',
          },
          tertiaryAction: {
            label: 'Compare',
            url: '/',
          },
        },
        {
          title: 'Two Bedroom Penthouse Suite',
          keyValues: ['2,060 Sqft', '2 King Beds', 'Max Guests 8'],
          description:
            "We've thought of everything, so you can forget it all. This Penthouse is the ultimate in contemporary sophistication.",
          image: {
            url:
              'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/sky-suites/2-bedroom-penthouse/aria-sky-suites-two-bedroom-penthouse-suite-living-room.tif',
          },
          primaryAction: {
            label: 'Check Rates',
            url: '/',
          },
          secondaryAction: {
            label: 'View Room Details',
            url: '/',
          },
          tertiaryAction: {
            label: 'Compare',
            url: '/',
          },
        },
        {
          title: 'Two Bedroom Sky Villa',
          keyValues: ['3,370 Sqft', '2 King Beds', 'Max Guests 8'],
          description:
            'ARIA proudly introduces the Sky Villas. At 3,370 square feet, the Sky Villas exist for the most discerning of guests...',
          image: {
            url:
              'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/sky-suites/sky-villa/aria-hotel-sky-suites-sky-villa-22-living-room.tif',
          },
          primaryAction: {
            label: 'Check Rates',
            url: '/',
          },
          secondaryAction: {
            label: 'View Room Details',
            url: '/',
          },
          tertiaryAction: {
            label: 'Compare',
            url: '/',
          },
        },
      ]}
      layout="two-column"
    />

    <PromoCardsRowSection
      title="Offers & Promos"
      readMoreButton={{ label: 'View All Offers', url: '/' }}
      cards={[
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
          description:
            'Save more when you book your flight and hotel together!',
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
      ]}
    />

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

    <MGMFooter
      logo="https://via.placeholder.com/234x64"
      links={[
        {
          key: 1,
          label: 'Contact MGM',
          url: '//',
        },
        {
          key: 2,
          label: 'Press Room',
          url: '//',
        },
        {
          key: 3,
          label: 'Weather',
          url: '//',
        },
        {
          key: 4,
          label: 'Investor Relations',
          url: '//',
        },
        {
          key: 5,
          label: 'Employment',
          url: '//',
        },
        {
          key: 6,
          label: 'Become an Affiliate',
          url: '//',
        },
      ]}
      properties={[...Array(26)].map((_, index) => ({
        key: `Hotel Name ${index}`,
        title: `Hotel Name ${index}`,
        image_url: 'https://via.placeholder.com/60x34',
        url: '//',
      }))}
    />

    <CopyrightFooter
      links={[]}
      copyrightNotice="Copyright © 2018 Citycenter Land, Llc. All Rights Reserved"
    />
  </React.Fragment>
));
