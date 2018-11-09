import React from 'react';
import { mount } from 'enzyme';

import HighlightCardsCarouselSection from './HighlightCardsCarouselSection.component';

describe('HighlightCardsCarouselSection', () => {
  test('shows title and cards', () => {
    const output = mount(
      <HighlightCardsCarouselSection
        title="section-title"
        cards={[
          {
            imageUrl: 'http://localhost/1.jpg',
            title: 'card-title',
            description: 'card-description',
          },
        ]}
      />,
    );

    expect(output.find('h2').text()).toEqual('section-title');
    expect(output.find('.HighlightCard__title').text()).toEqual('card-title');
    expect(output.find('.HighlightCard__description').text()).toEqual(
      'card-description',
    );
  });
});
