import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../../withTests';

import G2TextHeaderSection from '../../../../dmp/components/G2TextHeaderSection/G2TextHeaderSection.component';

storiesOf('DMP/Components/G2TextHeaderSection', module)
  .addDecorator(withTests('TextHeaderSection'))

  .add('Default', () => (
    <G2TextHeaderSection
      title="Rooms & Suites"
      subtitle="ARIA Las Vegas boasts some of the best in hotel rooms and suites on the Las Vegas Strip. Learn more about the types of rooms you can book at ARIA today."
    />
  ))
  .add('Title Only', () => <G2TextHeaderSection title="Rooms & Suites" />);
