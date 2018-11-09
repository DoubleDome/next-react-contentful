import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuidv4 from 'uuid/v4';

import ResponsiveDiv from '../ResponsiveDiv.component';
import RoomOverviewCardHeader from './RoomOverviewCardHeader/RoomOverviewCardHeader.component';
import RoomOverviewCardDesktopActions from './RoomOverviewCardDesktopActions/RoomOverviewCardDesktopActions.component';
import RoomOverviewCardMobileActions from './RoomOverviewCardMobileActions/RoomOverviewCardMobileActions.component';
import './RoomOverviewCard.scss'; // build-ignore-line

class RoomOverviewCard extends React.PureComponent {
  static propTypes = {
    room: PropTypes.shape({
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string,
      }).isRequired,
      title: PropTypes.string.isRequired,
      keyValues: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string,
      primaryAction: PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
      secondaryAction: PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
      tertiaryAction: PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    }).isRequired,
    variant: PropTypes.oneOf(['default', 'full-row']),
  };

  static defaultProps = {
    variant: 'default',
  };

  render() {
    const {
      room: {
        title,
        keyValues,
        description,
        image,
        primaryAction,
        secondaryAction,
        tertiaryAction,
      },
      variant,
    } = this.props;

    const titleId = uuidv4();
    const descriptionId = uuidv4();

    return (
      <div
        className={classNames('RoomOverviewCard', {
          [`RoomOverviewCard--variant--${variant}`]: true,
        })}
        role="region"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
      >
        <div className="RoomOverviewCard__header">
          <RoomOverviewCardHeader
            title={title}
            image={image}
            action={secondaryAction}
          />
        </div>
        <div className="RoomOverviewCard__main">
          <div className="RoomOverviewCard__content">
            <div id={titleId} className="RoomOverviewCard__title">
              {title}
            </div>

            {keyValues &&
              keyValues.length > 0 && (
                <div className="RoomOverviewCard__key-values">
                  {keyValues.map((keyValue, index) => (
                    <div key={index} className="RoomOverviewCard__key-value">
                      {keyValue}
                    </div>
                  ))}
                </div>
              )}

            {description && (
              <div id={descriptionId} className="RoomOverviewCard__description">
                {description}
              </div>
            )}
          </div>
          <div className="RoomOverviewCard__actions">
            <ResponsiveDiv screen="max-sm">
              {matches =>
                matches ? (
                  <RoomOverviewCardMobileActions
                    primaryAction={primaryAction}
                    secondaryAction={secondaryAction}
                    tertiaryAction={tertiaryAction}
                  />
                ) : (
                  <RoomOverviewCardDesktopActions
                    primaryAction={primaryAction}
                    tertiaryAction={tertiaryAction}
                  />
                )
              }
            </ResponsiveDiv>
          </div>
        </div>
      </div>
    );
  }
}

export default RoomOverviewCard;
