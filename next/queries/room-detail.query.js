import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

module.exports = {
    gqlQuery(id) {
     return( 
        `   
          query roomDetailPageQuery {
            roomDetailPageCollection(where: {slug: "${id}"}) {
              items {
                ... on RoomDetailPage {
                  ...componentList
                  ...overview
                  ...overviewSidebar
                  ...componentLabels
                  ...twoColumnHero
                  room {
                    ...generalRoomDetails
                    ...otherAmenities
                    ...featuredAmenities
                    ...unifiedGallery
                    ...highlights
                    ...lounge
                    ...similarRooms
                  }
                }
              }
            }
          }
          
          fragment componentList on RoomDetailPage {
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
          }
          
          fragment overview on RoomDetailPage {
            overviewHeaderPrimaryActionLabel
            overviewHeaderPrimaryActionUrl
            overviewHeaderSecondaryActionLabel
            overviewHeaderSecondaryActionUrl
            overviewBodyPrimaryActionLabel
            overviewBodyPrimaryActionUrl
            overviewBodyTertiaryActionLabel
            overviewBodyTertiaryActionUrl
          }
          
          fragment componentLabels on RoomDetailPage {
            similarRoomsSectionTitle
            similarRoomsActionText
            accordionTitle
            highlightCarouselTitle
          }
          
          fragment overviewSidebar on RoomDetailPage {
            sidebarSectionHeadlineTitle
            sidebarSectionHeadlineText
            sidebarSectionHeadlineText
            contact {
              ... on ContactInformation {
                phoneNumber
                emailAddress
              }
            }
          }
          
          fragment twoColumnHero on RoomDetailPage {
            twoColumnHeroTitle
            twoColumnHeroImageUrl
            twoColumnHeroSubtitle
            twoColumnHeroBody {
              html: json
            }
            twoColumnHeroActionLink
            twoColumnHeroSidebarHeadline
            twoColumnHeroSidebarContent {
              html: json
            }
          }
          
          fragment featuredAmenities on Room {
            featuredAmenitiesCollection {
              items {
                ... on RoomAmenity {
                  title
                }
              }
            }
          }
          
          fragment unifiedGallery on Room {
            unifiedGalleryCollection {
              items {
                caption: description
                imageUrl
              }
            }
          }
          
          fragment highlights on Room {
            highlightsCollection {
              items {
                title
                description
                imageUrl
              }
            }
          }
          
          fragment otherAmenities on Room {
            otherAmenitiesCollection {
              items {
                ... on RoomAmenity {
                  title
                  listContents: itemList
                }
              }
            }
          }
          
          fragment similarRooms on Room {
            similarRoomsCollection(limit: 1) {
              items {
                ... on Room {
                  squareFeet
                  bedType
                  title
                  maxGuests
                  shortDescription
                  cardImageUrl
                  linkedFrom {
                    roomDetailPageCollection(limit: 1) {
                      items {
                        slug
                      }
                    }
                  }
                }
              }
            }
          }
          
          fragment lounge on Room {
            lounge {
              title
              loungeHours
            }
          }
          
          fragment generalRoomDetails on Room {
            subtitle
            brand
            cardImageUrl
            title
            squareFeet
            bedType
            maxGuests
            galleryImageUrls
            longDescription {
              json
            }
          }
      `
    );
  },
  translateResponse(page) {
    const room = page.room;
    
    return (
      { 
                  componentsCollection: page.componentsListCollection.items,
                  room: {
                   componentOrder: page.componentOrder,
                   
                   overviewHeader: {
                     header: {
                       subtitle: room.brand,
                       title: room.title,
                       primaryAction: {
                         label: page.overviewHeaderPrimaryActionLabel || 'Check Rates',
                         url: page.overviewHeaderPrimaryActionUrl || '/',
                       },
                       secondaryAction: {
                         label: page.overviewHeaderSecondaryActionLabel || 'Compare',
                         url: page.overviewHeaderSecondaryAction || '/',
                       },
                     },
                     main: {
                       title: room.subtitle,
                       content:
                         documentToHtmlString(room.longDescription.json),
                       primaryAction: {
                         label: page.overviewBodyPrimaryActionLabel || 'Check Rates',
                         url: page.overviewBodyPrimaryActionUrl || '/',
                       },
                       tertiaryAction: {
                         label: page.overviewBodyTertiaryActionLabel || 'Check Rates',
                         url: page.overviewBodyTertiaryActionUrl || '/',
                       },
                     },
                     sidebarSections: [
                       {
                         headline: {
                           title: (page.sidebarSectionHeadlineText && page.sidebarSectionHeadlineTitle) ? page.sidebarSectionHeadlineTitle : 'Type',
                           content: {
                             type: 'text',
                             text: (page.sidebarSectionHeadlineText && page.sidebarSectionHeadlineTitle) ? page.sidebarSectionHeadlineText : room.brand,
                           },
                         },
                       },
                       {
                         headline: {
                           title: 'Suite Details',
                         },
                         items: [
                           {
                             type: 'inline-text',
                             label: 'size',
                             text: `${room.squareFeet.toLocaleString('en')} Sqft`,
                           },
                           {
                             type: 'inline-text',
                             label: 'beds',
                             text: room.bedType,
                           },
                           {
                             type: 'inline-text',
                             label: 'max guests',
                             text: room.maxGuests,
                           },
                         ],
                       },
                       (room.featuredAmenitiesCollection.items && {
                         headline: {
                           title: 'Featured Amenities',
                         },
                         items: [
                           {
                             type: 'content',
                             contentHTML:
                               `<ul>${
                               room.featuredAmenitiesCollection.items.map((amenity) =>  // eslint-disable-line consistent-return
                                        `<li>${amenity.title}</li>`
                               ).toString().replace(',','')
                               }</ul>`,
                           },
                         ],
                       }),
                        (room.lounge &&   {
                         headline: {
                           title: 'Lounge Hours',
                         },
                         items:room.lounge.loungeHours.map((hourItem) => ({
                                ...hourItem,
                                type: 'inline-text'
                             })),
                       }),
                     ],
                     heroImages: room.galleryImageUrls.map((image) => ({
                            url: image
                        })),
                   },
                   highlightCarousel: {
                     title: page.highlightCarouselTitle,
                     cards: room.highlightsCollection.items, 
                   },
                   gallerySection: {
                     title: "Experience The Room",
                     virtualTourHero: {
                       tours: [
                         {
                           imageUrl: room.cardImageUrl,
                           title: `${room.title} Virtual Tour`,
                           description: room.secondaryCopy,
                           button: {
                             label: 'Take Virtual Tour',
                             url: '/',
                           },
                         },
                       ],
                     },
                     items: room.unifiedGalleryCollection.items,
                   },
                   accordion: {
                     title: page.accordionTitle,
                     items: room.otherAmenitiesCollection.items
                   },
                   cardRow: {
                     title: page.similarRoomsSectionTitle,
                     readMoreButton: {
                       url: '/',
                       label: page.similarRoomsActionText || 'View All',
                     },
                     rooms: room.similarRoomsCollection.items.map((similarRoom) => ({
                            title: similarRoom.title,
                             keyValues: [`${similarRoom.squareFeet.toLocaleString('en')} Sqft`, similarRoom.bedType, `Max Guests ${similarRoom.maxGuests}`],
                             description: similarRoom.shortDescription,
                             image: {
                               url: similarRoom.cardImageUrl,
                             },
                             primaryAction: {
                               label: 'Check Rates',
                               url: '/',
                             },
                             secondaryAction: {
                               label: 'Room Details',
                               url: `/${similarRoom.linkedFrom.roomDetailPageCollection.items[0].slug}`,
                             },
                             tertiaryAction: {
                               label: 'Compare',
                               url: '/',
                             },
                        })),
                   },
                   twoColumnHero: {
                    title: page.twoColumnHeroTitle,
                    image: {
                      url: page.twoColumnHeroImageUrl,
                    },
                    subtitle: page.twoColumnHeroSubtitle,
                    actions: [
                      {
                        variant: 'secondary',
                        label: 'Learn More',
                        url: page.twoColumnHeroActionLink,
                      },
                    ],
                    contentHTML: documentToHtmlString(page.twoColumnHeroBody.html),
                    sidebarSections: [
                      {
                        headline: {
                          title: page.twoColumnHeroSidebarHeadline,
                        },
                        items: [
                          {
                            type: 'content',
                            contentHTML:
                              documentToHtmlString(page.twoColumnHeroSidebarContent.html),
                          },
                          {
                            type: 'inline-text',
                            label: 'Phone',
                            text: page.contact.phoneNumber,
                          },
                          {
                            type: 'inline-link',
                            label: 'Email',
                            linkText: page.contact.emailAddress,
                            linkUrl: `mailto:${page.contact.emailAddress}`,
                          },
                        ],
                      },
                    ],
                  }
                 },
            }
    );
  }
}