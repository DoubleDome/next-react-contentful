import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../withTests';

import RoomOverviewHeaderSection from '../../../src/components/RoomOverviewHeaderSection/RoomOverviewHeaderSection.component';

storiesOf('Components/RoomOverviewHeaderSection', module)
  .addDecorator(withTests('RoomOverviewHeaderSection'))
  .add('Default', () => (
    <RoomOverviewHeaderSection
      {...{
        header: {
          subtitle: 'Aria Tower Suites',
          title: 'Two Bedroom Penthouse Suite Accessible With Strip View',
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
          title: 'Corner Suite',
          content:
            '<p>Aenean vel metus quam. Aenean at faucibus massa. Nunc auctor, nisi vitae aliquet consequat, orci dolor posuere enim, sed sodales diam odio nec leo. Suspendisse fermentum justo ipsum, a blandit risus convallis eu. In sapien velit, consequat mollis vehicula ut, ultrices quis arcu. Ut a justo orci. Proin vel ligula vestibulum, pulvinar ex tempor, gravida arcu. Morbi congue massa risus, vel elementum mauris tincidunt ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla laoreet magna et pretium interdum. Curabitur pellentesque urna a ipsum lobortis volutpat.</p>',
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
              title: 'Section without value',
            },
          },

          {
            headline: {
              title: 'Website',
              content: {
                type: 'link',
                linkText: 'www.google.com',
                linkUrl: 'https://www.google.com',
              },
            },
          },

          {
            headline: {
              title: 'Section without value',
            },
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

          {
            headline: {
              title: 'Location',
            },
            items: [
              {
                type: 'content',
                contentHTML:
                  '<p>East side of the casino floor, next to the Main Velvet Pick-up</p>',
              },
            ],
          },

          {
            headline: {
              title: 'Available For Purchase At',
            },
            items: [
              {
                type: 'content',
                contentHTML:
                  '<ul><li>Tutto</li><li>Spa Bellagio</li><li>Concierge</li><li>By phone at 702.693.7075</li></ul>',
              },
            ],
          },

          {
            headline: {
              title: 'Social',
              content: {
                type: 'social-icons',
                facebookUrl: 'https://facebook.com',
                instagramUrl: 'https://instagram.com',
                twitterUrl: 'https://twitter.com',
              },
            },
          },
        ],
        heroImages: [
          {
            alt: 'Image 1',
            url: 'https://picsum.photos/1440/576/?image=1',
          },
          {
            alt: 'Image 2',
            url: 'https://picsum.photos/1440/576/?image=2',
          },
          {
            alt: 'Image 3',
            url: 'https://picsum.photos/1440/576/?image=3',
          },
        ],
      }}
    />
  ));
