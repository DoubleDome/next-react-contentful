import React from 'react';
import PropTypes from 'prop-types';
import RewardsFooterCard from './RewardsFooterCard/RewardsFooterCard.component';
import './RewardsFooter.scss'; // build-ignore-line

const RewardsFooter = ({ cards }) => (
  <div className="RewardsFooter">
    <div className="RewardsFooter__container">
      <div className="RewardsFooter__row">
        {cards.map(card => (
          <RewardsFooterCard key={card.key} card={card}>
            {card.heading}
          </RewardsFooterCard>
        ))}
      </div>
    </div>
  </div>
);

RewardsFooter.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RewardsFooter;
