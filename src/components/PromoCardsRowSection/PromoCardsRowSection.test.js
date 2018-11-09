import React from 'react';
import { mount } from 'enzyme';

import PromoCardsRowSection from './PromoCardsRowSection.component';

describe('PromoCardsRowSection', () => {
  test('shows title and cards', () => {
    const output = mount(
      <PromoCardsRowSection
        title="section-title"
        cards={[
          {
            imageUrl: 'http://localhost/1.jpg',
            title: 'card-title',
            primaryAction: {
              url: 'http://localhost',
              label: 'button label',
            },
          },
        ]}
      />,
    );

    expect(output.find('h2').text()).toEqual('section-title');
    expect(output.find('.PromoCard__title').text()).toEqual('card-title');
  });
});
