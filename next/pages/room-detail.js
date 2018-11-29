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
        room {
          subtitle
          brand
          title
          squareFeet
          bedType
          maxGuests
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
                             description:
                               'Check-in from the Tower Suites Lounge. Enjoy private access and complimentary drinks from a state-of-the-art LAMILL Coffee Machine.',
                         })), 
                   },
                   gallerySection: {
                     title: "Experience The Room",
                     virtualTourHero: {
                       tours: [
                         {
                           imageUrl:
                             'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/corner-suite/aria-hotel-corner-living.tif',
                           title: 'Corner Suite Virtual Tour',
                           description:
                             'Indulge your desires at ARIA Tower Suites, a luxurious AAA Five Diamond retreat high above the Las Vegas Strip.',
                           button: {
                             label: 'Take Virtual Tour',
                             url: '/',
                           },
                         },
                       ],
                     },
                     items: [
                       {
                         imageUrl:
                           'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/corner-suite/aria-corner-suite-bath-purple-orchids.tif',
                         caption: "Experience ARIA's Corner Suites.",
                       },
                       {
                         imageUrl:
                           'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/technology/aria-hotel-details-bedside-tablet.tif',
                         caption: "Experience ARIA's in-room tablets.",
                       },
                       {
                         imageUrl:
                           'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/in-room-amenities/aria-amenities-floral-three-dozen-roses.tif',
                         caption:
                           "Whether it's celebrating a special occasion or just to put a surprised smile on her face, trust the Concierge at ARIA with all your floral needs.",
                       },
                       {
                         imageUrl:
                           'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/tower-suites-lobby/aria-hotel-tower-suites-lounge-waiting.tif',
                         caption:
                           'Catered to your every desire with the VIP treatment you deserve—it’s luxury at its finest.',
                       },
                       {
                         imageUrl:
                           'https://static.mgmresorts.com/content/dam/MGM/aria/amenities/concierge/aria-amenities-concierge-flower-petals.tif',
                         caption:
                           'The Concierge will help bring your ideas to life and ensure that every detail of your vision is executed flawlessly.',
                       },
                     ]
                   },
                   accordion: {
                     title:'Amenities to Love',
                     items: [
                       {
                         title: 'Special Access',
                         listContents: [
                           'Mobile Check-in',
                           'Priority Line Access for Taxi Service',
                           'Secluded Lounge with Complimentary Food & Beverage',
                           'Concierge Pre-Arrival Contact',
                           'ARIA Main Pool',
                           'Curbside Meet and Greet (Hours vary)',
                           'ARIA Fitness Center',
                           'Private Lounge Check-In',
                           'Preferred Tee Times to Shadow Creek Golf Course',
                         ],
                       },
                       {
                         title: 'Room Features',
                         listContents: [
                           'Mobile Check-in',
                           'Priority Line Access for Taxi Service',
                           'Secluded Lounge with Complimentary Food & Beverage',
                           'Concierge Pre-Arrival Contact',
                           'ARIA Main Pool',
                           'Curbside Meet and Greet (Hours vary)',
                           'ARIA Fitness Center',
                           'Private Lounge Check-In',
                           'Preferred Tee Times to Shadow Creek Golf Course',
                         ],
                       },
                       {
                         title: 'Technology',
                         listContents: [
                           'Mobile Check-in',
                           'Priority Line Access for Taxi Service',
                           'Secluded Lounge with Complimentary Food & Beverage',
                           'Concierge Pre-Arrival Contact',
                           'ARIA Main Pool',
                           'Curbside Meet and Greet (Hours vary)',
                           'ARIA Fitness Center',
                           'Private Lounge Check-In',
                           'Preferred Tee Times to Shadow Creek Golf Course',
                         ],
                       },
                       {
                         title: 'Bed & bath',
                         listContents: [
                           'Mobile Check-in',
                           'Priority Line Access for Taxi Service',
                           'Secluded Lounge with Complimentary Food & Beverage',
                           'Concierge Pre-Arrival Contact',
                           'ARIA Main Pool',
                           'Curbside Meet and Greet (Hours vary)',
                           'ARIA Fitness Center',
                           'Private Lounge Check-In',
                           'Preferred Tee Times to Shadow Creek Golf Course',
                         ],
                       },
                     ],
                   },
                   cardRow: {
                     title: "Elevate Your Tower Suites Experience",
                     readMoreButton: {
                       url: '/',
                       label: 'View All Tower Suites',
                     },
                     rooms: room.similarRoomsCollection.items.map((similarRoom) => ({
                            title: similarRoom.title,
                             keyValues: [similarRoom.squareFeet, similarRoom.bedType, `Max Guests ${similarRoom.maxGuests}`],
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
                    title: 'Elevate Your Tower Suites Experience',
                    image: {
                      url:
                        'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/tower-suites-lobby/lifestyle/aria-hotel-lifestyle-exterior-tower-suites-curb.tif',
                    },
                    subtitle: 'Offer Details',
                    actions: [
                      {
                        variant: 'secondary',
                        label: 'Learn More',
                        url:
                          'https://www.aria.com/en/offers/tower-suites-vip-experience.html',
                      },
                    ],
                    contentHTML: `
                      <p>Elevate your Tower Suites stay by adding the Tower Suites VIP Arrival Experience to your reservation. Add-on includes the following amenities:</p>
                      <ul>
                        <li>Roundtrip Luxury Airport Transfer</li>
                        <li>Welcome Cocktail at Lobby Bar for Two (2)</li>
                        <li>In-suite Welcome Amenity</li>
                        <li>In-suite American Breakfast for Two (2)</li>
                      </ul>
                      <p>Purchase this package for a one-time fee of $250 when you add-on to any Tower Suites booking on Aria.com. *</p>
                      <p class="micro-text">* Prices subject to change during holidays and peak periods. Additional taxes may apply. Please contact Tower Suites Concierge for more information. Terms and conditions apply.</p>
                    `,
                    sidebarSections: [
                      {
                        headline: {
                          title: 'Add VIP Package',
                        },
                        items: [
                          {
                            type: 'content',
                            contentHTML:
                              '<p>If you would like to add this package on any existing Tower Suites reservation please contact Tower Suites.</p>',
                          },
                          {
                            type: 'inline-text',
                            label: 'Phone',
                            text: '702 590 9599',
                          },
                          {
                            type: 'inline-link',
                            label: 'Email',
                            linkText: 'towersuites@aria.com',
                            linkUrl: 'mailto:towersuites@aria.com',
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
