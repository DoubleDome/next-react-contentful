import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../withTests';

import TextHeaderSection from '../../../src/components/TextHeaderSection/TextHeaderSection.component';

storiesOf('Components/TextHeaderSection', module)
  .addDecorator(withTests('TextHeaderSection'))

  .add('Default', () => (
    <TextHeaderSection
      title="Rooms & Suites"
      subtitle="ARIA Las Vegas boasts some of the best in hotel rooms and suites on the Las Vegas Strip. Learn more about the types of rooms you can book at ARIA today."
    />
  ))

  .add('Title Only', () => <TextHeaderSection title="Rooms & Suites" />);
