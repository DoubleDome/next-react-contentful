import { createClient } from '../integrations/contentful';

import React from 'react';
import Layout from '../layouts/layout';
import G2TextHeaderSection from '../../dmp/components/G2TextHeaderSection/G2TextHeaderSection.component';
import G2HeroSection from '../../dmp/components/G2HeroSection/G2HeroSection.component';
import G2RoomOverviewCardCollectionSection from '../../dmp/components/G2RoomOverviewCardCollectionSection/G2RoomOverviewCardCollectionSection.component';
import PromoCardsRowSection from '../../src/components/PromoCardsRowSection/PromoCardsRowSection.component';

class Index extends React.Component {
  static async getInitialProps() {
    const client = createClient();
    const entries = await client.getEntries({
      content_type: 'roomLandingPage',
      include: 1
    });

    return { roomLandingPageProp: entries.items[0] };
  }

  render() {
    const content = this.props.roomLandingPageProp.fields;
    const hero = content.sectionHero.fields;

    return (
      <Layout>
        <G2TextHeaderSection
          title={content.textHeader.fields.title}
          subtitle={content.textHeader.fields.subtitle}
        />

        {/* GraphQL needed for proper Contentful implementation of Hero*/}
        <G2HeroSection
          title={content.sectionHero.fields.title}
          description={
            content.sectionHero.fields.description.content[0].content[0].value
          }
          images={[
            {
              url: content.sectionHero.fields.room1imageUrl,
              caption: content.sectionHero.fields.room1caption,
              tertiaryAction: {
                label: 'Check Rates',
                url: content.sectionHero.fields.room1actionUrl
              }
            },
            {
              url: content.sectionHero.fields.room2imageUrl,
              caption: content.sectionHero.fields.room2caption,
              tertiaryAction: {
                label: 'Check Rates',
                url: content.sectionHero.fields.room2actionUrl
              }
            },
            {
              url: content.sectionHero.fields.room3imageUrl,
              caption: content.sectionHero.fields.room3caption,
              tertiaryAction: {
                label: 'Check Rates',
                url: content.sectionHero.fields.room3actionUrl
              }
            }
          ]}
        />

        <G2RoomOverviewCardCollectionSection
          rooms={content.roomCollection.map(room => {
            return {
              title: room.fields.title,
              keyValues: [
                room.fields.squareFeet,
                room.fields.bedType,
                room.fields.maxGuests
              ],
              description:
                room.fields.shortDescription.content[0].content[0].value,
              image: {
                url: room.fields.cardImageUrl
              },
              primaryAction: {
                label: room.fields.primaryActionLabel,
                url: room.fields.primaryActionUrl
              },
              secondaryAction: {
                label: room.fields.secondaryActionLabel,
                url: room.fields.secondaryActionUrl
              },
              tertiaryAction: {
                label: room.fields.tertiaryActionLabel,
                url: room.fields.tertiaryActionUrl
              }
            };
          })}
          layout={content.roomCollectionLayout}
        />

        <G2HeroSection
          premium={content.premiumSectionHero.fields.premium}
          title={content.premiumSectionHero.fields.title}
          description={
            content.premiumSectionHero.fields.description.content[0].content[0]
              .value
          }
          images={[
            {
              url: content.premiumSectionHero.fields.room1imageUrl
            }
          ]}
        />

        <PromoCardsRowSection
          title={'Offers & Promos'}
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
                label: 'Ends soon'
              },
              primaryAction: {
                label: 'Book now',
                url:
                  'https://www2.aria.com/en/booking/room-booking.html#/default?programId=279188f0-2e78-4f54-a4c2-703a2c52d0e6&selectedPropertyId=e2704b04-d515-45b0-8afd-4fa1424ff0a8'
              },
              tertiaryAction: {
                label: 'Learn More',
                url:
                  'https://www2.aria.com/en/offers/offer-detail.html#/offerType=ROOM&offerId=279188f0-2e78-4f54-a4c2-703a2c52d0e6&programType=OpenLoop'
              }
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
                  'https://www2.aria.com/en/booking/room-booking.html#/default?programId=580b66b8-f4db-4777-b93a-43bc9c32feb9&selectedPropertyId=e2704b04-d515-45b0-8afd-4fa1424ff0a8'
              },
              tertiaryAction: {
                label: 'Learn More',
                url:
                  'https://vacationsbymgmresorts.poweredbygps.com/g/pt/vacation-packages/?MDPCID=US.TPS.MGM.BRAND-ARIA.EPACKAGE&icid=DMP_Tile_BB_HO_EV_MGMVacations_09042018_LV_AR'
              }
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
                  'https://vacationsbymgmresorts.poweredbygps.com/g/pt/vacation-packages/?MDPCID=US.TPS.MGM.BRAND-ARIA.EPACKAGE&icid=DMP_Tile_BB_HO_EV_MGMVacations_09042018_LV_AR'
              },
              tertiaryAction: {
                label: 'Learn More',
                url:
                  'https://vacationsbymgmresorts.poweredbygps.com/g/pt/vacation-packages/?MDPCID=US.TPS.MGM.BRAND-ARIA.EPACKAGE&icid=DMP_Tile_BB_HO_EV_MGMVacations_09042018_LV_AR'
              }
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
                  'https://world.hyatt.com/content/gp/en/wohpromotions/mgm-vegas-double-points-promotion.html'
              },
              tertiaryAction: {
                label: 'Learn More',
                url:
                  'https://world.hyatt.com/content/gp/en/wohpromotions/mgm-vegas-double-points-promotion.html'
              }
            }
          ]}
        />
      </Layout>
    );
  }
}

export default Index;
