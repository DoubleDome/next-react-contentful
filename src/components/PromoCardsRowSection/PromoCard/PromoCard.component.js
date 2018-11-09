import PropTypes from 'prop-types';
import React from 'react';
import './PromoCard.scss'; // build-ignore-line

import Button from '../../Button/Button.component';
import StatusIcon from '../../StatusIcon/StatusIcon.component';

export const PromoCardPropTypes = {
  imageUrl: PropTypes.string.isRequired,
  categoryName: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  status: PropTypes.shape({
    color: PropTypes.oneOf(['red']),
    label: PropTypes.string,
  }),
  primaryAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  tertiaryAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/47186489/Promo+Card)
 */
class PromoCard extends React.PureComponent {
  static displayName = 'PromoCard';

  static propTypes = PromoCardPropTypes;

  static defaultProps = {
    categoryName: undefined,
    description: undefined,
    status: undefined,
    tertiaryAction: undefined,
  };

  render() {
    const {
      imageUrl,
      categoryName,
      title,
      description,
      status,
      primaryAction,
      tertiaryAction,
    } = this.props;
    return (
      <div className="PromoCard">
        <div className="PromoCard__image">
          <img src={imageUrl} alt={title} />
        </div>

        {(categoryName || status) && (
          <div className="PromoCard__metas">
            {categoryName && (
              <div className="PromoCard__meta PromoCard__meta--left">
                {categoryName}
              </div>
            )}
            {status && (
              <div className="PromoCard__meta PromoCard__meta--right">
                <StatusIcon color={status.color} />
                &nbsp;
                {status.label}
              </div>
            )}
          </div>
        )}

        <h4 className="PromoCard__title">{title}</h4>

        {description && (
          <div className="PromoCard__description">{description}</div>
        )}

        <div className="PromoCard__buttons">
          {primaryAction && (
            <div className="PromoCard__primary-button">
              <Button
                variant="primary"
                fluid
                as="a"
                href={primaryAction.url}
                label={primaryAction.label}
              />
            </div>
          )}

          {tertiaryAction && (
            <div className="PromoCard__tertiary-button">
              <Button
                variant="tertiary"
                fluid
                as="a"
                size="inline"
                href={tertiaryAction.url}
                label={tertiaryAction.label}
                iconRight="Right"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PromoCard;
