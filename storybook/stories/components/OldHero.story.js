import React from 'react';
import { storiesOf } from '@storybook/react';

import OldHero from '../../../src/components/OldHero/OldHero.component';

storiesOf('Components/OldHero (WIP)', module).add('default', () => (
  <OldHero imageUrl="https://via.placeholder.com/1440x576" />
));
