import React from 'react';
import PropTypes from 'prop-types';
import BookForm from '../BookForm/BookForm.component';
import './OldHero.scss'; // build-ignore-line

const backgroundStyle = imageUrl => ({
  backgroundImage: `url('${imageUrl}')`,
});

const OldHero = ({ imageUrl }) => (
  <div className="OldHero">
    <div style={backgroundStyle(imageUrl)} className="OldHero__background">
      <div className="OldHero__overlay">
        <div className="OldHero__container">
          <div className="OldHero__content">
            <div className="OldHero__headline">
              Travel beyond your expectations, with Aria and MGM Resorts
            </div>
            <div className="OldHero__headline-short">
              Book Now and Save 25% through June 8th
            </div>
            <div className="OldHero__booking">
              <BookForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

OldHero.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default OldHero;
