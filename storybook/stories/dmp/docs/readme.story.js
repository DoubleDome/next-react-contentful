import React from 'react';
import { storiesOf } from '@storybook/react';

import CustomContent from '../../../../src/components/CustomContent/CustomContent.component';

const html = `
  <html>
  <head>
      <link rel="stylesheet" href="//BrandTheme.css" type="text/css">
  </head>
  <body>
    <div data-component="BrandTheme" data-component-id="G2BrandTheme"></div>
    <!-- Component mounting points -->
    <!-- Common, vendor etc -->
    <script type="text/javascript" src="//G2Polyfill.js" defer></script>
    <script type="text/javascript" src="//G2Init.js" defer></script>
    <script src="/global/components/G2BrandTheme/index.js" defer></script>
   <!-- Component definitions -->
  </body>
  </html>
`;

storiesOf('DMP/Docs', module).add('README (WIP)', () => (
  <div>
    <CustomContent>
      <h2>readme</h2>
      <pre>{html}</pre>
    </CustomContent>
  </div>
));
