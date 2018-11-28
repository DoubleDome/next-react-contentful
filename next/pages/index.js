import React from 'react';
import { createDeliveryClient, queryContent } from '../integrations/contentful';
import config from '../integrations/contentful/config';
import Layout from '../layouts/layout';
import G2TextHeaderSection from '../../dmp/components/G2TextHeaderSection/G2TextHeaderSection.component';
import G2HeroSection from '../../dmp/components/G2HeroSection/G2HeroSection.component';
import G2RoomOverviewCardCollectionSection from '../../dmp/components/G2RoomOverviewCardCollectionSection/G2RoomOverviewCardCollectionSection.component';
import PromoCardsRowSection from '../../src/components/PromoCardsRowSection/PromoCardsRowSection.component';
import "isomorphic-fetch";

class Index extends React.Component {
  static async getInitialProps() {
    let pageComponents;
    
    // Hard coding in the only room landing page ID we have right now
    const query = `
      query rlpQuery {
        roomLandingPage(id: "4dxYMm3HWEaoA0qocm4SaQ") {
          title
          textHeaderTitle
          textHeaderSubtitle
          firstSectionHeroPremium
          firstSectionHeroTitle
          firstSectionHeroDescription
          firstSectionHeroRoomsCollection {
            items {
              ... on Room {
                title
                cardImageUrl
              }
            }
          }
          firstSectionHeroLogoUrl
          roomCollectionCollection {
            items {
              ... on Room {
                title
                squareFeet
                bedType
                maxGuests
                shortDescription {
                  json
                }
              }
            }
          }
        }
      }
    `;

    const gqlClient = await queryContent(query, config.spaces.rooms)
    .then((res) => {
      const entries = res.data.roomLandingPage;
      console.log(entries);
      pageComponents = {
          textHeader: {
            title: entries.textHeaderTitle,
            subtitle: entries.textHeaderSubtitle,
          },
          hero: {
            premium: entries.firstSectionHeroPremium,
            title: entries.firstSectionHeroTitle,
            images: entries.firstSectionHeroRoomsCollection.items.map((room) => {
              return ({
                url: room.cardImageUrl,
                caption: room.title,
                tertiaryAction: {
                  label: entries.roomPrimaryActionLabels || 'Check Rates',
                  url: '/',
                },
              });
            }),
            description: entries.firstSectionHeroDescription
          },
          roomCollection: entries.roomCollection.map(entry => {
            const room = entry.fields;
            return {
              title: room.title,
              keyValues: [`${room.squareFeet  } Sqft`, room.bedType, `Max Guests ${  room.maxGuests}`],
              description: room.shortDescription.content[0].content[0].value,
              image: {
                url: room.cardImageUrl,
              },
              primaryAction: {
                label: entries.roomPrimaryActionLabels || 'Check Rates',
                url: '/',
              },
              secondaryAction: {
                label: entries.roomSecondaryActionLabels || 'View Room Details',
                url: '/',
              },
              tertiaryAction: {
                label: entries.roomTertiaryActionLabels || 'Compare',
                url: '/',
              },
            };
         }),
          roomCollectionLayout: entries.roomCollectionLayout,
          secondHero: {
            premium: true,
            title: entries.secondSectionHeroTitle,
            images: entries.secondSectionHeroRooms.map((entry) => {
              const room = entry.fields;
              return ({
                url: room.cardImageUrl,
                tertiaryAction: {
                  label: entries.roomTertiaryActionLabels || 'Compare',
                  url: '/'
                },
              });
            }),
            description: entries.secondSecondHeroDescription,
            secondaryAction: {
              label: entries.secondSectionHeroSecondaryActionLabel,
              url: entries.secondSectionHeroSecondaryActionUrl,
            }
          },
          promoSection: {
            title: entries.promoSectionTitle,
            button: {
              label: entries.promoSectionButtonLabel,
              url: entries.promoSectionButtonUrl,
            },
            cards: entries.promoCards.map(promoCard => {
            const card = promoCard.fields;
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
            })
          },
        };
    }).catch(err => {
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
      <G2RoomOverviewCardCollectionSection
        rooms={collection}
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
        cards={data.cards}
      />
    );
  }

  render() {
    // This approach allows to reorder the components depending on data coming from the CMS
    const components = [
      this.createTextHeader(this.props.textHeader),
      this.createHero(this.props.hero),
      this.createRoomOverview(
        this.props.roomCollection,
        this.props.roomCollectionLayout,
      ),
      this.createHero(this.props.secondHero, 1),
      this.createPromoSection(this.props.promoSection),
    ];

    return (
      <Layout>
        {components.map(component => component)}
      </Layout>
    );
  }
}

export default Index;
