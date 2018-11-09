import React from 'react';
import { mount } from 'enzyme';

import DetailPageHeaderSection from './DetailPageHeaderSection.component';

describe('DetailPageHeaderSection', () => {
  test('renders title', () => {
    const output = mount(<DetailPageHeaderSection title="test title" />);

    expect(output.html()).toContain('test title');
  });
});
