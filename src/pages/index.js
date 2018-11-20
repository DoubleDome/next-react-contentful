import { createClient } from '../../common/contentful';

import React from 'react';
import Layout from '../components/layout';
import G2TextHeaderSection from '../../dmp/components/G2TextHeaderSection/G2TextHeaderSection.component';
import G2HeroSection  from '../../dmp/components/G2HeroSection/G2HeroSection.component';
import G2RoomOverviewCardCollectionSection  from '../../dmp/components/G2RoomOverviewCardCollectionSection/G2RoomOverviewCardCollectionSection.component';
import PromoCardsRowSection from '../../src/components/PromoCardsRowSection/PromoCardsRowSection.component';

class Index extends React.Component {
  static async getInitialProps() {
    const client = createClient();
    const entries = await client.getEntries({
      content_type:'roomLandingPage',
      include: 1
    });

    {/* Todo: input validation, either here or Contentful */}
    return { roomLandingPageProp: entries.items[0],
        textHeader: entries.items[0].fields.textHeader.fields,
        hero: entries.items[0].fields.sectionHero.fields,
        roomCollection: entries.items[0].fields.roomCollection,
        roomCollectionLayout: entries.items[0].roomCollectionLayout,
        secondHero: entries.items[0].fields.premiumSectionHero.fields,
        promoCards: entries.items[0].fields.promoCards,
    };
  }

  render() {
    const content = this.props.roomLandingPageProp.fields;

    const { textHeader, hero, roomCollection, roomCollectionLayout, secondHero, promoCards } = this.props;

    return (
      <Layout>
        <G2TextHeaderSection title={textHeader.title} subtitle={textHeader.subtitle}/>

        {/* GraphQL needed for proper Contentful implementation of Hero */}
        <G2HeroSection
          title={hero.title}
          premium={hero.premium}
          description={hero.description.content[0].content[0].value}
          images={[
            {
              url: hero.room1imageUrl,
              caption: hero.room1caption,
              tertiaryAction: {
                label: 'Check Rates',
                url:
                  hero.room1actionUrl,
              },
            },
            {
              url: hero.room2imageUrl,
              caption: hero.room2caption,
              tertiaryAction: {
                label: 'Check Rates',
                url:
                hero.room2actionUrl,
              },
            },
            {
              url: hero.room3imageUrl,
              caption: hero.room3caption,
              tertiaryAction: {
                label: 'Check Rates',
                url:
                  hero.room3actionUrl
              },
            },
          ]}
        />

        {/* GraphQL version of Hero will look more like this, much cleaner */}
        <G2RoomOverviewCardCollectionSection
            rooms={
              roomCollection.map((entry) => {
                  const room = entry.fields;
                  return (
                  {
                      title: room.title,
                      keyValues: [room.squareFeet, room.bedType, room.maxGuests],
                      description: room.shortDescription.content[0].content[0].value,
                      image: {
                        url: room.cardImageUrl,
                      },
                      primaryAction: {
                        label: room.primaryActionLabel,
                        url: room.primaryActionUrl,
                      },
                      secondaryAction: {
                        label: room.secondaryActionLabel,
                        url: room.secondaryActionUrl,
                      },
                      tertiaryAction: {
                        label: room.tertiaryActionLabel,
                        url: room.tertiaryActionUrl,
                      },
                  }
                )
              })
          }
          layout={roomCollectionLayout}
        />

        <G2HeroSection
          title={secondHero.title}
          premium={secondHero.premium}
          description={secondHero.description.content[0].content[0].value}
          images={[
            {
              url: secondHero.room1imageUrl
            }
          ]}
        />

        {/* TODO: this should pull from Contentful */}
        <PromoCardsRowSection
          title={"Offers & Promos"}
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

      </Layout>
    );
  }
}



export default Index;
