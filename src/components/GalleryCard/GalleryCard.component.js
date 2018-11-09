import PropTypes from 'prop-types';
import React from 'react';
import uuidv4 from 'uuid/v4';
import './GalleryCard.scss'; // build-ignore-line

import PlayIcon from '../../shared/Icons/Play';

class GalleryCard extends React.PureComponent {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string,
    caption: PropTypes.string,
    video: PropTypes.bool,
    onOpen: PropTypes.func,
  };

  static defaultProps = {
    imageAlt: '',
    caption: undefined,
    video: false,
    onOpen: undefined,
  };

  render() {
    const { imageUrl, imageAlt, caption, video, onOpen } = this.props;
    const imageId = uuidv4();
    const captionId = uuidv4();

    return (
      <figure
        className="GalleryCard"
        role="group"
        aria-labelledby={imageId}
        aria-describedby={captionId}
      >
        <div
          className="GalleryCard__image"
          role="button"
          onClick={onOpen}
          onKeyPress={e => e.key === 'Enter' && onOpen && onOpen()}
          aria-label={video ? 'Play Video' : 'Enlarge Image'}
          tabIndex="0"
        >
          <img
            id={imageId}
            src={imageUrl}
            alt={imageAlt || caption || ''}
            role={imageAlt ? undefined : 'presentation'}
          />
          {video && (
            <div className="GalleryCard__overlay">
              <PlayIcon />
            </div>
          )}
        </div>
        {caption && (
          <figcaption id={captionId} className="GalleryCard__caption">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }
}

export default GalleryCard;
