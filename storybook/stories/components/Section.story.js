import React from 'react';
import { storiesOf } from '@storybook/react';

import Section from '../../../src/components/Section/Section.component';

storiesOf('Components/Section', module)
  .add('Default', () => (
    <Section
      title="Offers & Promos"
      readMoreButton={{ label: 'View All Offers', url: '/' }}
    >
      <div style={{ backgroundColor: '#eee' }}>Here be section content.</div>
    </Section>
  ))

  .add('Without Read More button', () => (
    <Section title="Offers & Promos">
      <div style={{ backgroundColor: '#eee' }}>Here be section content.</div>
    </Section>
  ));
