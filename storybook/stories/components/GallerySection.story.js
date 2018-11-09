import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../withTests';

import GallerySection from '../../../src/components/GallerySection/GallerySection.component';
import GalleryLightboxService from '../../../src/services/GalleryLightbox.service';

const makeImageGalleryItem = id => ({
  imageUrl: `https://picsum.photos/1600/900?image=${id}`,
  imageAlt: `Image number ${id}`,
  caption:
    'Under his expert guidance, the highest-quality meats and seafood from around the world are cooked to perfection with flavor-releasing lorem ipsum very long caption',
  credit: 'Extra long photo credit goes here',
});

const makeVideoGalleryItem = id => ({
  imageUrl: `https://picsum.photos/1600/900?image=${id}`,
  imageAlt: `Video number ${id}`,
  video: {
    url:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    type: 'video/mp4',
  },
  caption:
    'Under his expert guidance, the highest-quality meats and seafood from around the world are cooked to perfection with flavor-releasing lorem ipsum very long caption',
  credit: 'Extra long photo credit goes here',
});

storiesOf('Components/GallerySection', module)
  .addDecorator(withTests('GallerySection'))

  .add('Default', () => (
    <GallerySection
      title="Gallery Title"
      items={[
        makeImageGalleryItem(11),
        makeVideoGalleryItem(12),
        makeImageGalleryItem(13),
        makeImageGalleryItem(14),
        makeVideoGalleryItem(15),
        makeImageGalleryItem(16),
        makeImageGalleryItem(17),
        makeVideoGalleryItem(18),
        makeImageGalleryItem(19),
        makeImageGalleryItem(20),
      ]}
    />
  ))

  .add('With Virtual Tour', () => (
    <GallerySection
      title="Gallery Title"
      items={[
        makeImageGalleryItem(11),
        makeVideoGalleryItem(12),
        makeImageGalleryItem(13),
        makeImageGalleryItem(14),
        makeVideoGalleryItem(15),
        makeImageGalleryItem(16),
        makeImageGalleryItem(17),
        makeVideoGalleryItem(18),
        makeImageGalleryItem(19),
        makeImageGalleryItem(20),
      ]}
      virtualTourHero={{
        tours: [
          {
            imageUrl: 'https://picsum.photos/1600/900',
            imageAlt: 'Image',
            title: 'Corner Suite Virtual Tour',
            description:
              'Indulge your desires at ARIA Tower Suites, a luxurious AAA Five Diamond retreat high above the Las Vegas Strip.',
            button: {
              label: 'Take Virtual Tour',
              url: '/',
            },
          },
        ],
      }}
    />
  ))

  .add('With "View Floor Plan" button', () => {
    const openFloorPlan = () => {
      GalleryLightboxService.open({
        items: [
          {
            imageUrl: 'https://picsum.photos/1600/900',
          },
        ],
      });
    };

    return (
      <GallerySection
        title="Gallery Title"
        items={[
          makeImageGalleryItem(11),
          makeVideoGalleryItem(12),
          makeImageGalleryItem(13),
          makeImageGalleryItem(14),
          makeVideoGalleryItem(15),
          makeImageGalleryItem(16),
          makeImageGalleryItem(17),
          makeVideoGalleryItem(18),
          makeImageGalleryItem(19),
          makeImageGalleryItem(20),
        ]}
        viewAllButton={{
          label: 'View Floor Plan',
          onClick: () => openFloorPlan(),
          onKeyPress: e => e.key === 'Enter' && openFloorPlan(),
        }}
      />
    );
  });
