import React from 'react';
import { mount } from 'enzyme';

import CopyrightFooter from './CopyrightFooter.component';

const props = {
  copyrightNotice: 'Copyright © 2018 Citycenter Land, Llc. All Rights Reserved',
  links: [
    {
      url: 'https://example.com',
      label: 'Example',
    },
    {
      url: 'https://example.com',
      label: 'Example 2',
    },
  ],
};

describe('CopyrightFooter', () => {
  test('shows notice', () => {
    const output = mount(<CopyrightFooter {...props} />);

    expect(output.find('.CopyrightFooter__notice').text()).toEqual(
      props.copyrightNotice,
    );
  });

  test('renders links with valid text and href', () => {
    const output = mount(<CopyrightFooter {...props} />);

    const links = output.find('.CopyrightFooter__link');

    expect(links.length).toEqual(2);

    expect(links.at(0).text()).toEqual(props.links[0].label);
    expect(links.at(0).props().href).toEqual(props.links[0].url);
  });
});
