module.exports = {
    gqlQuery(id) {
     return( 
      `
        query roomLandingPageQuery {roomLandingPage(id: "${id}") {
          title
          textHeaderTitle
          textHeaderSubtitle
          componentOrder
          componentsCollection {
            items {
              ... on ComponentPlacement {
                component {
                  name
                }
                dataField
              }
            }
          }
      
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
                  roomDetailPageCollection(limit:1) {
                    items {
                      slug
                    }
                  }
                }
                shortDescription
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
      `
    );
  },
    translateResponse(page) {
    const room = page.room;
    return (
    {
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
              `${room.squareFeet.toLocaleString('en')} Sqft`,
              room.bedType,
              `Max Guests ${room.maxGuests}`
            ],
            description: room.shortDescription,
            image: {
              url: room.cardImageUrl
            },
            primaryAction: {
              label: page.roomPrimaryActionLabels || 'Check Rates',
              url: '/'
            },
            secondaryAction: {
              label: page.roomSecondaryActionLabels || 'View Room Details',
              url: `/${room.linkedFrom.roomDetailPageCollection.items[0].slug}`
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
        }
    );
  },
}