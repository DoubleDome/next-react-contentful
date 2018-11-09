import React from 'react';
import PropTypes from 'prop-types';

import OffersModuleViewAllButton from './OffersModuleViewAllButton/OffersModuleViewAllButton.component';
import OffersModuleItem from './OffersModuleItem/OffersModuleItem.component';
import './OffersModule.scss'; // build-ignore-line

const OffersModule = ({ heading, allOffersHref, allOffersLabel, offers }) => (
  <div className="OffersModule">
    <div className="OffersModule__container">
      <div className="OffersModule__header">
        <div className="OffersModule__heading">{heading}</div>
        <div className="OffersModule__header-actions">
          <OffersModuleViewAllButton
            href={allOffersHref}
            label={allOffersLabel}
          />
        </div>
      </div>
    </div>

    <div className="OffersModule__items-container">
      <div className="OffersModule__items-row">
        <div className="OffersModule__items">
          {offers.map(offer => (
            <div key={offer.id} className="OffersModule__item">
              <OffersModuleItem {...offer} />
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="OffersModule__container">
      <div className="OffersModule__footer-actions">
        <OffersModuleViewAllButton
          href={allOffersHref}
          label={allOffersLabel}
        />
      </div>
    </div>
  </div>
);

export default OffersModule;

OffersModule.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  heading: PropTypes.string.isRequired,
  allOffersHref: PropTypes.string.isRequired,
  allOffersLabel: PropTypes.string.isRequired,
};
