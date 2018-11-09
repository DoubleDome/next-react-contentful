/* eslint global-require:0 */

import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';
import { checkA11y } from '@storybook/addon-a11y';
import docs from 'storybook-addon-docgen';
import { themify } from './theme-selector';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

const themes = [
  'aria',
  'beauRivage',
  'bellagio',
  'cabana',
  'cclv',
  'delano',
  'detroit',
  'excalibur',
  'goldStrike',
  'luxor',
  'mandalayBay',
  'mgmGrand',
  'mgmResorts',
  'mirage',
  'nationalHarbor',
  'nyny',
  'parkMgm',
  'signature',
  'springfield',
  'vdara',
];

setOptions({
  addonPanelInRight: true,
});
addDecorator(docs);
addDecorator(themify(themes, 'data-theme'));
addDecorator(withKnobs);
addDecorator(checkA11y);
addDecorator((storyFn, context) => {
  const BrandTheme = require('../src/components/BrandTheme/BrandTheme.component')
    .default;
  return (
    <React.Fragment>
      <BrandTheme />
      {storyFn(context)}
    </React.Fragment>
  );
});

function loadStories() {
  require('@/styles/base.storybook.scss');
  require('../src/init.js');

  requireAll(require.context('./stories/dmp/docs/', true, /\.story\.jsx?$/));
  requireAll(
    require.context('./stories/dmp/components/', true, /\.story\.jsx?$/),
  );
  requireAll(require.context('./stories/pages/', true, /\.story\.jsx?$/));
  requireAll(require.context('./stories/components/', true, /\.story\.jsx?$/));
}

configure(loadStories, module);
