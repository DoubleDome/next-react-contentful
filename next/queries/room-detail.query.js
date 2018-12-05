module.exports = {
    gqlQuery(id) {
     return( 
        `   
          query roomDetailPageQuery {
            roomDetailPageCollection(where: {slug: "tower-suite"}) {
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
                    similarRoomsCollection {
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
                         `<p>${  room.longDescription.json.content[0].content[0].value  }</p>`,
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
                                type: 'inline-text',
                                label: hourItem.label,
                                text: hourItem.text,
                             })),
                       }),
                     ],
                     heroImages: room.galleryImageUrls.map((image) => ({
                            url: image
                        })),
                   },
                   highlightCarousel: {
                     title: page.highlightCarouselTitle,
                     cards: room.highlightsCollection.items.map(highlight => ({
                            imageUrl: highlight.imageUrl,
                             title: highlight.title,
                             description: highlight.description,
                         })), 
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
                     items: room.unifiedGalleryCollection.items.map((item)=>({
                                imageUrl: item.imageUrl,
                                caption: item.description,
                        })),
                   },
                   accordion: {
                     title: page.accordionTitle,
                     items: room.otherAmenitiesCollection.items.map((item) => { // eslint-disable-line consistent-return
                          if(item.itemList){   
                              return({
                                title: item.title,
                                listContents: item.itemList,
                             });
                         }
                        })
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
                    contentHTML: page.twoColumnHeroBody,
                    sidebarSections: [
                      {
                        headline: {
                          title: page.twoColumnHeroSidebarHeadline,
                        },
                        items: [
                          {
                            type: 'content',
                            contentHTML:
                              page.twoColumnHeroSidebarContent,
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