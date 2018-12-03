import React from 'react';
import { queryContent } from '../integrations/contentful';
import config from '../integrations/contentful/config';
import Layout from '../layouts/layout';
import G2TextHeaderSection from '../../dmp/components/G2TextHeaderSection/G2TextHeaderSection.component';
import G2HeroSection from '../../dmp/components/G2HeroSection/G2HeroSection.component';
import G2RoomOverviewCardCollectionSection from '../../dmp/components/G2RoomOverviewCardCollectionSection/G2RoomOverviewCardCollectionSection.component';
import PromoCardsRowSection from '../../src/components/PromoCardsRowSection/PromoCardsRowSection.component';
import 'isomorphic-fetch';
import { gqlQuery } from '../queries/index.query';

class Index extends React.Component {
  static async getInitialProps() {
    let pageComponents;

    // Hard coding in the only room landing page ID we have right now
    await queryContent(gqlQuery('4dxYMm3HWEaoA0qocm4SaQ'), config.spaces.rooms) // eslint-disable-line no-use-before-define
      .then(res => {
        const page = res.data.roomLandingPage;

        pageComponents = {
          componentsCollection: page.componentsCollection.items,
          textHeader: {
            title: page.textHeaderTitle,
            subtitle: page.textHeaderSubtitle
          },
          hero: {
            premium: page.firstSectionHeroPremium,
            title: page.firstSectionHeroTitle,
            images: page.firstSectionHeroRoomsCollection.items.map(room => ({
              url: room.cardImageUrl,
              caption: room.title,
              tertiaryAction: {
                label: page.roomPrimaryActionLabels || 'Check Rates',
                url: '/'
              }
            })),
            description: page.firstSectionHeroDescription
          },
          roomCollection: page.roomCollectionCollection.items.map(room => ({
            title: room.title,
            keyValues: [
              `${room.squareFeet} Sqft`,
              room.bedType,
              `Max Guests ${room.maxGuests}`
            ],
            description: room.shortDescription.json.content[0].content[0].value,
            image: {
              url: room.cardImageUrl
            },
            primaryAction: {
              label: page.roomPrimaryActionLabels || 'Check Rates',
              url: '/'
            },
            secondaryAction: {
              label: page.roomSecondaryActionLabels || 'View Room Details',
              url: `/`
            },
            tertiaryAction: {
              label: page.roomTertiaryActionLabels || 'Compare',
              url: '/'
            }
          })),
          roomCollectionLayout: page.roomCollectionLayout,
          secondHero: {
            premium: true,
            title: page.secondSectionHeroTitle,
            images: page.secondSectionHeroRoomsCollection.items.map(room => ({
              url: room.cardImageUrl,
              tertiaryAction: {
                label: page.roomTertiaryActionLabels || 'Compare',
                url: '/'
              }
            })),
            description: page.secondSecondHeroDescription,
            secondaryAction: {
              label: page.secondSectionHeroSecondaryActionLabel,
              url: page.secondSectionHeroSecondaryActionUrl
            }
          },
          promoSection: {
            title: page.promoSectionTitle,
            button: {
              label: page.promoSectionButtonLabel,
              url: page.promoSectionButtonUrl
            },
            cards: page.promoCardsCollection.items.map(card => ({
              imageUrl: card.imageUrl,
              categoryName: card.categoryName,
              title: card.title,
              description: card.description,
              status: {
                color: card.statusColor ? card.statusColor : '',
                label: card.statusLabel
              },
              primaryAction: {
                label: card.primaryActionLabel,
                url: card.primaryActionUrl
              },
              tertiaryAction: {
                label: card.tertiaryActionLabel,
                url: card.tertiaryActionUrl
              }
            }))
          }
        };
      })
      .catch(err => {
        console.log(err);
      });

    return pageComponents;
  }

  createTextHeader(data) {
    return <G2TextHeaderSection title={data.title} subtitle={data.subtitle} />;
  }

  createHero(data) {
    return (
      <G2HeroSection
        title={data.title}
        premium={data.premium}
        description={data.description}
        images={data.images}
        secondaryAction={data.secondaryAction}
      />
    );
  }

  createRoomOverview(collection, layout) {
    return (
      <G2RoomOverviewCardCollectionSection rooms={collection} layout={layout} />
    );
  }

  createPromoSection(data) {
    return (
      <PromoCardsRowSection
        title={data.title}
        readMoreButton={{
          label: data.button.label,
          url: data.button.url
        }}
        cards={data.cards}
      />
    );
  }

  santizeComponentCollection() {
    const result = [];
    this.props.componentsCollection.forEach(component => {
      result.push({
        name: component.component.name,
        dataField: component.dataField
      });
    });
    return result;
  }

  render() {
    // This approach allows to reorder the components depending on data coming from the CMS
    const components = [];

    const sanitizedCollection = this.santizeComponentCollection(
      this.props.componentsCollection
    );

    sanitizedCollection.forEach(component => {
      switch (component.name) { // eslint-disable-line default-case
        case 'G2TextHeaderSection':
          components.push(
            this.createTextHeader(this.props[component.dataField])
          );
          break;
        case 'G2HeroSection':
          components.push(this.createHero(this.props[component.dataField]));
          break;
        case 'G2RoomOverviewCardCollectionSection':
          components.push(
            this.createRoomOverview(
              this.props[component.dataField],
              this.props.roomCollectionLayout
            )
          );
          break;
        case 'PromoCardsRowSection':
          components.push(
            this.createPromoSection(this.props[component.dataField])
          );
          break;
      }
    });

    return <Layout>{components.map(component => component)}</Layout>;
  }
}

export default Index;
