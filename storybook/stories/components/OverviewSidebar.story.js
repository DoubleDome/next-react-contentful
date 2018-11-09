import React from 'react';
import { storiesOf } from '@storybook/react';
import { StoryDocsWrapper } from 'storybook-addon-docgen';
import withTests from '../../withTests';

import OverviewSidebar from '../../../src/components/OverviewSidebar/OverviewSidebar.component';

storiesOf('Components/OverviewSidebar', module)
  .addDecorator(withTests('OverviewSidebar'))

  .add('Default', () => (
    <StoryDocsWrapper component={OverviewSidebar}>
      <div
        style={{
          backgroundColor: '#fafafa',
          padding: '24px',
          margin: '32px',
        }}
      >
        <OverviewSidebar
          sections={[
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
              items: [
                {
                  type: 'content',
                  contentHTML: 'Section without headline',
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
          ]}
        />
      </div>
    </StoryDocsWrapper>
  ));
