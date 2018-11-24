import { createDeliveryClient } from '../integrations/contentful';
import config from '../integrations/contentful/config';

import React from 'react';
import Layout from '../layouts/layout';
import G2TextHeaderSection from '../../dmp/components/G2TextHeaderSection/G2TextHeaderSection.component';
import G2HeroSection from '../../dmp/components/G2HeroSection/G2HeroSection.component';
import G2RoomOverviewCardCollectionSection from '../../dmp/components/G2RoomOverviewCardCollectionSection/G2RoomOverviewCardCollectionSection.component';
import PromoCardsRowSection from '../../src/components/PromoCardsRowSection/PromoCardsRowSection.component';

class Index extends React.Component {
  static async getInitialProps() {
    const client = createDeliveryClient(config.spaces.rooms);
    const entries = await client.getEntries({
      content_type: 'roomLandingPage',
      include: 1,
    });

    {
      /* Todo: input validation, either here or Contentful */
    }
    return {
      textHeader: entries.items[0].fields.textHeader.fields,
      hero: entries.items[0].fields.sectionHero.fields,
      roomCollection: entries.items[0].fields.roomCollection.map(room => {
        return room.fields;
      }),
      roomCollectionLayout: entries.items[0].roomCollectionLayout,
      secondHero: entries.items[0].fields.premiumSectionHero.fields,
      promoSection: {
        title: entries.items[0].fields.promoSectionTitle,
        button: {
          label: entries.items[0].fields.promoSectionButtonLabel,
          url: entries.items[0].fields.promoSectionButtonUrl,
        },
        cards: entries.items[0].fields.promoCards.map(card => {
          return card.fields;
        }),
      },
    };
  }

  render() {
    const {
      textHeader,
      hero,
      roomCollection,
      roomCollectionLayout,
      secondHero,
      promoSection,
    } = this.props;

    return (
      <Layout>
        <G2TextHeaderSection
          title={textHeader.title}
          subtitle={textHeader.subtitle}
        />

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
                label: hero.tertiaryActionLabel,
                url: hero.room1actionUrl,
              },
            },
            {
              url: hero.room2imageUrl,
              caption: hero.room2caption,
              tertiaryAction: {
                label: hero.tertiaryActionLabel,
                url: hero.room2actionUrl,
              },
            },
            {
              url: hero.room3imageUrl,
              caption: hero.room3caption,
              tertiaryAction: {
                label: hero.tertiaryActionLabel,
                url: hero.room3actionUrl,
              },
            },
          ]}
        />

        {/* GraphQL version of Hero will look more like this, much cleaner */}
        <G2RoomOverviewCardCollectionSection
            rooms={
              roomCollection.map((room) => {
                  return (
                  {
                      title: room.title,
                      keyValues: [room.squareFeet, room.bedType, room.maxGuests],
                      description: room.shortDescription.content[0].content[0].value,
                      image: {
                        url: room.cardImageUrl
                      },
                      primaryAction: {
                        label: room.primaryActionLabel,
                        url: room.primaryActionUrl,
                      },
                      secondaryAction: {
                        label: room.secondaryActionLabel,
                        url: '/' + room.slug,
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
              url: secondHero.room1imageUrl,
            },
          ]}
        />

        <PromoCardsRowSection
          title={promoSection.title}
          readMoreButton={{
            label: promoSection.button.label,
            url: promoSection.button.url,
          }}
          cards={promoSection.cards.map(card => {
            return {
              imageUrl: card.imageUrl,
              categoryName: card.categoryName,
              title: card.title,
              description: card.description,
              status: {
                color: card.statusColor? card.statusColor:'',
                label: card.statusLabel,
              },
              primaryAction: {
                label: card.primaryActionLabel,
                url: card.primaryActionUrl,
              },
              tertiaryAction: {
                label: card.tertiaryActionLabel,
                url: card.tertiaryActionUrl,
              },
            };
          })}
        />
      </Layout>
    );
  }
}

export default Index;