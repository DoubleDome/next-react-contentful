import React from 'react';
import PropTypes from 'prop-types';
import './RoomOverviewCardDesktopActions.scss'; // build-ignore-line
import Button from '../../Button/Button.component';

const RoomOverviewCardDesktopActions = ({ primaryAction, tertiaryAction }) => (
  <div className="RoomOverviewCardDesktopActions">
    <div className="RoomOverviewCardDesktopActions__wrapper">
      <div className="RoomOverviewCardDesktopActions__primary">
        <Button
          as="a"
          variant="primary"
          fluid
          href={primaryAction.url}
          label={primaryAction.label}
        />
      </div>

      <div className="RoomOverviewCardDesktopActions__tertiary">
        <Button
          as="a"
          variant="tertiary"
          size="inline"
          href={tertiaryAction.url}
          label={tertiaryAction.label}
          iconRight="Right"
        />
      </div>
    </div>
  </div>
);

RoomOverviewCardDesktopActions.propTypes = {
  primaryAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  tertiaryAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default RoomOverviewCardDesktopActions;
