/* eslint-disable */
import React from 'react';
import addons from '@storybook/addons';
import Wrapper from './wrapper';

export const themify = (themes, attr) => (storyFn, context) => {
  const channel = addons.getChannel();
  return (
    <Wrapper themes={themes} attr={attr} channel={channel}>
      {storyFn(context)}
    </Wrapper>
  );
};
