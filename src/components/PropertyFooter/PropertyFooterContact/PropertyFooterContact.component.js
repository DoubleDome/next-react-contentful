import React from 'react';
import PropTypes from 'prop-types';
import './PropertyFooterContact.scss'; // build-ignore-line

const PropertyFooterContact = ({ contact }) => (
  <React.Fragment>
    <div className="PropertyFooterContact__label">{contact.label}</div>
    <div className="PropertyFooterContact__address">
      {contact.address.map((line, index) => (
        <span key={index} className="PropertyFooterContact__address-line">
          {line}
        </span>
      ))}
    </div>
    <div className="PropertyFooterContact__phone">{contact.phone}</div>
    <div className="PropertyFooterContact__email">{contact.email}</div>
    <div className="PropertyFooterContact__social">
      {contact.social.map(({ iconUrl, label, url }, index) => (
        <a
          className="PropertyFooterContact__social-icon"
          key={index}
          href={url}
          title={label}
        >
          <img src={iconUrl} alt="social-media-icon" />
        </a>
      ))}
    </div>
  </React.Fragment>
);

PropertyFooterContact.propTypes = {
  contact: PropTypes.shape({
    label: PropTypes.string,
    address: PropTypes.arrayOf(PropTypes.string),
    phone: PropTypes.string,
    email: PropTypes.string,
    social: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PropertyFooterContact;
