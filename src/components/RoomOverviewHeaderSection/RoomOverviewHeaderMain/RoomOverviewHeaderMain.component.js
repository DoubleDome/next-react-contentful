import PropTypes from 'prop-types';
import React from 'react';
import './RoomOverviewHeaderMain.scss'; // build-ignore-line

import Button from '../../Button/Button.component';
import CustomContent from '../../CustomContent/CustomContent.component';
import ResponsiveDiv from '../../ResponsiveDiv.component';

class RoomOverviewHeaderMain extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    primaryAction: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string,
      onClick: PropTypes.func,
      onKeyPress: PropTypes.func,
    }),
    tertiaryAction: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string,
      onClick: PropTypes.func,
      onKeyPress: PropTypes.func,
    }),
  };

  static defaultProps = {
    title: undefined,
    content: undefined,
    primaryAction: undefined,
    tertiaryAction: undefined,
  };

  render() {
    const { title, content, primaryAction, tertiaryAction } = this.props;
    return (
      <div className="RoomOverviewHeaderMain">
        {title && <h2 className="RoomOverviewHeaderMain__title">{title}</h2>}
        {content && (
          <div className="RoomOverviewHeaderMain__content">
            <ResponsiveDiv screen="min-md">
              {minMd => (
                <CustomContent
                  innerHTML={content}
                  variant={minMd ? 'large' : 'small'}
                />
              )}
            </ResponsiveDiv>
          </div>
        )}
        {(primaryAction || tertiaryAction) && (
          <div className="RoomOverviewHeaderMain__actions">
            {primaryAction && (
              <div className="RoomOverviewHeaderMain__action">
                <Button
                  as="a"
                  href={primaryAction.href}
                  label={primaryAction.label}
                  variant="primary"
                  size="medium-padded"
                />
              </div>
            )}
            {tertiaryAction && (
              <div className="RoomOverviewHeaderMain__action">
                <Button
                  as="a"
                  href={tertiaryAction.href}
                  label={tertiaryAction.label}
                  variant="tertiary"
                  size="medium-padded"
                  iconRight="Right"
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default RoomOverviewHeaderMain;
