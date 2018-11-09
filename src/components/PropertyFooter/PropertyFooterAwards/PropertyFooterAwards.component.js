import React from 'react';
import PropTypes from 'prop-types';
import './PropertyFooterAwards.scss'; // build-ignore-line

const PropertyFooterAwards = ({ awards }) => {
  const [head, ...tail] = awards;

  return (
    <div className="PropertyFooterAwards">
      <div className="PropertyFooterAwards__head">
        <img src={head.imageUrl} alt="award-icon" />
      </div>

      <div className="PropertyFooterAwards__tail">
        {tail.splice(0, 2).map((award, index) => (
          <img
            key={index}
            className="PropertyFooterAwards__tail-award"
            src={award.imageUrl}
            alt="award-icon"
          />
        ))}
      </div>
    </div>
  );
};

PropertyFooterAwards.propTypes = {
  awards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PropertyFooterAwards;
