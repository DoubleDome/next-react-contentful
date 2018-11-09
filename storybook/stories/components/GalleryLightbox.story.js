import PropTypes from 'prop-types';
import React from 'react';
import { storiesOf } from '@storybook/react';

import GalleryLightboxService from '../../../src/services/GalleryLightbox.service';

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

class GalleryLightboxStory extends React.PureComponent {
  componentDidMount() {
    const { items } = this.props;
    GalleryLightboxService.open({
      items,
    });
  }

  render() {
    return null;
  }
}
GalleryLightboxStory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

storiesOf('Components/GalleryLightbox', module)
  .add('Single Image', () => (
    <GalleryLightboxStory items={[makeImageItem(31)]} />
  ))
  .add('Single Image with no caption', () => (
    <GalleryLightboxStory
      items={[{ ...makeImageItem(31), caption: undefined, credit: undefined }]}
    />
  ))
  .add('Single Video', () => (
    <GalleryLightboxStory items={[makeVideoItem(32)]} />
  ))
  .add('Mixed Gallery', () => (
    <GalleryLightboxStory
      items={[
        makeImageItem(31),
        makeVideoItem(32),
        makeImageItem(33),
        makeImageItem(34),
      ]}
    />
  ));
