import React from 'react';
import addons from '@storybook/addons';
import Panel from './panel';

addons.register('theme-selector', api => {
  const channel = addons.getChannel();

  addons.addPanel('theme-selector/panel', {
    title: 'Theme Picker',
    render: () => (
      <Panel channel={channel} api={api} key="theme-picker-panel" />
    ),
  });
});
