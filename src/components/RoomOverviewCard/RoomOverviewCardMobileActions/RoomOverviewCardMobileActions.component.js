import React from 'react';
import PropTypes from 'prop-types';
import './RoomOverviewCardMobileActions.scss'; // build-ignore-line
import Button from '../../Button/Button.component';

const RoomOverviewCardMobileActions = ({
  primaryAction,
  secondaryAction,
  tertiaryAction,
}) => (
  <div className="RoomOverviewCardMobileActions">
    <div className="RoomOverviewCardMobileActions__top">
      {primaryAction && (
        <div className="RoomOverviewCardMobileActions__primary">
          <Button
            as="a"
            className=""
            variant="primary"
            fluid
            href={primaryAction.url}
            label={primaryAction.label}
          />
        </div>
      )}

      {secondaryAction && (
        <div className="RoomOverviewCardMobileActions__secondary">
          <Button
            as="a"
            className=""
            variant="secondary"
            fluid
            href={secondaryAction.url}
            label={secondaryAction.label}
          />
        </div>
      )}
    </div>

    <div className="RoomOverviewCardMobileActions__bottom">
      {tertiaryAction && (
        <div className="RoomOverviewCardMobileActions__tertiary">
          <div className="RoomOverviewCardMobileActions__tertiary-wrapper">
            <Button
              as="a"
              className=""
              variant="tertiary"
              fluid
              size="inline"
              href={tertiaryAction.url}
              label={tertiaryAction.label}
              iconRight="Right"
            />
          </div>
        </div>
      )}
    </div>
  </div>
);

RoomOverviewCardMobileActions.propTypes = {
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
};

RoomOverviewCardMobileActions.defaultProps = {
  primaryAction: undefined,
  secondaryAction: undefined,
  tertiaryAction: undefined,
};

export default RoomOverviewCardMobileActions;
