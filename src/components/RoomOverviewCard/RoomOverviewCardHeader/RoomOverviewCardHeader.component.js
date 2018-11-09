import React from 'react';
import PropTypes from 'prop-types';

import ResponsiveDiv from '../../ResponsiveDiv.component';
import imageUrl from '../../../utils/images';

import './RoomOverviewCardHeader.scss'; // build-ignore-line

const RoomOverviewCardHeader = ({ title, image, action }) => (
  <div className="RoomOverviewCardHeader">
    <div className="RoomOverviewCardHeader__inner">
      <ResponsiveDiv screen="min-md">
        {minMd =>
          minMd ? (
            <a className="RoomOverviewCardHeader__link" href={action.url}>
              <img
                className="RoomOverviewCardHeader__image"
                src={imageUrl({
                  ratio: '16x9',
                  quality: 'high',
                  url: image.url,
                })}
                alt={image.alt || title || ''}
                role={image.alt ? undefined : 'presentation'}
              />
              <div className="RoomOverviewCardHeader__overlay">
                <div className="RoomOverviewCardHeader__actions">
                  <div className="RoomOverviewCardHeader__cta">
                    {action.label}
                  </div>
                </div>
              </div>
            </a>
          ) : (
            <img
              className="RoomOverviewCardHeader__image"
              alt={image.alt}
              src={imageUrl({ ratio: '4x3', quality: 'high', url: image.url })}
            />
          )
        }
      </ResponsiveDiv>
    </div>
  </div>
);

RoomOverviewCardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }).isRequired,
  action: PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

RoomOverviewCardHeader.defaultProps = {
  action: undefined,
};

export default RoomOverviewCardHeader;
