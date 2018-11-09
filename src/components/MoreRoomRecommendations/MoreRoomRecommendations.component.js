import PropTypes from 'prop-types';
import React from 'react';
import uuidv4 from 'uuid/v4';
import './MoreRoomRecommendations.scss'; // build-ignore-line

import MoreRoomRecommendationsRoomCard from './MoreRoomRecommendationsRoomCard/MoreRoomRecommendationsRoomCard.component';
import Right from '../../shared/Icons/Right';

const MoreRoomRecommendations = ({ header, ctaPrimary, items }) => (
  <div className="MoreRoomRecommendations">
    <div className="MoreRoomRecommendations__header">
      <div className="MoreRoomRecommendations__heading">{header}</div>
      <div className="MoreRoomRecommendations__header-ctas">
        <a
          href={ctaPrimary.url}
          className="MoreRoomRecommendations__top-button"
        >
          <span className="MoreRoomRecommendations__button-label">
            {ctaPrimary.label}
          </span>
          <Right id={uuidv4()} color="currentColor" size={16} />
        </a>
      </div>
    </div>

    <div className="MoreRoomRecommendations__cards">
      <MoreRoomRecommendationsRoomCard {...items[0]} />
      <MoreRoomRecommendationsRoomCard {...items[1]} />
      <MoreRoomRecommendationsRoomCard {...items[2]} />
    </div>

    <div className="MoreRoomRecommendations__footer-ctas">
      <a
        href={ctaPrimary.url}
        className="MoreRoomRecommendations__bottom-button"
      >
        {ctaPrimary.label}
      </a>
    </div>
  </div>
);

MoreRoomRecommendations.propTypes = {
  header: PropTypes.string.isRequired,
  ctaPrimary: PropTypes.shape({
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoreRoomRecommendations;
