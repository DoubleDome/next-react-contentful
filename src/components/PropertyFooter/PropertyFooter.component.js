import React from 'react';
import PropTypes from 'prop-types';

import './PropertyFooter.scss'; // build-ignore-line

import PropertyFooterAwards from './PropertyFooterAwards/PropertyFooterAwards.component';
import PropertyFooterContact from './PropertyFooterContact/PropertyFooterContact.component';
import PropertyFooterLinksGroup from './PropertyFooterLinksGroup/PropertyFooterLinksGroup.component';
import PropertyFooterMobileLabel from './PropertyFooterMobileLabel/PropertyFooterMobileLabel.component';

const PropertyFooter = ({ awards, contact, links, mobileLabel }) => (
  <section className="PropertyFooter">
    <div className="PropertyFooter__container">
      <div className="PropertyFooter__row">
        <div className="PropertyFooter__contact">
          <PropertyFooterContact contact={contact} />
        </div>
        <div className="PropertyFooter__links">
          <PropertyFooterMobileLabel label={mobileLabel} />
          <PropertyFooterLinksGroup linksGroup={links[0]} />
        </div>
        <div className="PropertyFooter__links">
          <PropertyFooterLinksGroup linksGroup={links[1]} />
        </div>
        <div className="PropertyFooter__links">
          <PropertyFooterLinksGroup linksGroup={links[2]} />
          <PropertyFooterLinksGroup linksGroup={links[3]} />
          <PropertyFooterLinksGroup linksGroup={links[4]} />
          <PropertyFooterLinksGroup linksGroup={links[5]} />
        </div>
        <div className="PropertyFooter__awards">
          <PropertyFooterAwards awards={awards} />
        </div>
      </div>
    </div>
  </section>
);

PropertyFooter.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  awards: PropTypes.arrayOf(PropTypes.object).isRequired,
  contact: PropTypes.shape({
    label: PropTypes.string,
    address: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  mobileLabel: PropTypes.string.isRequired,
};

export default PropertyFooter;
