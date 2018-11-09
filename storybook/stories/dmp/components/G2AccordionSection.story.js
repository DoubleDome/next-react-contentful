import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../../withTests';

import G2AccordionSection from '../../../../dmp/components/G2AccordionSection/G2AccordionSection.component';

storiesOf('DMP/Components/G2AccordionSection', module)
  .addDecorator(withTests('Accordion'))
  .add('Default', () => (
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
  ))

  .add('Bulleted', () => (
    <G2AccordionSection
      title="Section title"
      items={[
        {
          title: 'Accordion Title',
          listContents: [
            'This is item 1',
            'This is item 2 that spans multiple lines lorem ipsum dolor sit amet, consectetur adipsicing elit, sed do euismud tempor incidud ut labore et dolore magna aliqua.',
            'This is item 3',
            'This is item 4',
            'This is item 5',
            'This is item 6',
            'This is item 7',
            'This is item 8',
            'This is item 9',
          ],
        },
        {
          title: 'Accordion Title',
          listContents: [
            'This is item 1',
            'This is item 2 that spans multiple lines lorem ipsum dolor sit amet, consectetur adipsicing elit, sed do euismud tempor incidud ut labore et dolore magna aliqua.',
            'This is item 3',
            'This is item 4',
            'This is item 5',
            'This is item 6',
            'This is item 7',
            'This is item 8',
            'This is item 9',
          ],
        },
        {
          title: 'Accordion Title',
          listContents: [
            'This is item 1',
            'This is item 2 that spans multiple lines lorem ipsum dolor sit amet, consectetur adipsicing elit, sed do euismud tempor incidud ut labore et dolore magna aliqua.',
            'This is item 3',
            'This is item 4',
            'This is item 5',
            'This is item 6',
            'This is item 7',
            'This is item 8',
            'This is item 9',
          ],
        },
        {
          title: 'Accordion Title',
          listContents: [
            'This is item 1',
            'This is item 2 that spans multiple lines lorem ipsum dolor sit amet, consectetur adipsicing elit, sed do euismud tempor incidud ut labore et dolore magna aliqua.',
            'This is item 3',
            'This is item 4',
            'This is item 5',
            'This is item 6',
            'This is item 7',
            'This is item 8',
            'This is item 9',
          ],
        },
      ]}
    />
  ))

  .add('Textual', () => (
    <G2AccordionSection
      title="Textual Accordion"
      items={[
        {
          title: 'Accordion Title',
          textContent:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus efficitur lectus in commodo. Vestibulum neque sapien, porta sit amet quam at, dignissim dignissim felis. Suspendisse potenti. Proin leo libero, lacinia vitae bibendum et, aliquam finibus tortor. Mauris auctor malesuada tincidunt. Ut justo ante, dignissim vitae ex eget, fringilla consectetur justo. Aenean pharetra magna at purus accumsan, sed posuere orci rutrum. Mauris eleifend suscipit enim, nec pharetra nunc gravida sit amet. Maecenas aliquet eu eros vel malesuada. Integer gravida tellus ut est volutpat accumsan. Etiam feugiat eget velit id accumsan. Nullam tempus leo a ultricies malesuada. Sed faucibus nisl vehicula mi consequat facilisis. Duis lacinia libero id nisi imperdiet, non posuere quam aliquet. Phasellus consequat erat sed odio pharetra ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
        },
        {
          title:
            'This is a title that spans multiple lines lorem ipsum dolor sit amet, consectetur adipsicing elit, sed do euismud tempor incidud ut labore et dolore magna aliqua.',
          textContent:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus efficitur lectus in commodo. Vestibulum neque sapien, porta sit amet quam at, dignissim dignissim felis. Suspendisse potenti. Proin leo libero, lacinia vitae bibendum et, aliquam finibus tortor. Mauris auctor malesuada tincidunt. Ut justo ante, dignissim vitae ex eget, fringilla consectetur justo. Aenean pharetra magna at purus accumsan, sed posuere orci rutrum. Mauris eleifend suscipit enim, nec pharetra nunc gravida sit amet. Maecenas aliquet eu eros vel malesuada. Integer gravida tellus ut est volutpat accumsan. Etiam feugiat eget velit id accumsan. Nullam tempus leo a ultricies malesuada. Sed faucibus nisl vehicula mi consequat facilisis. Duis lacinia libero id nisi imperdiet, non posuere quam aliquet. Phasellus consequat erat sed odio pharetra ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
        },
      ]}
    />
  ));
