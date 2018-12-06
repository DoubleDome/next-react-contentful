module.exports = {
    gqlQuery(id) {
     return( 
      `
        query roomLandingPageQuery {
          roomLandingPage(id: "${id}", preview: true) {
            title
            ...textHeader
            ...componentList
            ...firstSectionHero
            ...roomSelection
            ...secondSectionHero
            ...promoSection
          }
        }
        
        fragment textHeader on RoomLandingPage {
          textHeaderTitle
          textHeaderSubtitle
        }
        
        fragment promoSection on RoomLandingPage {
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
        
        fragment componentList on RoomLandingPage {
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
        }
        
        fragment firstSectionHero on RoomLandingPage {
          firstSectionHeroPremium
          firstSectionHeroTitle
          firstSectionHeroDescription
          firstSectionHeroRoomsCollection {
            items {
              ... on Room {
                caption: title
                url: cardImageUrl
              }
            }
          }
          firstSectionHeroLogoUrl
        }
        
        fragment roomSelection on RoomLandingPage {
          roomCollectionLayout
          roomCollection: roomCollectionCollection {
            items {
              ... on Room {
                title
                squareFeet
                bedType
                maxGuests
                cardImageUrl
                linkedFrom {
                  roomDetailPageCollection(limit: 1) {
                    items {
                      slug
                    }
                  }
                }
                shortDescription
              }
            }
          }
        }
        
        fragment secondSectionHero on RoomLandingPage {
          secondSectionHeroRoomsCollection {
            items {
              ... on Room {
                url: cardImageUrl
              }
            }
          }
          secondSectionHeroTitle
          secondSectionHeroDescription
          secondSectionHeroSecondaryActionLabel
          secondSectionHeroSecondaryActionUrl
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
              ...room,
              tertiaryAction: {
                label: page.roomPrimaryActionLabels || 'Check Rates',
                url: '/'
              }
            })),
            description: page.firstSectionHeroDescription
          },
          roomCollection: page.roomCollection.items.map(room => ({
            ...room,
            keyValues: [
              `${room.squareFeet.toLocaleString('en')} Sqft`,
              room.bedType,
              `Max Guests ${room.maxGuests}`
            ],
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
              ...room,
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
              ...card,
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