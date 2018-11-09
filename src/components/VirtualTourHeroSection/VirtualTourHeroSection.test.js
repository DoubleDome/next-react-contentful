import React from 'react';
import { mount } from 'enzyme';

import VirtualTourHeroSection from './VirtualTourHeroSection.component';

describe('VirtualTourHeroSection', () => {
  test('when given one tour, shows the tour', () => {
    const output = mount(
      <VirtualTourHeroSection
        tours={[
          {
            imageUrl: 'https://picsum.photos/1600/900',
            title: 'test title',
            description: 'test description',
            button: {
              label: 'test button',
              url: 'https://test.localhost',
            },
          },
        ]}
      />,
    );

    expect(output.find('h3').text()).toEqual('test title');
    expect(
      output.find('.VirtualTourHeroSection__overlay__description').text(),
    ).toEqual('test description');
    expect(output.find('a.Button').text()).toEqual('test button');
    expect(output.find('a.Button').props().href).toEqual(
      'https://test.localhost',
    );
  });

  test('when given two tours, shows both tours', () => {
    const output = mount(
      <VirtualTourHeroSection
        tours={[
          {
            imageUrl: 'https://picsum.photos/1600/900',
            title: 'test title1',
            description: 'test description1',
            button: {
              label: 'test button1',
              url: 'https://test.localhost/1',
            },
          },
          {
            imageUrl: 'https://picsum.photos/1600/900',
            title: 'test title2',
            description: 'test description2',
            button: {
              label: 'test button2',
              url: 'https://test.localhost/2',
            },
          },
        ]}
      />,
    );

    const t1 = output.find('.VirtualTourHeroSection__tour').at(0);
    expect(t1.find('h3').text()).toEqual('test title1');
    expect(
      t1.find('.VirtualTourHeroSection__overlay__description').text(),
    ).toEqual('test description1');
    expect(t1.find('a.Button').text()).toEqual('test button1');
    expect(t1.find('a.Button').props().href).toEqual(
      'https://test.localhost/1',
    );

    const t2 = output.find('.VirtualTourHeroSection__tour').at(1);
    expect(t2.find('h3').text()).toEqual('test title2');
    expect(
      t2.find('.VirtualTourHeroSection__overlay__description').text(),
    ).toEqual('test description2');
    expect(t2.find('a.Button').text()).toEqual('test button2');
    expect(t2.find('a.Button').props().href).toEqual(
      'https://test.localhost/2',
    );
  });
});
