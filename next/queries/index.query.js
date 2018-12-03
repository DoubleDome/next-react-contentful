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
      `
    );
  }
}