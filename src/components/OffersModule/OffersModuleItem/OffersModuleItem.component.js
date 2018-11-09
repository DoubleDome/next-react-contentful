import React from 'react';
import './OffersModuleItem.scss'; // build-ignore-line
import PropTypes from 'prop-types';

const allOffersButton = (href, label) => {
  const shouldRender = href && label;

  return shouldRender ? (
    <a href={href} className="OffersModuleItem__more">
      {label}
    </a>
  ) : null;
};

const OffersModuleItem = ({
  superTitle,
  title,
  subtitle,
  imageSrc,
  ctaHref,
  ctaLabel,
  secondaryActionHref,
  secondaryActionLabel,
}) => (
  <div className="OffersModuleItem">
    <div className="OffersModuleItem__image-container">
      <img className="OffersModuleItem__image" src={imageSrc} alt={title} />
    </div>
    <div className="OffersModuleItem__content">
      <div className="OffersModuleItem__super-title">{superTitle}</div>

      <div className="OffersModuleItem__title">{title}</div>

      <div className="OffersModuleItem__subtitle">{subtitle}</div>

      <div className="OffersModuleItem__actions">
        <a href={ctaHref} className="OffersModuleItem__cta">
          {ctaLabel}
        </a>
        {allOffersButton(secondaryActionHref, secondaryActionLabel)}
      </div>
    </div>
  </div>
);

export default OffersModuleItem;

OffersModuleItem.propTypes = {
  superTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  ctaHref: PropTypes.string.isRequired,
  ctaLabel: PropTypes.string.isRequired,
  secondaryActionHref: PropTypes.string,
  secondaryActionLabel: PropTypes.string,
};

OffersModuleItem.defaultProps = {
  secondaryActionHref: null,
  secondaryActionLabel: null,
};
