import PropTypes from 'prop-types';
import React from 'react';
import uuidv4 from 'uuid/v4';
import './MoreRoomRecommendationsRoomCard.scss'; // build-ignore-line

import Right from '../../../shared/Icons/Right';

const MoreRoomRecommendationsRoomCard = ({
  headline,
  meta,
  body,
  ctaPrimary,
  ctaSecondary,
}) => (
  <div className="MoreRoomRecommendationsRoomCard">
    <img
      alt="Room"
      src="https://via.placeholder.com/416x312"
      className="MoreRoomRecommendationsRoomCard__image"
    />
    <div className="MoreRoomRecommendationsRoomCard__headline">{headline}</div>
    <div className="MoreRoomRecommendationsRoomCard__meta-row">
      <div className="MoreRoomRecommendationsRoomCard__meta">{meta[0]}</div>
      <div className="MoreRoomRecommendationsRoomCard__meta">{meta[1]}</div>
      <div className="MoreRoomRecommendationsRoomCard__meta">{meta[2]}</div>
      <div className="MoreRoomRecommendationsRoomCard__meta">{meta[3]}</div>
    </div>
    <div className="MoreRoomRecommendationsRoomCard__body">{body}</div>
    <div className="MoreRoomRecommendationsRoomCard__ctas">
      <a
        href={ctaPrimary.url}
        className="MoreRoomRecommendationsRoomCard__cta-primary"
      >
        {ctaPrimary.label}
      </a>
      <a
        href={ctaSecondary.url}
        className="MoreRoomRecommendationsRoomCard__cta-secondary"
      >
        <span className="MoreRoomRecommendationsRoomCard__cta-secondary-label">
          {ctaSecondary.label}
        </span>
        <Right id={uuidv4()} color="currentColor" size={16} />
      </a>
    </div>
  </div>
);

MoreRoomRecommendationsRoomCard.propTypes = {
  headline: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.string).isRequired,
  body: PropTypes.string.isRequired,
  ctaPrimary: PropTypes.shape({
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  ctaSecondary: PropTypes.shape({
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default MoreRoomRecommendationsRoomCard;
