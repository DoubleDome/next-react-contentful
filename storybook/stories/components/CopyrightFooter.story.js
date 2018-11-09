import React from 'react';
import { storiesOf } from '@storybook/react';

import CopyrightFooter from '../../../src/components/CopyrightFooter/CopyrightFooter.component';
import withTests from '../../withTests';

storiesOf('Components/CopyrightFooter', module)
  .addDecorator(withTests('CopyrightFooter'))
  .add('default', () => (
    <CopyrightFooter
      links={[]}
      copyrightNotice="Copyright © 2018 Citycenter Land, Llc. All Rights Reserved"
    />
  ));
