import React from 'react';
import { mount } from 'enzyme';

import RoomOverviewHeaderSection from './RoomOverviewHeaderSection.component';

describe('RoomOverviewHeaderSection', () => {
  test('renders title', () => {
    const output = mount(
      <RoomOverviewHeaderSection header={{ title: 'some title' }} />,
    );

    expect(output.html()).toContain('some title');
  });
});
