import React from 'react';
import PropTypes from 'prop-types';
import './RewardsFooterCard.scss'; // build-ignore-line

const RewardsFooterCard = ({ card }) => (
  <div className="RewardsFooterCard">
    <div className="RewardsFooterCard__row">
      <div className="RewardsFooterCard__content">
        <div className="RewardsFooterCard__heading">{card.heading}</div>
        <div className="RewardsFooterCard__description">{card.description}</div>
        <div className="RewardsFooterCard__actions">
          <div className="RewardsFooterCard__cta">{card.cta}</div>
        </div>
      </div>

      <div className="RewardsFooterCard__image-container">
        <img
          alt={card.imageAlt}
          src={card.imageSrc}
          className="RewardsFooterCard__image"
        />
      </div>
    </div>
  </div>
);

RewardsFooterCard.propTypes = {
  card: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    cta: PropTypes.string,
    imageAlt: PropTypes.string,
    imageSrc: PropTypes.string,
  }).isRequired,
};

export default RewardsFooterCard;
