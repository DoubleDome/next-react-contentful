import React from 'react';
import { queryContent } from '../integrations/contentful/index';
import config from '../integrations/contentful/config';
import Layout from '../layouts/layout';
import G2RoomOverviewHeaderSection from '../../dmp/components/G2RoomOverviewHeaderSection/G2RoomOverviewHeaderSection.component';
import G2HighlightCarouselSection from '../../dmp/components/G2HighlightCarouselSection/G2HighlightCarouselSection.component';
import G2AccordionSection from '../../dmp/components/G2AccordionSection/G2AccordionSection.component';
import G2GallerySection from '../../dmp/components/G2GallerySection/G2GallerySection.component';
import G2TwoColumnHeroSection from '../../dmp/components/G2TwoColumnHeroSection/G2TwoColumnHeroSection.component';
import G2RoomOverviewCardRowSection from '../../dmp/components/G2RoomOverviewCardRowSection/G2RoomOverviewCardRowSection.component';
import "isomorphic-fetch";

class RoomDetail extends React.Component {
    static async getInitialProps({query}) {
        let page;
        let room;
        const gqlQuery = `
            query roomDetailPageQuery {
              roomDetailPageCollection(where: {slug: "${query.id}"}) {
                items {
                  ... on RoomDetailPage {
                    componentOrder
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
                    accordionItemsCollection {
                      items {
                        ... on AccordionItem {
                          title
                          itemList
                        }
                      }
                    }
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
                      unifiedGalleryCollection {
                        items {
                          title
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
         `;

        await queryContent(gqlQuery, config.spaces.rooms) // eslint-disable-line no-use-before-define
        .then((res) => {
          /*
            Can't destructure these due to the names of the actual endpoints.
            This would destructure the room declaration but it's confusing:
              
              ({room:room} = page); // eslint-disable-line no-useless-rename
              
            "..When Not To Use It...If you want to be able to access
            array indices or object properties directly..."
            https://eslint.org/docs/rules/prefer-destructuring
          */
          page = res.data.roomDetailPageCollection.items[0]; // eslint-disable-line prefer-destructuring
          room = page.room; // eslint-disable-line prefer-destructuring
        });
    
        return { 
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
                             text: `${room.squareFeet} Sqft`,
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
                       {
                         headline: {
                           title: 'Featured Amenities',
                         },
                         items: [
                           {
                             type: 'content',
                             contentHTML:
                               '<ul><li>Strip View</li><li>Pre-Arrival Concierge</li><li>Lounge Access</li></ul>',
                           },
                         ],
                       },
                        (room.lounge &&   {
                         headline: {
                           title: 'Lounge Hours',
                         },
                         items: room.lounge.loungeHours.map((hourItem) => ({
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
                                caption: item.title,
                        })),
                   },
                   accordion: {
                     title: page.accordionTitle,
                     items: page.accordionItemsCollection.items.map((item) => ({
                            title: item.title,
                            listContents: item.itemList,
                         }))
                   },
                   cardRow: {
                     title: page.similarRoomsSectionTitle,
                     readMoreButton: {
                       url: '/',
                       label: page.similarRoomsActionText || 'View All',
                     },
                     rooms: room.similarRoomsCollection.items.map((similarRoom) => ({
                            title: similarRoom.title,
                             keyValues: [`${similarRoom.squareFeet} Sqft`, similarRoom.bedType, `Max Guests ${similarRoom.maxGuests}`],
                             description: similarRoom.shortDescription.json.content[0].content[0].content[0].content[0].value,
                             image: {
                               url: similarRoom.cardImageUrl,
                             },
                             primaryAction: {
                               label: 'Check Rates',
                               url: '/',
                             },
                             secondaryAction: {
                               label: 'Room Details',
                               url: `/${  similarRoom.linkedFrom.roomDetailPageCollection.items.slug}`,
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
                 };
      }



    createOverviewHeader(data) {
      return (
        <G2RoomOverviewHeaderSection
          {...data
          }
        />
      );
    }

    createHighlightCarousel(data) {
      return (
        <G2HighlightCarouselSection
          title={data.title}
          cards={data.cards}
        />
      )
    }

    createGallery(data) {
      return (
        <G2GallerySection
          title={data.title}
          virtualTourHero={data.virtualTourHero}
          items={data.items}
        />
      )
    }

    createAccordion(data) {
      return (
        <G2AccordionSection
          {...data
          }
        />
      )
    }

    createCardRow(data) {
      return (
        <G2RoomOverviewCardRowSection
          title={data.title}
          readMoreButton={data.readMoreButton}
          rooms={data.rooms}
        />
      )
    }

    createTwoColumnHero(data) {
      return (
        <G2TwoColumnHeroSection
          title={data.title}
          image={data.image}
          subtitle={data.subtitle}
          contentHTML={data.contentHTML}
          actions={data.actions}
          sidebarSections={data.sidebarSections}
        />
      )
    }

  render() {
    const components = [];
    // This approach allows to reorder the components depending on data coming from the CMS
    this.props.room.componentOrder.forEach((component) => {
        if(component === "Overview") {
            components.push(this.createOverviewHeader(this.props.room.overviewHeader));
        }
        else if(component === "Highlights") {
            components.push(this.createHighlightCarousel(this.props.room.highlightCarousel));
        }
        else if(component === "Gallery") {
            components.push(this.createGallery(this.props.room.gallerySection));
        }
        else if(component === "Accordion") {
            components.push(this.createAccordion(this.props.room.accordion));
        }
        else if(component === "Two Column Section Hero") {
            components.push(this.createTwoColumnHero(this.props.room.twoColumnHero));
        }
        else if(component === "Similar Rooms") {
            components.push(this.createCardRow(this.props.room.cardRow));
        }
    });

    return (
      <Layout>
        {components.map(component => component)}
      </Layout>
    );
  }
}

export default RoomDetail;
