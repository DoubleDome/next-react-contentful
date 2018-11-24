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

  createTextHeader(data) {
    return <G2TextHeaderSection title={data.title} subtitle={data.subtitle} />;
  }
  createHero(data, imageCount) {
    // GraphQL needed for proper Contentful implementation of Hero
    const images = [];
    for (let i = 1; i < imageCount + 1; i++) {
      console.log(i);
      images.push({
        url: data[`room${i}imageUrl`],
        caption: data[`room${i}caption`],
        tertiaryAction: {
          label: data.tertiaryActionLabel,
          url: data[`room${i}actionUrl`],
        },
      });
    }
    return (
      <G2HeroSection
        title={data.title}
        premium={data.premium}
        description={data.description.content[0].content[0].value}
        images={images}
      />
    );
  }
  createRoomOverview(collection, layout) {
    return (
      <G2RoomOverviewCardCollectionSection
        rooms={collection.map(room => {
          return {
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
              url: '/' + room.slug,
            },
            tertiaryAction: {
              label: room.tertiaryActionLabel,
              url: room.tertiaryActionUrl,
            },
          };
        })}
        layout={layout}
      />
    );
  }

  createPromoSection(data) {
    return (
      <PromoCardsRowSection
        title={data.title}
        readMoreButton={{
          label: data.button.label,
          url: data.button.url,
        }}
        cards={data.cards.map(card => {
          return {
            imageUrl: card.imageUrl,
            categoryName: card.categoryName,
            title: card.title,
            description: card.description,
            status: {
              color: card.statusColor ? card.statusColor : '',
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
    );
  }

  render() {
    // This approach allows to reorder the components depending on data coming from the CMS
    const components = [
      this.createTextHeader(this.props.textHeader),
      this.createHero(this.props.hero, 3),
      this.createRoomOverview(
        this.props.roomCollection,
        this.props.roomCollectionLayout,
      ),
      this.createHero(this.props.secondHero, 1),
      this.createPromoSection(this.props.promoSection),
    ];

    return <Layout>{components.map(component => component)}}</Layout>;
  }
}

export default Index;
