import React from 'react';
import { createClient } from '../integrations/contentful/index';
import Layout from '../layouts/layout';
import G2RoomOverviewHeaderSection from '../../dmp/components/G2RoomOverviewHeaderSection/G2RoomOverviewHeaderSection.component';
import G2HighlightCarouselSection from '../../dmp/components/G2HighlightCarouselSection/G2HighlightCarouselSection.component';
import G2AccordionSection from '../../dmp/components/G2AccordionSection/G2AccordionSection.component';
import G2GallerySection from '../../dmp/components/G2GallerySection/G2GallerySection.component';
import G2TwoColumnHeroSection from '../../dmp/components/G2TwoColumnHeroSection/G2TwoColumnHeroSection.component';
import G2RoomOverviewCardRowSection from '../../dmp/components/G2RoomOverviewCardRowSection/G2RoomOverviewCardRowSection.component';

class RoomDetail extends React.Component {
    static async getInitialProps({query}) {
        // const client = createClient();
        // const entries = await client.getEntry(query.id);
        return { roomDetailPageProp: "TBD" };
    }

  render() {
    {
      /* 
            One of these components is not wrapped in a div,
            so wrapping everything in a div instead of chanigng
            original compnents.
        */
    }
    return (
      <Layout>
        <G2RoomOverviewHeaderSection
          {...{
            header: {
              subtitle: 'Aria Tower Suites',
              title: 'Corner Suite',
              primaryAction: {
                label: 'Check Rates',
                url: '/',
              },
              secondaryAction: {
                label: 'Compare',
                url: '/',
              },
            },
            main: {
              title: 'The Suite Life',
              content:
                '<p>Pamper yourself with 920 square feet dedicated to you. Decisions, decisions. Loving the view from the living room? Then the view from the bedroom will also make your jaw drop. Our 920-square-foot Corner Suites have awe-inspiring views of the mountains throughout your suite. And every detail—from the three LCD HD televisions to the custom-made beds—was designed to spoil you.</p>',
              primaryAction: {
                label: 'Check Rates',
                url: '/',
              },
              tertiaryAction: {
                label: 'Compare',
                url: '/',
              },
            },
            sidebarSections: [
              {
                headline: {
                  title: 'Type',
                  content: {
                    type: 'text',
                    text: 'Aria Tower Suites',
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
                    text: '920 sqft',
                  },
                  {
                    type: 'inline-text',
                    label: 'beds',
                    text: '1 King',
                  },
                  {
                    type: 'inline-text',
                    label: 'max guests',
                    text: '4',
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
          }}
        />

        <G2HighlightCarouselSection
          title="Tower Suites Exclusive Services"
          cards={[
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
          ]}
        />

        <G2AccordionSection
          {...{
            title: 'Amenities to Love',
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
          }}
        />

        <G2GallerySection
          title="Experience The Room"
          virtualTourHero={{
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
          }}
          items={[
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
          ]}
        />

        <G2TwoColumnHeroSection
          title="Elevate Your Tower Suites Experience"
          image={{
            url:
              'https://static.mgmresorts.com/content/dam/MGM/aria/hotel/aria/tower-suites-lobby/lifestyle/aria-hotel-lifestyle-exterior-tower-suites-curb.tif',
          }}
          subtitle="Offer Details"
          contentHTML={`
                <p>Elevate your Tower Suites stay by adding the Tower Suites VIP Arrival Experience to your reservation. Add-on includes the following amenities:</p>
                <ul>
                    <li>Roundtrip Luxury Airport Transfer</li>
                    <li>Welcome Cocktail at Lobby Bar for Two (2)</li>
                    <li>In-suite Welcome Amenity</li>
                    <li>In-suite American Breakfast for Two (2)</li>
                </ul>
                <p>Purchase this package for a one-time fee of $250 when you add-on to any Tower Suites booking on Aria.com. *</p>
                <p class="micro-text">* Prices subject to change during holidays and peak periods. Additional taxes may apply. Please contact Tower Suites Concierge for more information. Terms and conditions apply.</p>
                `}
          actions={[
            {
              variant: 'secondary',
              label: 'Learn More',
              url:
                'https://www.aria.com/en/offers/tower-suites-vip-experience.html',
            },
          ]}
          sidebarSections={[
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
          ]}
        />

        <G2RoomOverviewCardRowSection
          title="More Tower Suites"
          readMoreButton={{
            url: '/',
            label: 'View All Tower Suites',
          }}
          rooms={[
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
          ]}
        />
      </Layout>
    );
  }
}

export default RoomDetail;
