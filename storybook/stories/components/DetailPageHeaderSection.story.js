import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../withTests';

import DetailPageHeaderSection from '../../../src/components/DetailPageHeaderSection/DetailPageHeaderSection.component';

storiesOf('Components/DetailPageHeaderSection', module)
  .addDecorator(withTests('DetailPageHeaderSection'))
  .add('Default', () => (
    <DetailPageHeaderSection
      subtitle="Aria Tower Suites"
      title="Two Bedroom Penthouse Suite Accessible With Strip View"
      primaryAction={{
        label: 'Check Rates',
        url: '/',
      }}
      secondaryAction={{
        label: 'Compare',
        url: '/',
      }}
    />
  ))
  .add('With no secondary action', () => (
    <DetailPageHeaderSection
      subtitle="Open until 11pm"
      title="Blossom"
      primaryAction={{
        label: 'Book a table',
        url: '/',
      }}
    />
  ))
  .add('With no actions', () => (
    <DetailPageHeaderSection subtitle="Casino" title="Poker" />
  ));
