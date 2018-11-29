import React from 'react';
import { queryContent } from '../integrations/contentful';
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
    const gqlQuery = `
     query roomLandingPageQuery {
        roomLandingPage(id: "4dxYMm3HWEaoA0qocm4SaQ") {
          title
          textHeaderTitle
          textHeaderSubtitle
          componentOrder
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
          roomCollectionLayout
          roomCollectionCollection {
            items {
              ... on Room {
                title
                squareFeet
                bedType
                maxGuests
                cardImageUrl
                linkedFrom {
                  roomDetailPageCollection {
                    items {
                      slug
                    }
                  }
                }
                shortDescription {
                  json
                }
              }
            }
          }
          secondSectionHeroRoomsCollection {
            items {
              ... on Room {
                cardImageUrl
              }
            }
          }
          secondSectionHeroTitle
          secondSectionHeroDescription
          secondSectionHeroSecondaryActionLabel
          secondSectionHeroSecondaryActionUrl
          promoSectionTitle
          promoSectionButtonLabel
          promoSectionButtonUrl
          promoCardsCollection {
            items {
              ... on PromoCard {
                imageUrl
                title
                description
                categoryName
                statusColor
                statusLabel
                primaryActionUrl
                primaryActionLabel
                tertiaryActionUrl
                tertiaryActionLabel
              }
            }
          }
        }
      }     
      `;

    await queryContent(gqlQuery, config.spaces.rooms) // eslint-disable-line no-use-before-define
    .then((res) => {
      const page = res.data.roomLandingPage;
      pageComponents = {
          componentOrder: page.componentOrder,
          textHeader: {
            title: page.textHeaderTitle,
            subtitle: page.textHeaderSubtitle,
          },
          hero: {
            premium: page.firstSectionHeroPremium,
            title: page.firstSectionHeroTitle,
            images: page.firstSectionHeroRoomsCollection.items.map((room) => ({
                url: room.cardImageUrl,
                caption: room.title,
                tertiaryAction: {
                  label: page.roomPrimaryActionLabels || 'Check Rates',
                  url: '/',
                },
              })),
            description: page.firstSectionHeroDescription
          },
          roomCollection: page.roomCollectionCollection.items.map(room => ({
              title: room.title,
              keyValues: [`${room.squareFeet} Sqft`, room.bedType, `Max Guests ${room.maxGuests}`],
              description: room.shortDescription.json.content[0].content[0].value,
              image: {
                url: room.cardImageUrl,
              },
              primaryAction: {
                label: page.roomPrimaryActionLabels || 'Check Rates',
                url: '/',
              },
              secondaryAction: {
                label: page.roomSecondaryActionLabels || 'View Room Details',
                url: `/${  room.linkedFrom.roomDetailPageCollection.items[0].slug}`,
              },
              tertiaryAction: {
                label: page.roomTertiaryActionLabels || 'Compare',
                url: '/',
              },
            })),
          roomCollectionLayout: page.roomCollectionLayout,
          secondHero: {
            premium: true,
            title: page.secondSectionHeroTitle,
            images: page.secondSectionHeroRoomsCollection.items.map((room) => ({
                url: room.cardImageUrl,
                tertiaryAction: {
                  label: page.roomTertiaryActionLabels || 'Compare',
                  url: '/'
                },
              })),
            description: page.secondSecondHeroDescription,
            secondaryAction: {
              label: page.secondSectionHeroSecondaryActionLabel,
              url: page.secondSectionHeroSecondaryActionUrl,
            }
          },
          promoSection: {
            title: page.promoSectionTitle,
            button: {
              label: page.promoSectionButtonLabel,
              url: page.promoSectionButtonUrl,
            },
            cards: page.promoCardsCollection.items.map(card => ({
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
              }))
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
    const components = [];
    
    this.props.componentOrder.forEach((component) => {
        if(component === "Text Header") {
            components.push(this.createTextHeader(this.props.textHeader));
        }
        else if(component === "Section Hero") {
            components.push(this.createHero(this.props.hero));
        }
        else if(component === "Room Cards") {
            components.push(this.createRoomOverview(
              this.props.roomCollection,
              this.props.roomCollectionLayout,
            ));
        }
        else if(component === "Premium Hero") {
            components.push(this.createHero(this.props.secondHero, 1));
        }
        else if(component === "Promotions") {
            components.push(this.createPromoSection(this.props.promoSection));
        }
    });

    return (
      <Layout>
        {components.map(component => component)}
      </Layout>
    );
  }
}

export default Index;