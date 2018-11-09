import React from 'react';
import { mount } from 'enzyme';

import GalleryCard from '../GalleryCard/GalleryCard.component';
import VirtualTourHeroSection from '../VirtualTourHeroSection/VirtualTourHeroSection.component';
import GallerySection from './GallerySection.component';

describe('GallerySection', () => {
  test('renders title and cards', () => {
    const output = mount(
      <GallerySection
        title="test title"
        items={[
          {
            imageUrl: 'http://localhost/1.jpg',
            caption: 'test caption1',
          },
          {
            imageUrl: 'http://localhost/2.jpg',
            caption: 'test caption2',
          },
        ]}
      />,
    );

    expect(output.find('h2').text()).toEqual('test title');
    expect(
      output
        .find('.GalleryCard')
        .at(0)
        .find('.GalleryCard__caption')
        .text(),
    ).toEqual('test caption1');
    expect(
      output
        .find('.GalleryCard')
        .at(1)
        .find('.GalleryCard__caption')
        .text(),
    ).toEqual('test caption2');
  });

  test("doesn't render VirtualTourHeroSection when virtualTourHero prop is empty", () => {
    const output = mount(<GallerySection />);

    expect(output.find(VirtualTourHeroSection).length).toEqual(0);
  });

  test('renders VirtualTourHeroSection if virtualTourHero prop is passed', () => {
    const output = mount(
      <GallerySection
        virtualTourHero={{
          tours: [
            {
              imageUrl: 'https://picsum.photos/1600/900',
              title: 'test title',
            },
          ],
        }}
      />,
    );

    expect(output.find(VirtualTourHeroSection).length).toEqual(1);
    expect(
      output.find('.VirtualTourHeroSection__overlay__title').text(),
    ).toEqual('test title');
  });

  test("doesn't display all items at once", () => {
    const output = mount(
      <GallerySection
        itemsInitialLimit={1}
        items={[
          {
            imageUrl: 'http://localhost/1.jpg',
            caption: 'test caption1',
          },
          {
            imageUrl: 'http://localhost/2.jpg',
            caption: 'test caption2',
          },
          {
            imageUrl: 'http://localhost/2.jpg',
            caption: 'test caption2',
          },
        ]}
      />,
    );

    expect(output.find(GalleryCard).length).toEqual(1);
  });

  test('loads more thumbnails on click', () => {
    const output = mount(
      <GallerySection
        itemsInitialLimit={1}
        items={[
          {
            imageUrl: 'http://localhost/1.jpg',
            caption: 'test caption1',
          },
          {
            imageUrl: 'http://localhost/2.jpg',
            caption: 'test caption2',
          },
          {
            imageUrl: 'http://localhost/2.jpg',
            caption: 'test caption2',
          },
        ]}
      />,
    );
    const loadMoreButton = output
      .find('.GallerySection__load-more .Button')
      .last();

    expect(output.find(GalleryCard).length).toEqual(1);
    loadMoreButton.simulate('click');

    expect(output.find(GalleryCard).length).toEqual(3);
  });
});
