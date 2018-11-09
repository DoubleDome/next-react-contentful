import React from 'react';
import { mount } from 'enzyme';

import TextHeaderSection from './TextHeaderSection.component';

describe('TextHeaderSection', () => {
  test('shows title and subtitle', () => {
    const output = mount(
      <TextHeaderSection title="title" subtitle="subtitle" />,
    );

    expect(output.find('h1').text()).toEqual('title');
    expect(output.find('.TextHeaderSection__subtitle').text()).toEqual(
      'subtitle',
    );
  });

  test('with no subtitle, shows no subtitle', () => {
    const output = mount(<TextHeaderSection title="title" />);

    expect(output.find('h1').text()).toEqual('title');
    expect(output.find('.TextHeaderSection__subtitle').length).toEqual(0);
  });
});
