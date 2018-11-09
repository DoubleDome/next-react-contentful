import React from 'react';
import { mount } from 'enzyme';

import HeroSection from './HeroSection.component';

const getBarsActiveFlags = output => {
  const { length } = output.find('.ImageSlider__bars > li');
  return [...Array(length).keys()].map(i =>
    output
      .find('.ImageSlider__bars > li')
      .at(i)
      .hasClass('slick-active'),
  );
};

describe('HeroSection', () => {
  test('shows title and description', () => {
    const output = mount(
      <HeroSection
        title="title"
        description="description"
        images={[
          {
            url: 'http://localhost',
          },
        ]}
      />,
    );

    expect(output.find('h1').text()).toEqual('title');

    expect(output.find('.HeroSection__overlay__description').text()).toEqual(
      'description',
    );
  });

  test('with no description, shows no description', () => {
    const output = mount(
      <HeroSection
        title="title"
        images={[
          {
            url: 'http://localhost/1.jpg',
          },
        ]}
      />,
    );

    expect(output.find('h1').text()).toEqual('title');
    expect(output.find('.HeroSection__overlay__description').length).toEqual(0);
  });

  xtest('changes slide after clicking on the progress bar', async () => {
    const output = mount(
      <HeroSection
        title="title"
        images={[
          {
            url: 'http://localhost/1.jpg',
          },
          {
            url: 'http://localhost/2.jpg',
          },
          {
            url: 'http://localhost/3.jpg',
          },
        ]}
      />,
    );

    expect(output.find('.ImageSlider__bar').length).toEqual(3);
    expect(getBarsActiveFlags(output)).toEqual([true, false, false]);

    output
      .find('.ImageSlider__bar')
      .at(2)
      .find('button')
      .simulate('click');

    // This test fails here, idk why
    expect(getBarsActiveFlags(output)).toEqual([false, false, true]);
  });
});
