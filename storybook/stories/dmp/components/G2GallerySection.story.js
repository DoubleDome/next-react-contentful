import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../../withTests';

import G2GallerySection from '../../../../dmp/components/G2GallerySection/G2GallerySection.component';
import GalleryLightboxService from '../../../../src/services/GalleryLightbox.service';

const makeImageItem = id => ({
  imageUrl: `https://picsum.photos/1600/900?image=${id}`,
  imageAlt: `Image number ${id}`,
  caption:
    'Under his expert guidance, the highest-quality meats and seafood from around the world are cooked to perfection with flavor-releasing lorem ipsum very long caption',
  credit: 'Extra long photo credit goes here',
});

const makeVideoItem = id => ({
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

storiesOf('DMP/Components/G2GallerySection (WIP)', module)
  .addDecorator(withTests('GallerySection'))

  .add('Default', () => (
    <G2GallerySection
      title="Gallery Title"
      items={[
        makeImageItem(11),
        makeVideoItem(12),
        makeImageItem(13),
        makeImageItem(14),
        makeVideoItem(15),
        makeImageItem(16),
        makeImageItem(17),
        makeVideoItem(18),
        makeImageItem(19),
        makeImageItem(20),
      ]}
    />
  ))

  .add('With Virtual Tour', () => (
    <G2GallerySection
      title="Gallery Title"
      items={[
        makeImageItem(11),
        makeVideoItem(12),
        makeImageItem(13),
        makeImageItem(14),
        makeVideoItem(15),
        makeImageItem(16),
        makeImageItem(17),
        makeVideoItem(18),
        makeImageItem(19),
        makeImageItem(20),
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
      <G2GallerySection
        title="Gallery Title"
        items={[
          makeImageItem(11),
          makeVideoItem(12),
          makeImageItem(13),
          makeImageItem(14),
          makeVideoItem(15),
          makeImageItem(16),
          makeImageItem(17),
          makeVideoItem(18),
          makeImageItem(19),
          makeImageItem(20),
        ]}
        viewAllButton={{
          label: 'View Floor Plan',
          onClick: () => openFloorPlan(),
          onKeyPress: e => e.key === 'Enter' && openFloorPlan(),
        }}
      />
    );
  });
