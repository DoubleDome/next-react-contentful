module.exports = {
    gqlQuery(id) {
     return( 
        `   
query roomDetailPageQuery {
  roomDetailPageCollection(where: {slug: "${id}"}) {
    items {
      ... on RoomDetailPage {
        componentsListCollection {
          items {
            ... on ComponentPlacement {
              component {
                name
              }
              dataField
            }
          }
        }
        overviewHeaderPrimaryActionLabel
        overviewHeaderPrimaryActionUrl
        overviewHeaderSecondaryActionLabel
        overviewHeaderSecondaryActionUrl
        overviewBodyPrimaryActionLabel
        overviewBodyPrimaryActionUrl
        overviewBodyTertiaryActionLabel
        overviewBodyTertiaryActionUrl
        sidebarSectionHeadlineTitle
        sidebarSectionHeadlineText
        sidebarSectionHeadlineText
        highlightCarouselTitle
        twoColumnHeroTitle
        twoColumnHeroImageUrl
        twoColumnHeroSubtitle
        twoColumnHeroBody
        twoColumnHeroActionLink
        twoColumnHeroSidebarHeadline
        similarRoomsSectionTitle
        similarRoomsActionText
        twoColumnHeroSidebarContent
        accordionTitle
        contact {
          ... on ContactInformation {
            phoneNumber
            emailAddress
          }
        }
        room {
          subtitle
          secondaryCopy
          brand
          cardImageUrl
          title
          squareFeet
          bedType
          maxGuests
          otherAmenitiesCollection {
            items {
              ... on RoomAmenity {
                title
                itemList
              }
            }
          }
          featuredAmenitiesCollection {
            items {
              ... on RoomAmenity {
                title
              }
            }
          }
          unifiedGalleryCollection {
            items {
              description
              imageUrl
            }
          }
          highlightsCollection {
            items {
              title
              description
              imageUrl
            }
          }
          galleryImageUrls
          longDescription {
            json
          }
          lounge {
            title
            loungeHours
          }
          similarRoomsCollection(limit: 1) {
            items {
              ... on Room {
                squareFeet
                bedType
                title
                maxGuests
                shortDescription {
                  json
                }
                cardImageUrl
                linkedFrom {
                  roomDetailPageCollection {
                    items {
                      slug
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

      `
    );
  },
}