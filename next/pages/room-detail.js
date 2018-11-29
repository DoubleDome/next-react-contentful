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
                room {
                  subtitle
                  brand
                  title
                  squareFeet
                  bedType
                  maxGuests
                  longDescription {
                    json
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
            Can't destructure these due to the names of the actual endpoints
            This would destructure the room declaration but it's confusing:
              ({room:room} = page); // eslint-disable-line no-useless-rename
          */
          page = res.data.roomDetailPageCollection.items[0]; // eslint-disable-line prefer-destructuring
          room = page.room; // eslint-disable-line prefer-destructuring
        });
    
        return { 
                  room: {
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

                       {
                         headline: {
                           title: 'Lounge Hours',
                         },
                         items: [
                           {
                             type: 'inline-text',
                             label: 'sun - wed',
                             text: '6:00 AM - 12:00 AM',
                           },
                           {
                             type: 'inline-text',
                             label: 'thu - sat',
                             text: '6:00 AM - 1:00 AM',
                           },
                           {
                             type: 'inline-text',
                             label: 'beverages & light snacks',
                             text: '7:00 AM - 10:00 PM',
                           },
                         ],
                       },
                     ],
                     heroImages: [
                       {
                         url:
                           'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/corner-suite/aria-hotel-corner-suite-bedroom.tif',
                       },
                       {
                         url:
                           'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/corner-suite/aria-corner-suite-bath-purple-orchids.tif',
                       },
                       {
                         url:
                           'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/corner-suite/aria-hotel-corner-living.tif',
                       },
                     ],
                   },
                   highlightCarousel: {
                     title: 'Tower Suites Exclusive Services',
                     cards: [
                       {
                         imageUrl:
                           'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/tower-suites-lobby/lifestyle/aria-hotel-lifestyle-tower-suites-lounge-check-in.tif',
                         title: 'Tower Suites Lounge',
                         description:
                           'Check-in from the Tower Suites Lounge. Enjoy private access and complimentary drinks from a state-of-the-art LAMILL Coffee Machine.',
                       },
                       {
                         imageUrl:
                           'https://static.mgmresorts.com/content/dam/MGM/aria/amenities/floral/images/aria-amenities-floral-small.tif',
                         title: 'Concierge Services',
                         description:
                           'From greating you upon your arrival or suprising a loved one,  your personalized Concierge staff experts can make anything happen.',
                       },
                       {
                         imageUrl:
                           'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/tower-suites-lobby/aria-hotel-tower-suites-lounge-waiting.tif',
                         title: 'Access',
                         description:
                           'Tower Suites takes your Vegas stay to the next level. Enjoy special privileges such as enhanced turndown or priority line access for taxi service.',
                       },
                       {
                         imageUrl:
                           'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/lifestyle/aria-hotel-lifestyle-tower-suites-corner-tablet.tif',
                         title: 'Advanced Technology',
                         description:
                           'Countless indulgences are at your fingertips via our revolutionary new in-room tablets.',
                       },
                     ]
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
                     rooms: [
                       {
                         title: 'Deluxe King Room',
                         keyValues: ['520 Sqft', '1 King Bed', 'Max Guests 2'],
                         description:
                           'Deluxe Rooms at ARIA average 520 sq ft with unparalleled amenities, corner views and state of the art technology.',
                         image: {
                           url:
                             'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/deluxe-room/aria-deluxe-king-bed-dusk.tif',
                         },
                         primaryAction: {
                           label: 'Check Rates',
                           url: '/',
                         },
                         secondaryAction: {
                           label: 'Room Details',
                           url: '/',
                         },
                         tertiaryAction: {
                           label: 'Compare',
                           url: '/',
                         },
                       },
                       {
                         title: 'Tower Suite',
                         keyValues: ['1,000 Sqft', '1 King Bed', 'Corner Max Guests  4'],
                         description: 'Soak your cares away in an open-air whirlpool tub.',
                         image: {
                           url:
                             'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/tower-suite/aria-hotel-tower-suite-bedroom-tablet.tif',
                         },
                         primaryAction: {
                           label: 'Check Rates',
                           url: '/',
                         },
                         secondaryAction: {
                           label: 'Room Details',
                           url: '/',
                         },
                         tertiaryAction: {
                           label: 'Compare',
                           url: '/',
                         },
                       },
                       {
                         title: 'Center Suite Strip View',
                         keyValues: ['1,075 Sqft', '2 Queen Beds', 'Max Guests 4'],
                         description:
                           'Panoramic views of The Strip and spacious living and bedroom areas.',
                         image: {
                           url:
                             'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/crystals-center-suite/aria-hotel-crystals-suite-living-room-centerpiece-purple-flowers.tif',
                         },
                         primaryAction: {
                           label: 'Check Rates',
                           url: '/',
                         },
                         secondaryAction: {
                           label: 'Room Details',
                           url: '/',
                         },
                         tertiaryAction: {
                           label: 'Compare',
                           url: '/',
                         },
                       },
                     ],
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
    // This approach allows to reorder the components depending on data coming from the CMS
    const components = [
      this.createOverviewHeader(this.props.room.overviewHeader),
      this.createHighlightCarousel(this.props.room.highlightCarousel),
      this.createGallery(this.props.room.gallerySection),
      this.createAccordion(this.props.room.accordion),
      this.createCardRow(this.props.room.cardRow),
      this.createTwoColumnHero(this.props.room.twoColumnHero),
    ];

    return (
      <Layout>
        {components.map(component => component)}
      </Layout>
    );
  }
}


export default RoomDetail;
