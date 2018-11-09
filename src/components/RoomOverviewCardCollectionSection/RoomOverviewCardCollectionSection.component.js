import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './RoomOverviewCardCollectionSection.scss'; // build-ignore-line

import RoomOverviewCard from '../RoomOverviewCard/RoomOverviewCard.component';
import Section from '../Section/Section.component';

/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/44892321/Room+Overview+Card+Collection)
 */
class RoomOverviewCardCollectionSection extends React.PureComponent {
  static displayName = 'RoomOverviewCardCollectionSection';

  static propTypes = {
    layout: PropTypes.oneOf(['two-column', 'three-column']),
    rooms: PropTypes.arrayOf(
      PropTypes.shape({
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
      }),
    ),
  };

  static defaultProps = {
    layout: 'two-column',
    rooms: [],
  };

  render() {
    const { rooms, layout } = this.props;

    return (
      <Section padding={false} contentPadding>
        <div
          className={classNames('RoomOverviewCardCollectionSection', {
            [`RoomOverviewCardCollectionSection--layout--${layout}`]: true,
          })}
        >
          {rooms.map((room, index) => (
            <div
              key={index}
              className={classNames('RoomOverviewCardCollectionSection__item', {
                [`RoomOverviewCardCollectionSection__item--layout--${layout}`]: true,
              })}
            >
              <div className="RoomOverviewCardCollectionSection__item__inner">
                <RoomOverviewCard room={room} />
              </div>
            </div>
          ))}
        </div>
      </Section>
    );
  }
}

export default RoomOverviewCardCollectionSection;
